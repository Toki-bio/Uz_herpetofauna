#!/usr/bin/env python3
"""Rebuild data.js from CSV ground truth, preserving existing descriptions/publications."""
import re, csv, os, sys

os.chdir(r'c:\toki\uzbekistan-herps')

RENAMES = {
    'Laudakia lehmanni': 'Paralaudakia lehmanni',
    'Varanus griseus': 'Varanus caspius',
    'Echis multisquamatus': 'Echis carinatus',
    'Mediodactylus russowii': 'Mediodactylus russowi',
}
RENAMES_REV = {v: k for k, v in RENAMES.items()}
REMOVE = {'Hynobius turkestanicus','Rana asiatica','Natrix natrix',
           'Platyceps najadum','Dolichophis caspius','Ptyas mucosa','Acanthodactylus erythrurus'}
REGIONS = ['Andijan','Fergana','Namangan','Tashkent','Syrdarya','Jizzak',
           'Samarkand','Kashkadarya','Surkhandarya','Bukhara','Navoi','Khorezm','Karakalpakstan']
FAMILY_MAP = {
    'Testudo':('Testudines','Testudinidae'),'Alsophylax':('Squamata','Gekkonidae'),
    'Crossobamon':('Squamata','Gekkonidae'),'Tenuidactylus':('Squamata','Gekkonidae'),
    'Mediodactylus':('Squamata','Gekkonidae'),'Teratoscincus':('Squamata','Sphaerodactylidae'),
    'Paralaudakia':('Squamata','Agamidae'),'Trapelus':('Squamata','Agamidae'),
    'Phrynocephalus':('Squamata','Agamidae'),'Pseudopus':('Squamata','Anguidae'),
    'Ablepharus':('Squamata','Scincidae'),'Asymblepharus':('Squamata','Scincidae'),
    'Eumeces':('Squamata','Scincidae'),'Eremias':('Squamata','Lacertidae'),
    'Varanus':('Squamata','Varanidae'),'Xerotyphlops':('Squamata','Typhlopidae'),
    'Eryx':('Squamata','Boidae'),'Boiga':('Squamata','Colubridae'),
    'Hemorrhois':('Squamata','Colubridae'),'Platyceps':('Squamata','Colubridae'),
    'Elaphe':('Squamata','Colubridae'),'Lycodon':('Squamata','Colubridae'),
    'Lytorhynchus':('Squamata','Colubridae'),'Natrix':('Squamata','Natricidae'),
    'Psammophis':('Squamata','Psammophiidae'),'Spalerosophis':('Squamata','Colubridae'),
    'Naja':('Squamata','Elapidae'),'Gloydius':('Squamata','Viperidae'),
    'Echis':('Squamata','Viperidae'),'Vipera':('Squamata','Viperidae'),
    'Macrovipera':('Squamata','Viperidae'),'Bufotes':('Anura','Bufonidae'),
    'Pelophylax':('Anura','Ranidae'),
}

def is_present(val):
    return val.strip().upper() in ('Х','X','х','x') if val else False

def binomial(full):
    clean = re.sub(r'\([^)]*\)', '', full).strip().rstrip(',').strip()
    clean = ' '.join(clean.split())
    w = clean.split()
    return (w[0]+' '+w[1]) if len(w)>=2 else clean

def is_subsp(full):
    clean = re.sub(r'\([^)]*\)', '', full).strip().rstrip(',').strip()
    clean = ' '.join(clean.split())
    w = clean.split()
    return len(w)>=3 and w[2][0].islower()

def trinomial(full):
    clean = re.sub(r'\([^)]*\)', '', full).strip().rstrip(',').strip()
    clean = ' '.join(clean.split())
    w = clean.split()
    return ' '.join(w[:3]) if len(w)>=3 else clean

def js_str(s):
    if s is None: return 'null'
    return '"' + s.replace('\\','\\\\').replace('"','\\"').replace('\n',' ').replace('\r','') + '"'

def extract_raw(block, name):
    """Extract raw JS value for a field from a block string."""
    pattern = rf'(?:^|\n)\s*{name}:\s*'
    m = re.search(pattern, block)
    if not m: return None
    start = m.end()
    if start >= len(block): return None
    ch = block[start]
    if ch == '"':
        i = start + 1
        while i < len(block):
            if block[i] == '\\': i += 2; continue
            if block[i] == '"': return block[start:i+1]
            i += 1
    elif ch in '[{':
        close = ']' if ch=='[' else '}'
        opener = ch; depth = 0; i = start; in_str = False
        while i < len(block):
            c = block[i]
            if in_str:
                if c == '\\': i += 2; continue
                if c == '"': in_str = False
            else:
                if c == '"': in_str = True
                elif c == opener: depth += 1
                elif c == close:
                    depth -= 1
                    if depth == 0: return block[start:i+1]
            i += 1
    elif block[start:start+4] == 'null':
        return 'null'
    return None

# ═══ 1. PARSE EXISTING DATA.JS ═══
with open('js/data.js', encoding='utf-8') as f:
    js = f.read()

arr_m = re.search(r'const speciesData = \[', js)
arr_start = arr_m.end()
depth = 1; i = arr_start
while depth > 0:
    if js[i] == '[': depth += 1
    elif js[i] == ']': depth -= 1
    if depth > 0: i += 1
arr_end = i
species_text = js[arr_start:arr_end]

blocks = []; depth = 0; start = None
for idx, ch in enumerate(species_text):
    if ch == '{':
        if depth == 0: start = idx
        depth += 1
    elif ch == '}':
        depth -= 1
        if depth == 0 and start is not None:
            blocks.append(species_text[start:idx+1])
            start = None

old_map = {}
for b in blocks:
    m = re.search(r'scientificName:\s*"([^"]+)"', b)
    if m: old_map[m.group(1)] = b

# Extract everything after speciesData array
rest_start = arr_end + 1  # skip ]
# Find the semicolon
while rest_start < len(js) and js[rest_start] in ';\n\r ':
    rest_start += 1
rest_of_file = js[rest_start:]

print(f"Loaded {len(old_map)} existing species: {list(old_map.keys())}")

# ═══ 2. PARSE CSVs ═══
amp_path = r'c:\work\UzHerp\Reptiles_UZ+ ID + Location - Amphibians-Uz .csv'
rep_path = r'c:\work\UzHerp\Reptiles_UZ+ ID + Location - Reptiles-Uz.csv'

csv_species = []
csv_subspecies = {}  # binomial -> list

# Amphibians: ID(0), №(1), SciName(2), Russian(3), Uzbek(4), English(5), IUCN(6), RedBook(7), CITES(8), CMS(9), Endemism(10), regions(11-23)
with open(amp_path, encoding='utf-8') as f:
    for row in csv.reader(f):
        if not row or len(row) < 6 or row[2].strip() == 'Scientific name':
            continue
        sci = row[2].strip()
        if not sci: continue
        bn = binomial(sci)
        regs = {}
        for ri, rn in enumerate(REGIONS):
            col = 11 + ri
            regs[rn] = is_present(row[col]) if col < len(row) else False
        info = {
            'name': bn, 'russian': row[3].strip(), 'uzbek': row[4].strip(),
            'english': row[5].strip(),
            'iucn': row[6].strip() if len(row)>6 else '',
            'redbook': row[7].strip() if len(row)>7 else '',
            'cites': row[8].strip() if len(row)>8 else '',
            'endemism': row[10].strip() if len(row)>10 else '',
            'regions': regs, 'cls': 'Amphibia',
        }
        if is_subsp(sci):
            parent = binomial(sci)
            csv_subspecies.setdefault(parent, []).append({
                'name': trinomial(sci), 'english': info['english'],
                'russian': info['russian'], 'regions': regs,
            })
        else:
            csv_species.append(info)

# Reptiles: №(0), №(1), ID(2), SciName(3), Russian(4), Uzbek(5), English(6), IUCN(7), RedBook(8), CITES(9), Endemism(10), regions(11-23)
with open(rep_path, encoding='utf-8') as f:
    for row in csv.reader(f):
        if not row or len(row) < 7 or row[3].strip() == 'Scientific name':
            continue
        sci = row[3].strip()
        if not sci: continue
        bn = binomial(sci)
        regs = {}
        for ri, rn in enumerate(REGIONS):
            col = 11 + ri
            regs[rn] = is_present(row[col]) if col < len(row) else False
        info = {
            'name': bn, 'russian': row[4].strip(), 'uzbek': row[5].strip(),
            'english': row[6].strip(),
            'iucn': row[7].strip() if len(row)>7 else '',
            'redbook': row[8].strip() if len(row)>8 else '',
            'cites': row[9].strip() if len(row)>9 else '',
            'endemism': row[10].strip() if len(row)>10 else '',
            'regions': regs, 'cls': 'Reptilia',
        }
        if is_subsp(sci):
            parent = binomial(sci)
            csv_subspecies.setdefault(parent, []).append({
                'name': trinomial(sci), 'english': info['english'],
                'russian': info['russian'], 'regions': regs,
            })
        else:
            csv_species.append(info)

print(f"CSV: {len(csv_species)} species, {sum(len(v) for v in csv_subspecies.values())} subspecies")
for sp in csv_species:
    print(f"  {sp['name']}")

# ═══ 3. GENERATE ENTRIES ═══
def get_old(name):
    if name in old_map: return old_map[name]
    old_name = RENAMES_REV.get(name)
    if old_name and old_name in old_map: return old_map[old_name]
    return None

def regions_js(regs):
    items = [f'{r}: {"true" if regs.get(r) else "false"}' for r in REGIONS]
    return '{ ' + ', '.join(items) + ' }'

def subs_js(subs):
    if not subs: return 'null'
    items = []
    for s in subs:
        rng = ', '.join(r for r in REGIONS if s['regions'].get(r))
        if not rng: rng = 'Range data needed'
        items.append(f'            {{ name: {js_str(s["name"])}, range: {js_str(rng)} }}')
    return '[\n' + ',\n'.join(items) + '\n        ]'

def gen_entry(sp):
    name = sp['name']
    block = get_old(name)
    genus = name.split()[0]
    cls = sp['cls']
    order_val, family_val = FAMILY_MAP.get(genus, ('Squamata','Unknown'))

    if block:
        desc = extract_raw(block, 'description') or js_str('')
        dist = extract_raw(block, 'distribution') or js_str('')
        hab = extract_raw(block, 'habitat') or js_str('')
        notes = extract_raw(block, 'notes') or js_str('')
        research = extract_raw(block, 'researchPlans') or js_str('')
        coords = extract_raw(block, 'coordinates') or '{ lat: 40.0, lng: 65.0 }'
        ncbi = extract_raw(block, 'ncbiData') or '[]'
        pubs = extract_raw(block, 'publications') or '[]'
        # preserve old family/order if available
        old_fam = extract_raw(block, 'family')
        if old_fam and old_fam != 'null': family_val = old_fam.strip('"')
        old_ord = extract_raw(block, 'order')
        if old_ord and old_ord != 'null': order_val = old_ord.strip('"')
    else:
        desc = js_str('')
        present_r = [r for r in REGIONS if sp['regions'].get(r)]
        dist = js_str(', '.join(present_r) if present_r else 'Uzbekistan')
        hab = js_str('')
        notes = js_str('')
        research = js_str('')
        coords = '{ lat: 40.0, lng: 65.0 }'
        safe = name.replace(' ','+')
        ncbi = f'[\n            {{ type: "Nucleotide", url: "https://www.ncbi.nlm.nih.gov/nuccore/?term={safe}" }}\n        ]'
        pubs = '[]'

    # Subspecies: prefer CSV if available, else keep old
    sub = csv_subspecies.get(name)
    if sub:
        sub_val = subs_js(sub)
    elif block:
        sub_val = extract_raw(block, 'subspecies') or 'null'
    else:
        sub_val = 'null'

    iucn = js_str(sp['iucn']) if sp['iucn'] else (extract_raw(block, 'iucnStatus') if block else js_str(''))
    common = js_str(sp['english']) if sp['english'] else (extract_raw(block, 'commonName') if block else js_str(''))

    return f"""    {{
        scientificName: {js_str(name)},
        commonName: {common},
        russianName: {js_str(sp['russian'])},
        uzbekName: {js_str(sp['uzbek'])},
        class: {js_str(cls)},
        order: {js_str(order_val)},
        family: {js_str(family_val)},
        subfamily: null,
        subspecies: {sub_val},
        description: {desc},
        distribution: {dist},
        habitat: {hab},
        iucnStatus: {iucn},
        nationalStatus: {js_str(sp['redbook'])},
        cites: {js_str(sp['cites'])},
        endemism: {js_str(sp['endemism'])},
        regions: {regions_js(sp['regions'])},
        coordinates: {coords},
        ncbiData: {ncbi},
        publications: {pubs},
        notes: {notes},
        researchPlans: {research}
    }}"""

entries = [gen_entry(sp) for sp in csv_species]
print(f"\nGenerated {len(entries)} entries")

# ═══ 4. UPDATE REST OF FILE ═══
updated_rest = rest_of_file
for old_name, new_name in RENAMES.items():
    updated_rest = updated_rest.replace(f'"{old_name}"', f'"{new_name}"')

# Remove locality entries for removed species
for sp_name in REMOVE:
    pattern = rf'\n\s*"{re.escape(sp_name)}":\s*\[.*?\],'
    updated_rest = re.sub(pattern, '', updated_rest, flags=re.DOTALL)

# Remove from research plan species arrays
for sp_name in REMOVE:
    updated_rest = updated_rest.replace(f'"{sp_name}", ', '')
    updated_rest = updated_rest.replace(f', "{sp_name}"', '')
    updated_rest = updated_rest.replace(f'"{sp_name}"', '')

# ═══ 5. WRITE ═══
header = """// Comprehensive Species Data for Uzbekistan Herpetofauna
// Compiled from iNaturalist, scientific literature, and field guides (2026)
// Updated from official checklist CSV (February 2026)

"""
with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(header)
    f.write('const speciesData = [\n')
    f.write(',\n'.join(entries))
    f.write('\n];\n\n')
    f.write(updated_rest)

print("\n✓ data.js written successfully!")

# Summary
csv_names = {sp['name'] for sp in csv_species}
old_names = set(old_map.keys())
renamed_old = {RENAMES.get(n, n) for n in old_names}
truly_new = csv_names - renamed_old
print(f"\nNew species added ({len(truly_new)}):")
for s in sorted(truly_new): print(f"  + {s}")
print(f"\nSpecies removed ({len(REMOVE)}):")
for s in sorted(REMOVE): print(f"  - {s}")
print(f"\nRenamed ({len(RENAMES)}):")
for o,n in RENAMES.items(): print(f"  {o} → {n}")
