// Main JavaScript for Uzbekistan Herpetofauna Database
// Phylogenetic Tree with Edit Mode, Publications, Subspecies, and Descriptions

let editMode = false;
let currentSpecies = null;

document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    document.getElementById('update-date').textContent = new Date().toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric'
    });
    updateStatistics();
    buildPhylogeneticTree();
    displayLiterature(literatureData);
    displayResearch(researchPlans);
    setupEventListeners();
    expandAllTreeNodes();
    initCompare();
}

function updateStatistics() {
    const total = speciesData.length;
    const reptiles = speciesData.filter(s => s.class === 'Reptilia').length;
    const amphibians = speciesData.filter(s => s.class === 'Amphibia').length;
    const threatened = speciesData.filter(s => ['VU', 'EN', 'CR'].includes(s.iucnStatus)).length;
    document.getElementById('total-species').textContent = total;
    document.getElementById('total-reptiles').textContent = reptiles;
    document.getElementById('total-amphibians').textContent = amphibians;
    document.getElementById('threatened-species').textContent = threatened;
    document.getElementById('welcome-total').textContent = total;
    document.getElementById('welcome-threatened').textContent = threatened;
    const endemic = speciesData.filter(s => s.endemism && s.endemism.startsWith('UZ') && !s.endemism.includes(',')).length;
    document.getElementById('welcome-endemic').textContent = endemic || '~5';
}

// ═══════════════════════════════════════════
// Edit Mode
// ═══════════════════════════════════════════
function toggleEditMode() {
    if (!editMode) {
        document.getElementById('password-overlay').classList.add('active');
        document.getElementById('password-input').value = '';
        document.getElementById('password-input').focus();
        document.getElementById('password-error').style.display = 'none';
    } else {
        editMode = false;
        document.body.classList.remove('edit-mode');
        document.getElementById('edit-toggle').classList.remove('active');
        document.getElementById('edit-toggle').textContent = '✏️ Edit';
    }
}

function submitPassword() {
    const pwd = document.getElementById('password-input').value;
    if (pwd === 'Bufo') {
        editMode = true;
        document.body.classList.add('edit-mode');
        document.getElementById('edit-toggle').classList.add('active');
        document.getElementById('edit-toggle').textContent = '🔓 Exit Edit';
        document.getElementById('password-overlay').classList.remove('active');
        // Re-render current species if one is displayed
        if (currentSpecies) displaySpeciesDetail(currentSpecies);
    } else {
        document.getElementById('password-error').style.display = 'block';
    }
}

function cancelPassword() {
    document.getElementById('password-overlay').classList.remove('active');
}

function startEdit(field, speciesName) {
    const sp = speciesData.find(s => s.scientificName === speciesName);
    if (!sp) return;
    const container = document.getElementById('edit-' + field);
    if (!container) return;
    const current = sp[field] || '';
    container.innerHTML = `
        <textarea class="editable-textarea" id="edit-val-${field}">${escapeHtml(current)}</textarea>
        <div>
            <button class="save-edit-btn" onclick="saveEdit('${field}', '${escapeAttr(speciesName)}')">Save</button>
            <button class="cancel-edit-btn" onclick="cancelEdit('${field}')">Cancel</button>
        </div>
    `;
}

function saveEdit(field, speciesName) {
    const sp = speciesData.find(s => s.scientificName === speciesName);
    if (!sp) return;
    const val = document.getElementById('edit-val-' + field).value;
    sp[field] = val;
    displaySpeciesDetail(sp);
}

function cancelEdit(field) {
    if (currentSpecies) displaySpeciesDetail(currentSpecies);
}

function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function escapeAttr(str) {
    return str.replace(/'/g, "\\'");
}

// Auto-linkify DOIs and URLs inside citation text
function linkifyCitation(text) {
    // DOI pattern
    text = text.replace(/\b(10\.\d{4,}\/[^\s,;)]+)/g, '<a href="https://doi.org/$1" target="_blank">$1</a>');
    // URL pattern (https or http)
    text = text.replace(/(?<!href=")(https?:\/\/[^\s<,;)]+)/g, '<a href="$1" target="_blank">$1</a>');
    return text;
}

// Extract title portion from a citation string for search
function extractCitationTitle(citation) {
    // Try to find text after year in parens, before the journal
    const m = citation.match(/\(\d{4}\)\.?\s*(.+?)[\.\?!]/);
    if (m) return m[1].substring(0, 80);
    // Fallback: use first 80 chars
    return citation.substring(0, 80);
}

// Auto-italicize binomial species names in text
function italicizeSpeciesNames(text) {
    if (!text) return '';
    // Build a set of known species/genus names
    const genera = new Set();
    speciesData.forEach(s => {
        genera.add(s.scientificName.split(' ')[0]);
    });
    // Match Genus species (capital + lowercase)
    text = text.replace(/\b([A-Z][a-z]+)\s+([a-z]{2,}(?:\s+[a-z]+)?)\b/g, function(match, g, sp) {
        if (genera.has(g)) return '<i>' + g + ' ' + sp + '</i>';
        // Also match abbreviated genus: E. velox etc.
        return match;
    });
    // Match abbreviated genus names: B. viridis, E. velox etc.
    text = text.replace(/\b([A-Z])\.\s+([a-z]{2,})\b/g, '<i>$1. $2</i>');
    return text;
}

// Photo upload helpers
function triggerPhotoUpload(speciesName) {
    const input = document.getElementById('photo-file-input');
    input.setAttribute('data-species', speciesName);
    input.click();
}

function handlePhotoUpload(input) {
    const file = input.files[0];
    if (!file) return;
    const speciesName = input.getAttribute('data-species');
    const sp = speciesData.find(s => s.scientificName === speciesName);
    if (!sp) return;
    const reader = new FileReader();
    reader.onload = function(e) {
        sp.photo = e.target.result; // base64 data URL
        sp.photoCaption = sp.photoCaption || '';
        displaySpeciesDetail(sp);
    };
    reader.readAsDataURL(file);
    input.value = ''; // reset
}

function setPhotoUrl(speciesName) {
    const url = prompt('Enter image URL:');
    if (!url) return;
    const sp = speciesData.find(s => s.scientificName === speciesName);
    if (!sp) return;
    sp.photo = url;
    sp.photoCaption = sp.photoCaption || '';
    displaySpeciesDetail(sp);
}

function removePhoto(speciesName) {
    const sp = speciesData.find(s => s.scientificName === speciesName);
    if (!sp) return;
    sp.photo = null;
    sp.photoCaption = null;
    displaySpeciesDetail(sp);
}

function removeLocality(speciesName, index) {
    if (!localityData[speciesName]) return;
    localityData[speciesName].splice(index, 1);
    const sp = speciesData.find(s => s.scientificName === speciesName);
    if (sp) displaySpeciesDetail(sp);
}

// ═══════════════════════════════════════════
// External Links
// ═══════════════════════════════════════════
function generateExternalLinks(species) {
    const links = [];
    links.push({
        name: 'iNaturalist',
        url: `https://www.inaturalist.org/taxa/search?q=${encodeURIComponent(species.scientificName)}`
    });
    if (species.class === 'Reptilia') {
        const p = species.scientificName.split(' ');
        links.push({
            name: 'Reptile Database',
            url: `https://reptile-database.reptarium.cz/species?genus=${p[0]}&species=${p[1]}`
        });
    }
    if (species.class === 'Amphibia') {
        const p = species.scientificName.split(' ');
        links.push({
            name: 'AmphibiaWeb',
            url: `https://amphibiaweb.org/cgi/amphib_query?where-genus=${p[0]}&where-species=${p[1]}`
        });
    }
    links.push({
        name: 'PubMed',
        url: `https://pubmed.ncbi.nlm.nih.gov/?term=${encodeURIComponent(species.scientificName)}`
    });
    return links;
}

// ═══════════════════════════════════════════
// Build Phylogenetic Tree (compact)
// ═══════════════════════════════════════════
function buildPhylogeneticTree() {
    const tree = document.getElementById('phylo-tree');
    const taxonomy = {};
    speciesData.forEach(species => {
        const genus = species.scientificName.split(' ')[0];
        if (!taxonomy[species.class]) taxonomy[species.class] = {};
        if (!taxonomy[species.class][species.order]) taxonomy[species.class][species.order] = {};
        if (!taxonomy[species.class][species.order][species.family])
            taxonomy[species.class][species.order][species.family] = {};
        if (!taxonomy[species.class][species.order][species.family][genus])
            taxonomy[species.class][species.order][species.family][genus] = [];
        taxonomy[species.class][species.order][species.family][genus].push(species);
    });

    for (const className in taxonomy) {
        const classDiv = document.createElement('div');
        classDiv.className = 'tree-class';
        const classHeader = document.createElement('div');
        classHeader.className = 'tree-class-name';
        classHeader.innerHTML = `${className} <span class="tree-toggle">▼</span>`;
        classHeader.onclick = function() { toggleTreeNode(this); };
        classDiv.appendChild(classHeader);

        const classContent = document.createElement('div');
        classContent.className = 'tree-class-content';

        for (const orderName in taxonomy[className]) {
            const orderDiv = document.createElement('div');
            orderDiv.className = 'tree-order';
            const orderHeader = document.createElement('div');
            orderHeader.className = 'tree-order-name';
            orderHeader.innerHTML = `${orderName} <span class="tree-toggle">▼</span>`;
            orderHeader.onclick = function(e) { e.stopPropagation(); toggleTreeNode(this); };
            orderDiv.appendChild(orderHeader);

            const orderContent = document.createElement('div');
            orderContent.className = 'tree-order-content';

            for (const familyName in taxonomy[className][orderName]) {
                const familyDiv = document.createElement('div');
                familyDiv.className = 'tree-family';
                const familyHeader = document.createElement('div');
                familyHeader.className = 'tree-family-name';
                familyHeader.innerHTML = `${familyName} <span class="tree-toggle">▼</span>`;
                familyHeader.onclick = function(e) { e.stopPropagation(); toggleTreeNode(this); };
                familyDiv.appendChild(familyHeader);

                const familyContent = document.createElement('div');
                familyContent.className = 'tree-family-content';

                for (const genusName in taxonomy[className][orderName][familyName]) {
                    const genusDiv = document.createElement('div');
                    genusDiv.className = 'tree-genus';
                    const genusHeader = document.createElement('div');
                    genusHeader.className = 'tree-genus-name';
                    genusHeader.innerHTML = `<i>${genusName}</i> <span class="tree-toggle">▼</span>`;
                    genusHeader.onclick = function(e) { e.stopPropagation(); toggleTreeNode(this); };
                    genusDiv.appendChild(genusHeader);

                    const genusContent = document.createElement('div');
                    genusContent.className = 'tree-genus-content';

                    const species = taxonomy[className][orderName][familyName][genusName];
                    species.sort((a, b) => a.scientificName.localeCompare(b.scientificName));

                    species.forEach(sp => {
                        const speciesDiv = document.createElement('div');
                        speciesDiv.className = 'tree-species-item';
                        speciesDiv.setAttribute('data-species', sp.scientificName);
                        let badge = '';
                        if (['EN', 'VU', 'NT', 'CR'].includes(sp.iucnStatus)) {
                            badge = `<span class="species-badge badge-${sp.iucnStatus}">${sp.iucnStatus}</span>`;
                        }
                        const nameParts = sp.scientificName.split(' ');
                        const epithet = nameParts.slice(1).join(' ');
                        speciesDiv.innerHTML = `<span class="tree-species-name"><i>${epithet}</i></span>${badge}`;
                        speciesDiv.onclick = function(e) { e.stopPropagation(); selectSpecies(sp); };
                        genusContent.appendChild(speciesDiv);
                    });

                    genusDiv.appendChild(genusContent);
                    familyContent.appendChild(genusDiv);
                }
                familyDiv.appendChild(familyContent);
                orderContent.appendChild(familyDiv);
            }
            orderDiv.appendChild(orderContent);
            classContent.appendChild(orderDiv);
        }
        classDiv.appendChild(classContent);
        tree.appendChild(classDiv);
    }
}

function expandAllTreeNodes() {
    document.querySelectorAll('.tree-class-content, .tree-order-content, .tree-family-content, .tree-genus-content').forEach(c => {
        c.classList.remove('hidden');
    });
    document.querySelectorAll('.tree-toggle').forEach(t => {
        t.textContent = '▼';
    });
}

function toggleTreeNode(element) {
    const toggle = element.querySelector('.tree-toggle');
    const parent = element.parentElement;
    const content = parent.querySelector('.tree-class-content, .tree-order-content, .tree-family-content, .tree-genus-content');
    if (content) {
        content.classList.toggle('hidden');
        if (toggle) {
            toggle.textContent = content.classList.contains('hidden') ? '▶' : '▼';
        }
    }
}

function selectSpecies(species) {
    document.querySelectorAll('.tree-species-item').forEach(item => item.classList.remove('active'));
    const el = document.querySelector(`[data-species="${species.scientificName}"]`);
    if (el) el.classList.add('active');
    showSection('species');
    displaySpeciesDetail(species);
}

// ═══════════════════════════════════════════
// Species Detail Display
// ═══════════════════════════════════════════
function displaySpeciesDetail(species) {
    currentSpecies = species;
    const welcomeMsg = document.querySelector('.welcome-message');
    const detailDiv = document.getElementById('species-detail');
    welcomeMsg.style.display = 'none';
    detailDiv.style.display = 'block';

    const statusText = {
        'LC': 'Least Concern', 'NT': 'Near Threatened', 'VU': 'Vulnerable',
        'EN': 'Endangered', 'CR': 'Critically Endangered', 'DD': 'Data Deficient'
    };

    const externalLinks = generateExternalLinks(species);
    let extLinksHtml = '<div class="external-links">';
    externalLinks.forEach(l => { extLinksHtml += `<a href="${l.url}" target="_blank" class="external-link">${l.name}</a>`; });
    extLinksHtml += '</div>';

    // Photo section
    let photoHtml = '';
    if (species.photo) {
        photoHtml = `
            <div class="species-section species-photo-section">
                <img src="${species.photo}" alt="${species.scientificName}" class="species-photo" />
                ${species.photoCaption ? `<div class="photo-caption">${species.photoCaption}</div>` : ''}
                <div class="photo-edit-controls">
                    <button class="edit-btn" onclick="triggerPhotoUpload('${escapeAttr(species.scientificName)}')">Replace photo</button>
                    <button class="edit-btn" onclick="removePhoto('${escapeAttr(species.scientificName)}')">Remove</button>
                </div>
            </div>`;
    } else {
        photoHtml = `
            <div class="species-section species-photo-section photo-placeholder">
                <div class="photo-upload-area">
                    <button class="edit-btn" onclick="triggerPhotoUpload('${escapeAttr(species.scientificName)}')">📷 Upload photo</button>
                    <button class="edit-btn" onclick="setPhotoUrl('${escapeAttr(species.scientificName)}')">🔗 Image URL</button>
                </div>
            </div>`;
    }

    // NCBI links
    let ncbiHtml = '';
    if (species.ncbiData && species.ncbiData.length > 0) {
        ncbiHtml = '<div class="ncbi-links">';
        species.ncbiData.forEach(l => { ncbiHtml += `<a href="${l.url}" target="_blank" class="ncbi-link">${l.type}</a>`; });
        ncbiHtml += '</div>';
    } else {
        ncbiHtml = '<p style="color:#999;">No genomic data available yet.</p>';
    }

    // Subspecies
    let subspeciesHtml = '';
    if (species.subspecies && species.subspecies.length > 0) {
        subspeciesHtml = `
            <div class="species-section">
                <h3>Subspecies${editBtn('subspecies', species)}</h3>
                <ul class="subspecies-list">
                    ${species.subspecies.map(ss => `
                        <li><span class="subspecies-name">${ss.name}</span><span class="subspecies-range"> — ${ss.range}</span></li>
                    `).join('')}
                </ul>
            </div>`;
    }

    // Description
    let descriptionHtml = '';
    if (species.description) {
        descriptionHtml = `
            <div class="species-section">
                <h3>Description${editBtn('description', species)}</h3>
                <div class="description-text">${italicizeSpeciesNames(species.description)}</div>
                <div id="edit-description" class="edit-field"></div>
            </div>`;
    }

    // Publications
    let pubsHtml = '';
    if (species.publications && species.publications.length > 0) {
        pubsHtml = `
            <div class="species-section">
                <h3>Publications (${species.publications.length})</h3>
                ${species.publications.map(p => {
                    const typeClass = 'pub-type-' + (p.type || 'review');
                    // Extract a short search term from citation (first ~60 chars of title part)
                    const searchTerm = extractCitationTitle(p.citation);
                    return `<div class="publication-item">
                        <span class="pub-citation">${linkifyCitation(p.citation)}</span>
                        <span class="pub-type ${typeClass}">${p.type || ''}</span>
                        <span class="pub-links">
                            ${p.url ? `<a href="${p.url}" target="_blank" class="pub-link" title="Source">🔗</a>` : ''}
                            <a href="https://scholar.google.com/scholar?q=${encodeURIComponent(searchTerm)}" target="_blank" class="pub-link" title="Google Scholar">📚</a>
                            <a href="https://pubmed.ncbi.nlm.nih.gov/?term=${encodeURIComponent(searchTerm)}" target="_blank" class="pub-link" title="PubMed">🔬</a>
                        </span>
                        ${p.note ? `<div class="pub-note">${p.note}</div>` : ''}
                    </div>`;
                }).join('')}
            </div>`;
    }

    detailDiv.innerHTML = `
        <div class="species-header">
            <h2>${species.scientificName}</h2>
            ${species.commonName ? `<div class="species-common-name">${species.commonName}</div>` : ''}
            ${species.russianName ? `<div class="species-alt-name">🇷🇺 ${species.russianName}</div>` : ''}
            ${species.uzbekName ? `<div class="species-alt-name">🇺🇿 ${species.uzbekName}</div>` : ''}
            <div class="species-taxonomy">
                ${species.class} › ${species.order} › ${species.family}${species.subfamily ? ' › ' + species.subfamily : ''}
            </div>
            <div class="species-header-actions">
                ${extLinksHtml}
                <div class="inline-compare">
                    <select id="inline-compare-select" onchange="inlineCompare('${escapeAttr(species.scientificName)}', this.value)">
                        <option value="">Compare with…</option>
                        ${buildPhyloSortedOptions(species)}
                    </select>
                </div>
            </div>
        </div>

        ${photoHtml}

        ${descriptionHtml}

        <div class="species-section">
            <h3>Conservation Status</h3>
            <span class="status-badge status-${species.iucnStatus}">${statusText[species.iucnStatus] || species.iucnStatus}</span>
            ${species.nationalStatus ? `<p style="margin-top:0.5rem;font-size:0.9rem;"><strong>Red Book UZ:</strong> ${species.nationalStatus}</p>` : ''}
            ${species.cites ? `<p style="margin-top:0.3rem;font-size:0.9rem;"><strong>CITES:</strong> Appendix ${species.cites}</p>` : ''}
            ${species.endemism ? `<p style="margin-top:0.3rem;font-size:0.9rem;"><strong>Range:</strong> ${species.endemism}</p>` : ''}
        </div>

        ${species.regions ? `
        <div class="species-section">
            <h3>Regional Distribution</h3>
            <div class="region-grid">
                ${Object.entries(species.regions).map(([r, present]) =>
                    `<span class="region-tag ${present ? 'region-present' : 'region-absent'}">${r}</span>`
                ).join('')}
            </div>
        </div>` : ''}

        ${subspeciesHtml}

        <div class="species-section">
            <h3>Distribution${editBtn('distribution', species)}</h3>
            <p>${species.distribution}</p>
            <div id="edit-distribution" class="edit-field"></div>
            <div id="distribution-map"></div>
            <div id="locality-legend" class="locality-legend"></div>
            <div id="locality-controls" class="locality-controls"></div>
        </div>

        ${species.habitat ? `
            <div class="species-section">
                <h3>Habitat${editBtn('habitat', species)}</h3>
                <p>${species.habitat}</p>
                <div id="edit-habitat" class="edit-field"></div>
            </div>
        ` : ''}

        <div class="species-section">
            <h3>Genomic Resources</h3>
            ${ncbiHtml}
        </div>

        ${pubsHtml}

        ${species.notes ? `
            <div class="species-section">
                <h3>Notes${editBtn('notes', species)}</h3>
                <p>${italicizeSpeciesNames(species.notes)}</p>
                <div id="edit-notes" class="edit-field"></div>
            </div>
        ` : ''}

        ${species.researchPlans ? `
            <div class="species-section">
                <h3>Research Plans${editBtn('researchPlans', species)}</h3>
                <p>${species.researchPlans}</p>
                <div id="edit-researchPlans" class="edit-field"></div>
            </div>
        ` : ''}
    `;

    // Map — multi-point localities
    setTimeout(() => {
        const mapEl = document.getElementById('distribution-map');
        if (!mapEl) return;

        // Gather localities
        const locs = (localityData && localityData[species.scientificName]) || [];
        const center = species.coordinates || { lat: 40.5, lng: 65.0 };

        if (locs.length === 0 && !species.coordinates) {
            mapEl.style.display = 'none';
        } else {
            const map = L.map('distribution-map').setView([center.lat, center.lng], 6);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap'
            }).addTo(map);

            // Custom colored icon
            function locIcon(color) {
                return L.divIcon({
                    className: 'loc-marker',
                    html: `<div style="background:${color};width:10px;height:10px;border-radius:50%;border:2px solid #fff;box-shadow:0 1px 3px rgba(0,0,0,0.4);"></div>`,
                    iconSize: [14, 14],
                    iconAnchor: [7, 7]
                });
            }

            const bounds = [];

            // Plot locality points
            locs.forEach((loc, i) => {
                const marker = L.marker([loc.lat, loc.lng], { icon: locIcon('#e74c3c') }).addTo(map);
                marker.bindPopup(`<b>${loc.label}</b><br><small>${loc.source || ''}</small><br><small>${loc.lat.toFixed(3)}, ${loc.lng.toFixed(3)}</small>`);
                bounds.push([loc.lat, loc.lng]);
            });

            // Also plot the centroid reference
            if (species.coordinates) {
                const refMarker = L.marker([center.lat, center.lng], { icon: locIcon('#3498db') }).addTo(map);
                refMarker.bindPopup(`<b><i>${species.scientificName}</i></b><br>Reference point`);
                bounds.push([center.lat, center.lng]);
            }

            if (bounds.length > 1) {
                map.fitBounds(bounds, { padding: [30, 30], maxZoom: 10 });
            } else if (bounds.length === 1) {
                map.setView(bounds[0], 8);
            }

            // Click-to-add in edit mode
            if (editMode) {
                map.on('click', function(e) {
                    const label = prompt('Locality name:');
                    if (!label) return;
                    const source = prompt('Source (e.g. "Field obs."):') || 'Added manually';
                    if (!localityData[species.scientificName]) localityData[species.scientificName] = [];
                    localityData[species.scientificName].push({
                        lat: Math.round(e.latlng.lat * 1000) / 1000,
                        lng: Math.round(e.latlng.lng * 1000) / 1000,
                        label: label,
                        source: source
                    });
                    displaySpeciesDetail(species); // re-render
                });
            }

            // Legend
            const legendEl = document.getElementById('locality-legend');
            if (legendEl) {
                const n = locs.length;
                legendEl.innerHTML = `
                    <span class="legend-item"><span class="legend-dot" style="background:#e74c3c;"></span> Locality record (${n})</span>
                    <span class="legend-item"><span class="legend-dot" style="background:#3498db;"></span> Reference point</span>
                    ${editMode ? '<span class="legend-item" style="color:#888;">Click map to add point</span>' : ''}
                `;
            }

            // Edit controls: list & delete
            const ctrlEl = document.getElementById('locality-controls');
            if (ctrlEl && editMode && locs.length > 0) {
                ctrlEl.innerHTML = `<details class="locality-detail"><summary>Locality records (${locs.length})</summary>
                    <table class="locality-table">
                        <tr><th>Locality</th><th>Lat</th><th>Lng</th><th>Source</th><th></th></tr>
                        ${locs.map((loc, i) => `<tr>
                            <td>${loc.label}</td>
                            <td>${loc.lat.toFixed(3)}</td>
                            <td>${loc.lng.toFixed(3)}</td>
                            <td>${loc.source || ''}</td>
                            <td><button class="edit-btn" style="display:inline-block" onclick="removeLocality('${escapeAttr(species.scientificName)}', ${i})">✕</button></td>
                        </tr>`).join('')}
                    </table>
                </details>`;
            }
        }
    }, 100);

    document.querySelector('.content-area').scrollTop = 0;
}

function editBtn(field, species) {
    return ` <button class="edit-btn" onclick="startEdit('${field}', '${escapeAttr(species.scientificName)}')">✎ edit</button>`;
}

// ═══════════════════════════════════════════
// Literature & Research
// ═══════════════════════════════════════════
function displayLiterature(literature) {
    const container = document.getElementById('literature-container');
    container.innerHTML = '';
    literature.forEach(item => {
        const div = document.createElement('div');
        div.className = 'literature-item';
        div.innerHTML = `
            <h3>${item.title}</h3>
            <div class="authors">${item.authors}</div>
            <div class="citation">${linkifyCitation(item.citation)}</div>
            <div class="lit-links">
                ${item.url ? `<a href="${item.url}" target="_blank" class="lit-link">🔗 Source</a>` : ''}
                <a href="https://scholar.google.com/scholar?q=${encodeURIComponent(item.title)}" target="_blank" class="lit-link">📚 Google Scholar</a>
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=${encodeURIComponent(item.title)}" target="_blank" class="lit-link">🔬 PubMed</a>
            </div>
        `;
        container.appendChild(div);
    });
}

function displayResearch(plans) {
    const container = document.getElementById('research-container');
    container.innerHTML = '';
    plans.forEach(plan => {
        const div = document.createElement('div');
        div.className = 'research-item';
        div.innerHTML = `
            <h3>${plan.title}</h3>
            <p>${plan.description}</p>
            ${plan.species ? `<div class="species-list"><strong>Target species:</strong> ${plan.species.map(s => '<i>' + s + '</i>').join(', ')}</div>` : ''}
            ${plan.timeline ? `<p style="margin-top:0.5rem;"><strong>Timeline:</strong> ${plan.timeline}</p>` : ''}
        `;
        container.appendChild(div);
    });
}

// ═══════════════════════════════════════════
// Section Navigation
// ═══════════════════════════════════════════
function showSection(name) {
    document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));
    if (name === 'species') document.getElementById('species-view').classList.add('active');
    else if (name === 'literature') document.getElementById('literature-section').classList.add('active');
    else if (name === 'research') document.getElementById('research-section').classList.add('active');
    else if (name === 'about') document.getElementById('about-section').classList.add('active');
    else if (name === 'compare') document.getElementById('compare-section').classList.add('active');
}

// ═══════════════════════════════════════════
// Event Listeners
// ═══════════════════════════════════════════
function setupEventListeners() {
    // Tree search
    document.getElementById('tree-search').addEventListener('input', function() {
        const term = this.value.toLowerCase();
        const items = document.querySelectorAll('.tree-species-item');
        items.forEach(item => {
            const name = item.getAttribute('data-species').toLowerCase();
            const text = item.textContent.toLowerCase();
            if (name.includes(term) || text.includes(term)) {
                item.style.display = 'flex';
                let parent = item.parentElement;
                while (parent && !parent.classList.contains('tree-navigation')) {
                    if (parent.classList.contains('hidden')) {
                        parent.classList.remove('hidden');
                        const toggle = parent.previousElementSibling?.querySelector('.tree-toggle');
                        if (toggle) toggle.textContent = '▼';
                    }
                    parent = parent.parentElement;
                }
            } else {
                item.style.display = 'none';
            }
        });
        if (term === '') {
            expandAllTreeNodes();
            items.forEach(item => { item.style.display = 'flex'; });
        }
    });

    // Edit mode button
    document.getElementById('edit-toggle').addEventListener('click', toggleEditMode);

    // Password dialog
    document.getElementById('pwd-ok').addEventListener('click', submitPassword);
    document.getElementById('pwd-cancel').addEventListener('click', cancelPassword);
    document.getElementById('password-input').addEventListener('keyup', function(e) {
        if (e.key === 'Enter') submitPassword();
        if (e.key === 'Escape') cancelPassword();
    });

    // Close overlay on background click
    document.getElementById('password-overlay').addEventListener('click', function(e) {
        if (e.target === this) cancelPassword();
    });

    // Compare tool - species select
    document.getElementById('compare-add-btn').addEventListener('click', function() {
        const sel = document.getElementById('compare-species-select');
        const name = sel.value;
        if (!name) return;
        addCompareSpecies(name);
        sel.value = '';
    });
}

// ═══════════════════════════════════════════
// Species Comparison / Determination Tool
// ═══════════════════════════════════════════
let compareList = [];

function initCompare() {
    populateCompareSelect(null);
}

// Sort species by phylogenetic relatedness to a reference species
function phyloSort(refSpecies, list) {
    const refGenus = refSpecies ? refSpecies.scientificName.split(' ')[0] : '';
    const refFamily = refSpecies ? refSpecies.family : '';
    const refOrder = refSpecies ? refSpecies.order : '';
    const refClass = refSpecies ? refSpecies.class : '';

    return [...list].sort((a, b) => {
        const scoreA = phyloScore(a, refGenus, refFamily, refOrder, refClass);
        const scoreB = phyloScore(b, refGenus, refFamily, refOrder, refClass);
        if (scoreA !== scoreB) return scoreA - scoreB; // lower = closer
        return a.scientificName.localeCompare(b.scientificName);
    });
}

function phyloScore(sp, refGenus, refFamily, refOrder, refClass) {
    const genus = sp.scientificName.split(' ')[0];
    if (genus === refGenus) return 0;       // same genus
    if (sp.family === refFamily) return 1;   // same family
    if (sp.order === refOrder) return 2;     // same order
    if (sp.class === refClass) return 3;     // same class
    return 4;                                // different class
}

function populateCompareSelect(refSpecies) {
    const select = document.getElementById('compare-species-select');
    if (!select) return;
    select.innerHTML = '<option value="">— Select species —</option>';
    const sorted = phyloSort(refSpecies, speciesData);
    let lastGroup = -1;
    const groupLabels = ['Same genus', 'Same family', 'Same order', 'Same class', 'Other'];
    const refGenus = refSpecies ? refSpecies.scientificName.split(' ')[0] : '';
    
    sorted.forEach(sp => {
        if (refSpecies && sp.scientificName === refSpecies.scientificName) return;
        const score = refSpecies ? phyloScore(sp, refGenus, refSpecies.family, refSpecies.order, refSpecies.class) : -1;
        if (refSpecies && score !== lastGroup) {
            const og = document.createElement('optgroup');
            og.label = groupLabels[score] || 'Other';
            select.appendChild(og);
            lastGroup = score;
        }
        const opt = document.createElement('option');
        opt.value = sp.scientificName;
        opt.textContent = sp.scientificName + (sp.commonName ? ' (' + sp.commonName + ')' : '');
        const parent = select.querySelector('optgroup:last-of-type');
        if (parent && refSpecies) parent.appendChild(opt);
        else select.appendChild(opt);
    });
}

function buildPhyloSortedOptions(refSpecies) {
    const sorted = phyloSort(refSpecies, speciesData);
    const refGenus = refSpecies.scientificName.split(' ')[0];
    const groupLabels = ['Same genus', 'Same family', 'Same order', 'Same class', 'Other'];
    let html = '';
    let lastGroup = -1;
    sorted.forEach(sp => {
        if (sp.scientificName === refSpecies.scientificName) return;
        const score = phyloScore(sp, refGenus, refSpecies.family, refSpecies.order, refSpecies.class);
        if (score !== lastGroup) {
            if (lastGroup >= 0) html += '</optgroup>';
            html += `<optgroup label="${groupLabels[score]}">`;
            lastGroup = score;
        }
        html += `<option value="${sp.scientificName}">${sp.scientificName}${sp.commonName ? ' (' + sp.commonName + ')' : ''}</option>`;
    });
    if (lastGroup >= 0) html += '</optgroup>';
    return html;
}

function inlineCompare(currentName, otherName) {
    if (!otherName) return;
    compareList = [currentName, otherName];
    showSection('compare');
    // Also update the compare section's select to be sorted relative to the first species
    const ref = speciesData.find(s => s.scientificName === currentName);
    if (ref) populateCompareSelect(ref);
    renderComparison();
}

function addCompareSpecies(name) {
    if (compareList.includes(name)) return;
    if (compareList.length >= 6) { alert('Max 6 species for comparison'); return; }
    compareList.push(name);
    // Re-sort the select relative to the first species in the list
    if (compareList.length === 1) {
        const ref = speciesData.find(s => s.scientificName === name);
        if (ref) populateCompareSelect(ref);
    }
    renderComparison();
}

function removeCompareSpecies(name) {
    compareList = compareList.filter(n => n !== name);
    renderComparison();
}

function clearCompare() {
    compareList = [];
    populateCompareSelect(null);
    renderComparison();
}

function renderComparison() {
    const tagsEl = document.getElementById('compare-tags');
    const resultEl = document.getElementById('compare-result');
    
    // Tags
    tagsEl.innerHTML = compareList.map(name => 
        `<span class="compare-tag"><i>${name}</i> <button onclick="removeCompareSpecies('${escapeAttr(name)}')">&times;</button></span>`
    ).join('') + (compareList.length > 0 ? `<button class="compare-clear" onclick="clearCompare()">Clear all</button>` : '');
    
    if (compareList.length < 2) {
        resultEl.innerHTML = '<p class="compare-hint">Select at least 2 species to compare distinguishing traits.</p>';
        return;
    }

    // Build comparison
    const species = compareList.map(name => speciesData.find(s => s.scientificName === name)).filter(Boolean);
    
    // Parse diagnostic traits from descriptions
    const traits = parseTraits(species);
    
    resultEl.innerHTML = `
        <h3>Diagnostic Comparison</h3>
        <table class="compare-table">
            <thead>
                <tr>
                    <th>Trait</th>
                    ${species.map(sp => `<th><i>${sp.scientificName}</i>${sp.commonName ? '<br><small>' + sp.commonName + '</small>' : ''}</th>`).join('')}
                </tr>
            </thead>
            <tbody>
                ${traits.map(t => `<tr class="${t.differs ? 'trait-differs' : ''}">
                    <td class="trait-label">${t.label}</td>
                    ${t.values.map(v => `<td>${v}</td>`).join('')}
                </tr>`).join('')}
            </tbody>
        </table>
        <p class="compare-note"><strong>Highlighted rows</strong> show traits that differ between the selected species.</p>
    `;
}

function parseTraits(speciesArr) {
    const traits = [];
    
    // Size (SVL or total length)
    addTrait(traits, 'Body size', speciesArr, sp => {
        const d = sp.description || '';
        const svl = d.match(/(\d+[-–]\d+\s*mm\s*SVL)/i) || d.match(/(SVL\s*(?:up to\s*)?\d+[-–]?\d*\s*mm)/i);
        const tl = d.match(/(up to\s*\d+\.?\d*\s*(?:cm|m|mm)(?:\s*(?:TL|total length))?)/i) || d.match(/(total length\s*(?:up to\s*)?\d+[-–]?\d*\s*(?:cm|m))/i);
        const cl = d.match(/(carapace length\s*\d+[-–]\d+\s*mm)/i);
        if (svl) return svl[1];
        if (cl) return cl[1];
        if (tl) return tl[1];
        return '—';
    });
    
    // Coloration
    addTrait(traits, 'Coloration', speciesArr, sp => {
        const d = sp.description || '';
        // Find color-related phrases
        const colors = [];
        const patterns = [
            /(?:coloration|coloured|colored)[\s:]+([^.]{5,50})/i,
            /(?:dorsal|dorsum)\s+(?:coloration\s+)?([^.]{5,50})/i,
            /((?:olive|brown|grey|gray|sandy|green|dark|light|pale|cream|yellow|beige|uniform)[\w\s-]*(?:coloration|coloured|colored|with\s+\w+|dorsum|spots|blotches|stripes|bands)?)/i
        ];
        for (const p of patterns) {
            const m = d.match(p);
            if (m) { colors.push(m[1].trim().replace(/\.$/, '')); break; }
        }
        if (colors.length === 0) {
            // broader search
            const m2 = d.match(/((?:bright |dark |light |pale )?(?:olive|brown|grey|gray|sandy|green|cream|yellow|beige|black|white)[\w\s-]{0,30})/i);
            if (m2) colors.push(m2[1].trim());
        }
        return colors.length ? colors.join('; ') : '—';
    });

    // Pattern
    addTrait(traits, 'Pattern', speciesArr, sp => {
        const d = sp.description || '';
        const pats = [];
        if (/stripe/i.test(d)) pats.push('striped');
        if (/blotch/i.test(d)) pats.push('blotched');
        if (/spot/i.test(d)) pats.push('spotted');
        if (/band/i.test(d)) pats.push('banded');
        if (/reticulate/i.test(d)) pats.push('reticulated');
        if (/zigzag/i.test(d)) pats.push('zigzag');
        if (/cross-bar|crossbar/i.test(d)) pats.push('cross-barred');
        if (/uniform/i.test(d)) pats.push('uniform');
        if (/checker/i.test(d)) pats.push('checkerboard');
        if (/ocelli/i.test(d)) pats.push('ocellated');
        return pats.length ? pats.join(', ') : '—';
    });

    // Head shape
    addTrait(traits, 'Head shape', speciesArr, sp => {
        const d = sp.description || '';
        const m = d.match(/((?:head|snout)[^.]{0,60})/i);
        if (m) {
            let h = m[1].trim();
            if (h.length > 60) h = h.substring(0, 60) + '…';
            return h;
        }
        return '—';
    });

    // Habitat
    addTrait(traits, 'Habitat', speciesArr, sp => {
        return sp.habitat ? sp.habitat.split('.')[0] : '—';
    });

    // Activity
    addTrait(traits, 'Activity', speciesArr, sp => {
        const d = (sp.description || '') + ' ' + (sp.habitat || '');
        if (/nocturnal/i.test(d) && /diurnal/i.test(d)) return 'Both/crepuscular';
        if (/strictly nocturnal/i.test(d)) return 'Strictly nocturnal';
        if (/nocturnal/i.test(d)) return 'Nocturnal';
        if (/crepuscular/i.test(d)) return 'Crepuscular';
        if (/diurnal/i.test(d)) return 'Diurnal';
        return '—';
    });

    // Venom
    addTrait(traits, 'Venom', speciesArr, sp => {
        const d = sp.description || '';
        if (/HIGHLY VENOMOUS|very toxic/i.test(d)) return '⚠️ Highly venomous';
        if (/VENOMOUS|venomous/i.test(d)) return '⚠️ Venomous';
        if (/rear-fanged|opisthoglyphous/i.test(d)) return 'Mildly venomous (rear-fanged)';
        if (/non-venomous|nonvenomous/i.test(d)) return 'Non-venomous';
        return '—';
    });

    // Defensive behavior
    addTrait(traits, 'Defense/Display', speciesArr, sp => {
        const d = sp.description || '';
        const behaviors = [];
        if (/mouth.*display|display.*mouth|fleshy flap/i.test(d)) behaviors.push('Mouth display');
        if (/hood/i.test(d)) behaviors.push('Hood display');
        if (/bury|burying/i.test(d)) behaviors.push('Sand burial');
        if (/inflate/i.test(d)) behaviors.push('Body inflation');
        if (/thanatosis|death.feign/i.test(d)) behaviors.push('Death feigning');
        if (/stridulat|sizzl/i.test(d)) behaviors.push('Stridulation (warning sound)');
        if (/musk/i.test(d)) behaviors.push('Musk release');
        if (/spray.*venom|venom.*spray/i.test(d)) behaviors.push('Venom spraying');
        if (/tail.*break|autotom/i.test(d)) behaviors.push('Tail autotomy');
        return behaviors.length ? behaviors.join(', ') : '—';
    });

    // Diet
    addTrait(traits, 'Diet', speciesArr, sp => {
        const d = sp.description || '';
        const m = d.match(/(?:feed(?:s|ing)?\s+on|prey\s+on)\s+([^.]{5,60})/i);
        return m ? m[1].trim() : '—';
    });

    // IUCN Status
    addTrait(traits, 'IUCN Status', speciesArr, sp => {
        const txt = {'LC':'Least Concern','NT':'Near Threatened','VU':'Vulnerable','EN':'Endangered','CR':'Critically Endangered','DD':'Data Deficient'};
        return txt[sp.iucnStatus] || sp.iucnStatus;
    });

    // Taxonomy
    addTrait(traits, 'Family', speciesArr, sp => sp.family);

    return traits;
}

function addTrait(traits, label, speciesArr, extractor) {
    const values = speciesArr.map(extractor);
    const unique = new Set(values);
    traits.push({
        label: label,
        values: values,
        differs: unique.size > 1
    });
}
