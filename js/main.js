// Main JavaScript for Uzbekistan Herpetofauna Database - Phylogenetic Tree Version
// With external links and fully expanded tree

document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Set last updated date
    document.getElementById('update-date').textContent = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    // Calculate and display statistics
    updateStatistics();
    
    // Build phylogenetic tree
    buildPhylogeneticTree();
    
    // Display literature and research
    displayLiterature(literatureData);
    displayResearch(researchPlans);
    
    // Setup event listeners
    setupEventListeners();
    
    // Expand all tree nodes by default
    expandAllTreeNodes();
}

function updateStatistics() {
    const totalSpecies = speciesData.length;
    const reptiles = speciesData.filter(s => s.class === 'Reptilia').length;
    const amphibians = speciesData.filter(s => s.class === 'Amphibia').length;
    const threatened = speciesData.filter(s => ['VU', 'EN', 'CR'].includes(s.iucnStatus)).length;
    
    document.getElementById('total-species').textContent = totalSpecies;
    document.getElementById('total-reptiles').textContent = reptiles;
    document.getElementById('total-amphibians').textContent = amphibians;
    document.getElementById('threatened-species').textContent = threatened;
    
    // Welcome message stats
    document.getElementById('welcome-total').textContent = totalSpecies;
    document.getElementById('welcome-threatened').textContent = threatened;
    // Count endemics (you can mark these in your data)
    document.getElementById('welcome-endemic').textContent = '5-10';
}

function generateExternalLinks(species) {
    const links = [];
    
    // iNaturalist link
    const inatName = species.scientificName.replace(/ /g, '-');
    links.push({
        name: 'iNaturalist',
        url: `https://www.inaturalist.org/taxa/search?q=${encodeURIComponent(species.scientificName)}`
    });
    
    // Reptile Database (for reptiles only)
    if (species.class === 'Reptilia') {
        const nameParts = species.scientificName.split(' ');
        links.push({
            name: 'Reptile Database',
            url: `https://reptile-database.reptarium.cz/species?genus=${nameParts[0]}&species=${nameParts[1]}`
        });
    }
    
    // AmphibiaWeb (for amphibians only)
    if (species.class === 'Amphibia') {
        links.push({
            name: 'AmphibiaWeb',
            url: `https://amphibiaweb.org/cgi/amphib_query?where-genus=${species.scientificName.split(' ')[0]}&where-species=${species.scientificName.split(' ')[1]}`
        });
    }
    
    // PubMed
    links.push({
        name: 'PubMed',
        url: `https://pubmed.ncbi.nlm.nih.gov/?term=${encodeURIComponent(species.scientificName)}`
    });
    
    return links;
}

function buildPhylogeneticTree() {
    const tree = document.getElementById('phylo-tree');
    
    // Organize data by taxonomic hierarchy including genus
    const taxonomy = {};
    
    speciesData.forEach(species => {
        const genus = species.scientificName.split(' ')[0];
        
        if (!taxonomy[species.class]) {
            taxonomy[species.class] = {};
        }
        if (!taxonomy[species.class][species.order]) {
            taxonomy[species.class][species.order] = {};
        }
        if (!taxonomy[species.class][species.order][species.family]) {
            taxonomy[species.class][species.order][species.family] = {};
        }
        if (!taxonomy[species.class][species.order][species.family][genus]) {
            taxonomy[species.class][species.order][species.family][genus] = [];
        }
        taxonomy[species.class][species.order][species.family][genus].push(species);
    });
    
    // Build tree HTML
    for (const className in taxonomy) {
        const classDiv = document.createElement('div');
        classDiv.className = 'tree-class';
        
        const classHeader = document.createElement('div');
        classHeader.className = 'tree-class-name';
        classHeader.innerHTML = `${className} <span class="tree-toggle expanded">▼</span>`;
        classHeader.onclick = function() { toggleTreeNode(this); };
        classDiv.appendChild(classHeader);
        
        const classContent = document.createElement('div');
        classContent.className = 'tree-class-content'; // Not hidden by default
        
        for (const orderName in taxonomy[className]) {
            const orderDiv = document.createElement('div');
            orderDiv.className = 'tree-order';
            
            const orderHeader = document.createElement('div');
            orderHeader.className = 'tree-order-name';
            orderHeader.innerHTML = `${orderName} <span class="tree-toggle expanded">▼</span>`;
            orderHeader.onclick = function(e) { e.stopPropagation(); toggleTreeNode(this); };
            orderDiv.appendChild(orderHeader);
            
            const orderContent = document.createElement('div');
            orderContent.className = 'tree-order-content'; // Not hidden by default
            
            for (const familyName in taxonomy[className][orderName]) {
                const familyDiv = document.createElement('div');
                familyDiv.className = 'tree-family';
                
                const familyHeader = document.createElement('div');
                familyHeader.className = 'tree-family-name';
                familyHeader.innerHTML = `${familyName} <span class="tree-toggle expanded">▼</span>`;
                familyHeader.onclick = function(e) { e.stopPropagation(); toggleTreeNode(this); };
                familyDiv.appendChild(familyHeader);
                
                const familyContent = document.createElement('div');
                familyContent.className = 'tree-family-content'; // Not hidden by default
                
                // Iterate through genera
                for (const genusName in taxonomy[className][orderName][familyName]) {
                    const genusDiv = document.createElement('div');
                    genusDiv.className = 'tree-genus';
                    
                    const genusHeader = document.createElement('div');
                    genusHeader.className = 'tree-genus-name';
                    genusHeader.innerHTML = `<i>${genusName}</i> <span class="tree-toggle expanded">▼</span>`;
                    genusHeader.onclick = function(e) { e.stopPropagation(); toggleTreeNode(this); };
                    genusDiv.appendChild(genusHeader);
                    
                    const genusContent = document.createElement('div');
                    genusContent.className = 'tree-genus-content'; // Not hidden by default
                    
                    const species = taxonomy[className][orderName][familyName][genusName];
                    species.sort((a, b) => a.scientificName.localeCompare(b.scientificName));
                    
                    species.forEach(sp => {
                        const speciesDiv = document.createElement('div');
                        speciesDiv.className = 'tree-species-item';
                        speciesDiv.setAttribute('data-species', sp.scientificName);
                        
                        let badge = '';
                        if (['EN', 'VU', 'NT'].includes(sp.iucnStatus)) {
                            badge = `<span class="species-badge badge-${sp.iucnStatus}">${sp.iucnStatus}</span>`;
                        }
                        
                        // Extract species epithet (and subspecies if present)
                        const nameParts = sp.scientificName.split(' ');
                        const speciesEpithet = nameParts.slice(1).join(' ');
                        
                        speciesDiv.innerHTML = `
                            <span class="tree-species-name"><i>${speciesEpithet}</i></span>
                            ${badge}
                        `;
                        speciesDiv.onclick = function(e) { 
                            e.stopPropagation(); 
                            selectSpecies(sp); 
                        };
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
    // Remove hidden class from all content divs
    document.querySelectorAll('.tree-class-content, .tree-order-content, .tree-family-content, .tree-genus-content').forEach(content => {
        content.classList.remove('hidden');
    });
    
    // Set all toggles to expanded state
    document.querySelectorAll('.tree-toggle').forEach(toggle => {
        toggle.classList.add('expanded');
        toggle.textContent = '▼';
    });
}

function toggleTreeNode(element) {
    const toggle = element.querySelector('.tree-toggle');
    const parent = element.parentElement;
    const content = parent.querySelector('.tree-class-content, .tree-order-content, .tree-family-content, .tree-genus-content');
    
    if (content) {
        content.classList.toggle('hidden');
        if (toggle) {
            toggle.classList.toggle('expanded');
            toggle.textContent = toggle.classList.contains('expanded') ? '▼' : '▶';
        }
    }
}

function selectSpecies(species) {
    // Update active state
    document.querySelectorAll('.tree-species-item').forEach(item => {
        item.classList.remove('active');
    });
    document.querySelector(`[data-species="${species.scientificName}"]`).classList.add('active');
    
    // Show species view
    showSection('species');
    
    // Display species details
    displaySpeciesDetail(species);
}

function displaySpeciesDetail(species) {
    const welcomeMsg = document.querySelector('.welcome-message');
    const detailDiv = document.getElementById('species-detail');
    
    welcomeMsg.style.display = 'none';
    detailDiv.style.display = 'block';
    
    const statusClass = `status-${species.iucnStatus}`;
    const statusText = {
        'LC': 'Least Concern',
        'NT': 'Near Threatened',
        'VU': 'Vulnerable',
        'EN': 'Endangered',
        'CR': 'Critically Endangered',
        'DD': 'Data Deficient'
    };
    
    // Generate external links
    const externalLinks = generateExternalLinks(species);
    let externalLinksHtml = '<div class="external-links">';
    externalLinks.forEach(link => {
        externalLinksHtml += `<a href="${link.url}" target="_blank" class="external-link">${link.name}</a>`;
    });
    externalLinksHtml += '</div>';
    
    let ncbiLinksHtml = '';
    if (species.ncbiData && species.ncbiData.length > 0) {
        ncbiLinksHtml = '<div class="ncbi-links">';
        species.ncbiData.forEach(link => {
            ncbiLinksHtml += `<a href="${link.url}" target="_blank" class="ncbi-link">${link.type}</a>`;
        });
        ncbiLinksHtml += '</div>';
    } else {
        ncbiLinksHtml = '<p style="color: #999;">No genomic data available yet.</p>';
    }
    
    detailDiv.innerHTML = `
        <div class="species-header">
            <h2>${species.scientificName}</h2>
            ${species.commonName ? `<div class="species-common-name">${species.commonName}</div>` : ''}
            <div class="species-taxonomy">
                ${species.class} › ${species.order} › ${species.family}${species.subfamily ? ' › ' + species.subfamily : ''}
            </div>
            ${externalLinksHtml}
        </div>
        
        <div class="species-section">
            <h3>Conservation Status</h3>
            <span class="status-badge ${statusClass}">${statusText[species.iucnStatus]}</span>
            ${species.nationalStatus ? `<p style="margin-top: 0.75rem;">National status: ${species.nationalStatus}</p>` : ''}
        </div>
        
        ${species.subspecies ? `
            <div class="species-section">
                <h3>Subspecies</h3>
                <p>${species.subspecies}</p>
            </div>
        ` : ''}
        
        <div class="species-section">
            <h3>Distribution</h3>
            <p>${species.distribution}</p>
            ${species.coordinates ? `
                <div id="distribution-map"></div>
            ` : ''}
        </div>
        
        ${species.habitat ? `
            <div class="species-section">
                <h3>Habitat</h3>
                <p>${species.habitat}</p>
            </div>
        ` : ''}
        
        <div class="species-section">
            <h3>Genomic Resources</h3>
            ${ncbiLinksHtml}
        </div>
        
        ${species.notes ? `
            <div class="species-section">
                <h3>Notes</h3>
                <p>${species.notes}</p>
            </div>
        ` : ''}
        
        ${species.researchPlans ? `
            <div class="species-section">
                <h3>Research Plans</h3>
                <p>${species.researchPlans}</p>
            </div>
        ` : ''}
    `;
    
    // Initialize map if coordinates exist
    if (species.coordinates) {
        setTimeout(() => {
            const map = L.map('distribution-map').setView([species.coordinates.lat, species.coordinates.lng], 7);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap contributors'
            }).addTo(map);
            L.marker([species.coordinates.lat, species.coordinates.lng]).addTo(map)
                .bindPopup(`<i>${species.scientificName}</i>`).openPopup();
        }, 100);
    }
    
    // Scroll to top
    document.querySelector('.content-area').scrollTop = 0;
}

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
            ${item.url ? `<div style="margin-top: 0.5rem;"><a href="${item.url}" target="_blank">View Publication</a></div>` : ''}
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
            ${plan.species ? `
                <div class="species-list">
                    <strong>Target species:</strong> ${plan.species.map(s => '<i>' + s + '</i>').join(', ')}
                </div>
            ` : ''}
            ${plan.timeline ? `<p style="margin-top: 0.75rem;"><strong>Timeline:</strong> ${plan.timeline}</p>` : ''}
        `;
        container.appendChild(div);
    });
}

function showSection(sectionName) {
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show requested section
    if (sectionName === 'species') {
        document.getElementById('species-view').classList.add('active');
    } else if (sectionName === 'literature') {
        document.getElementById('literature-section').classList.add('active');
    } else if (sectionName === 'research') {
        document.getElementById('research-section').classList.add('active');
    } else if (sectionName === 'about') {
        document.getElementById('about-section').classList.add('active');
    }
}

function setupEventListeners() {
    // Tree search
    const searchBox = document.getElementById('tree-search');
    searchBox.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const speciesItems = document.querySelectorAll('.tree-species-item');
        
        speciesItems.forEach(item => {
            const speciesName = item.getAttribute('data-species').toLowerCase();
            const commonName = item.textContent.toLowerCase();
            
            if (speciesName.includes(searchTerm) || commonName.includes(searchTerm)) {
                item.style.display = 'flex';
                // Expand parent nodes
                let parent = item.parentElement;
                while (parent && !parent.classList.contains('tree-navigation')) {
                    if (parent.classList.contains('hidden')) {
                        parent.classList.remove('hidden');
                        const toggle = parent.previousElementSibling?.querySelector('.tree-toggle');
                        if (toggle) {
                            toggle.classList.add('expanded');
                            toggle.textContent = '▼';
                        }
                    }
                    parent = parent.parentElement;
                }
            } else {
                item.style.display = 'none';
            }
        });
        
        // If search is empty, expand all again
        if (searchTerm === '') {
            expandAllTreeNodes();
            speciesItems.forEach(item => {
                item.style.display = 'flex';
            });
        }
    });
}
