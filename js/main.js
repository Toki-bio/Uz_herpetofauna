// Main JavaScript for Uzbekistan Herpetofauna Database

// Initialize the application
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
    
    // Populate filters
    populateFilters();
    
    // Display all species initially
    displaySpecies(speciesData);
    
    // Display literature
    displayLiterature(literatureData);
    
    // Display research plans
    displayResearch(researchPlans);
    
    // Setup event listeners
    setupEventListeners();
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
}

function populateFilters() {
    // Get unique orders
    const orders = [...new Set(speciesData.map(s => s.order))].sort();
    const orderFilter = document.getElementById('filter-order');
    
    orders.forEach(order => {
        const option = document.createElement('option');
        option.value = order;
        option.textContent = order;
        orderFilter.appendChild(option);
    });
}

function displaySpecies(species) {
    const container = document.getElementById('species-container');
    container.innerHTML = '';
    
    if (species.length === 0) {
        container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #666;">No species found matching your filters.</p>';
        return;
    }
    
    species.forEach(sp => {
        const card = createSpeciesCard(sp);
        container.appendChild(card);
    });
}

function createSpeciesCard(species) {
    const card = document.createElement('div');
    card.className = 'species-card';
    card.onclick = () => showSpeciesDetail(species);
    
    const statusClass = `status-${species.iucnStatus}`;
    
    card.innerHTML = `
        <h3>${species.scientificName}</h3>
        ${species.commonName ? `<div class="common-name">${species.commonName}</div>` : ''}
        <div class="taxonomy">
            <strong>${species.order}</strong> › ${species.family}
        </div>
        <div class="taxonomy">
            ${species.distribution}
        </div>
        <span class="status-badge ${statusClass}">${species.iucnStatus}</span>
    `;
    
    return card;
}

function showSpeciesDetail(species) {
    const modal = document.getElementById('species-modal');
    const modalBody = document.getElementById('modal-body');
    
    const statusClass = `status-${species.iucnStatus}`;
    const statusText = {
        'LC': 'Least Concern',
        'NT': 'Near Threatened',
        'VU': 'Vulnerable',
        'EN': 'Endangered',
        'CR': 'Critically Endangered',
        'DD': 'Data Deficient'
    };
    
    // Build NCBI links HTML
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
    
    modalBody.innerHTML = `
        <div class="modal-header">
            <h2>${species.scientificName}</h2>
            ${species.commonName ? `<p style="font-size: 1.1rem; color: #666;">${species.commonName}</p>` : ''}
        </div>
        
        <div class="modal-section">
            <h3>Taxonomy</h3>
            <div class="info-grid">
                <div class="info-label">Class:</div>
                <div class="info-value">${species.class}</div>
                <div class="info-label">Order:</div>
                <div class="info-value">${species.order}</div>
                <div class="info-label">Family:</div>
                <div class="info-value">${species.family}</div>
                ${species.subfamily ? `<div class="info-label">Subfamily:</div><div class="info-value">${species.subfamily}</div>` : ''}
            </div>
        </div>
        
        <div class="modal-section">
            <h3>Conservation Status</h3>
            <span class="status-badge ${statusClass}">${species.iucnStatus} - ${statusText[species.iucnStatus]}</span>
            ${species.nationalStatus ? `<p style="margin-top: 0.5rem;">National status: ${species.nationalStatus}</p>` : ''}
        </div>
        
        <div class="modal-section">
            <h3>Distribution</h3>
            <p>${species.distribution}</p>
            ${species.coordinates ? `
                <div id="distribution-map"></div>
                <script>
                    setTimeout(() => {
                        const map = L.map('distribution-map').setView([${species.coordinates.lat}, ${species.coordinates.lng}], 7);
                        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                            attribution: '© OpenStreetMap contributors'
                        }).addTo(map);
                        L.marker([${species.coordinates.lat}, ${species.coordinates.lng}]).addTo(map)
                            .bindPopup('${species.scientificName}').openPopup();
                    }, 100);
                </script>
            ` : ''}
        </div>
        
        ${species.habitat ? `
            <div class="modal-section">
                <h3>Habitat</h3>
                <p>${species.habitat}</p>
            </div>
        ` : ''}
        
        <div class="modal-section">
            <h3>Genomic Resources</h3>
            ${ncbiLinksHtml}
        </div>
        
        ${species.notes ? `
            <div class="modal-section">
                <h3>Notes</h3>
                <p>${species.notes}</p>
            </div>
        ` : ''}
        
        ${species.researchPlans ? `
            <div class="modal-section">
                <h3>Research Plans</h3>
                <p>${species.researchPlans}</p>
            </div>
        ` : ''}
    `;
    
    modal.style.display = 'block';
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
                    <strong>Target species:</strong> ${plan.species.join(', ')}
                </div>
            ` : ''}
            ${plan.timeline ? `<p style="margin-top: 0.5rem;"><strong>Timeline:</strong> ${plan.timeline}</p>` : ''}
        `;
        container.appendChild(div);
    });
}

function setupEventListeners() {
    // Search box
    document.getElementById('search-box').addEventListener('input', filterSpecies);
    
    // Filter dropdowns
    document.getElementById('filter-class').addEventListener('change', filterSpecies);
    document.getElementById('filter-order').addEventListener('change', filterSpecies);
    document.getElementById('filter-status').addEventListener('change', filterSpecies);
    
    // Modal close
    document.querySelector('.close').onclick = function() {
        document.getElementById('species-modal').style.display = 'none';
    };
    
    window.onclick = function(event) {
        const modal = document.getElementById('species-modal');
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
    
    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

function filterSpecies() {
    const searchTerm = document.getElementById('search-box').value.toLowerCase();
    const classFilter = document.getElementById('filter-class').value;
    const orderFilter = document.getElementById('filter-order').value;
    const statusFilter = document.getElementById('filter-status').value;
    
    const filtered = speciesData.filter(species => {
        // Search filter
        const matchesSearch = !searchTerm || 
            species.scientificName.toLowerCase().includes(searchTerm) ||
            (species.commonName && species.commonName.toLowerCase().includes(searchTerm));
        
        // Class filter
        const matchesClass = classFilter === 'all' || species.class === classFilter;
        
        // Order filter
        const matchesOrder = orderFilter === 'all' || species.order === orderFilter;
        
        // Status filter
        const matchesStatus = statusFilter === 'all' || species.iucnStatus === statusFilter;
        
        return matchesSearch && matchesClass && matchesOrder && matchesStatus;
    });
    
    displaySpecies(filtered);
}
