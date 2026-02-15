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
    document.getElementById('welcome-endemic').textContent = '5-10';
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
                <div class="description-text">${species.description}</div>
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
                    return `<div class="publication-item">
                        <span class="pub-citation">${p.citation}</span>
                        <span class="pub-type ${typeClass}">${p.type || ''}</span>
                        ${p.note ? `<div class="pub-note">${p.note}</div>` : ''}
                    </div>`;
                }).join('')}
            </div>`;
    }

    detailDiv.innerHTML = `
        <div class="species-header">
            <h2>${species.scientificName}</h2>
            ${species.commonName ? `<div class="species-common-name">${species.commonName}</div>` : ''}
            <div class="species-taxonomy">
                ${species.class} › ${species.order} › ${species.family}${species.subfamily ? ' › ' + species.subfamily : ''}
            </div>
            ${extLinksHtml}
        </div>

        ${descriptionHtml}

        <div class="species-section">
            <h3>Conservation Status</h3>
            <span class="status-badge status-${species.iucnStatus}">${statusText[species.iucnStatus] || species.iucnStatus}</span>
            ${species.nationalStatus ? `<p style="margin-top:0.5rem;font-size:0.9rem;">National: ${species.nationalStatus}</p>` : ''}
        </div>

        ${subspeciesHtml}

        <div class="species-section">
            <h3>Distribution${editBtn('distribution', species)}</h3>
            <p>${species.distribution}</p>
            <div id="edit-distribution" class="edit-field"></div>
            ${species.coordinates ? '<div id="distribution-map"></div>' : ''}
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
                <p>${species.notes}</p>
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

    // Map
    if (species.coordinates) {
        setTimeout(() => {
            const mapEl = document.getElementById('distribution-map');
            if (!mapEl) return;
            const map = L.map('distribution-map').setView([species.coordinates.lat, species.coordinates.lng], 7);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap'
            }).addTo(map);
            L.marker([species.coordinates.lat, species.coordinates.lng]).addTo(map)
                .bindPopup(`<i>${species.scientificName}</i>`).openPopup();
        }, 100);
    }

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
            <div class="citation">${item.citation}</div>
            ${item.url ? `<div style="margin-top:0.3rem;"><a href="${item.url}" target="_blank">View</a></div>` : ''}
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
}
