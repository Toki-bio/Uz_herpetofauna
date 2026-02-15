// Species Data for Uzbekistan Herpetofauna
// Add your species data here following this template

const speciesData = [
    {
        scientificName: "Testudo horsfieldii",
        commonName: "Central Asian Tortoise",
        class: "Reptilia",
        order: "Testudines",
        family: "Testudinidae",
        subfamily: null,
        distribution: "Throughout Uzbekistan; common in desert and semi-desert regions, foothills",
        habitat: "Desert, semi-desert, grassland, agricultural areas. Found up to 2000m elevation.",
        iucnStatus: "VU",
        nationalStatus: "Protected under national law",
        coordinates: {
            lat: 41.3775,
            lng: 64.5853
        },
        ncbiData: [
            {
                type: "Nucleotide (COI)",
                url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Testudo+horsfieldii+COI"
            },
            {
                type: "Nucleotide (16S)",
                url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Testudo+horsfieldii+16S"
            }
        ],
        notes: "One of the most common reptile species in Uzbekistan. Subject to illegal collection for pet trade.",
        researchPlans: "Plan to collect population genetic data from different regions; assess phylogeographic structure across Central Asia."
    },
    {
        scientificName: "Laudakia lehmanni",
        commonName: "Lehmann's Rock Agama",
        class: "Reptilia",
        order: "Squamata",
        family: "Agamidae",
        subfamily: null,
        distribution: "Western Tian Shan mountains; recorded from Chimgan, Beldersay, and surrounding areas",
        habitat: "Rocky mountain slopes, cliffs, stone walls. Found at 1500-3000m elevation.",
        iucnStatus: "LC",
        nationalStatus: null,
        coordinates: {
            lat: 41.5889,
            lng: 70.0131
        },
        ncbiData: [
            {
                type: "Nucleotide",
                url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Laudakia+lehmanni"
            }
        ],
        notes: "Taxonomy requires revision; relationship to other Laudakia species unclear.",
        researchPlans: "Collect tissue samples for phylogenetic analysis; clarify taxonomic status within Laudakia complex."
    },
    {
        scientificName: "Bufotes pewzowi",
        commonName: "Pewzow's Toad",
        class: "Amphibia",
        order: "Anura",
        family: "Bufonidae",
        subfamily: null,
        distribution: "Widespread in lowlands and foothills; near water bodies throughout Uzbekistan",
        habitat: "Desert oases, irrigation canals, temporary pools. Breeds in spring.",
        iucnStatus: "LC",
        nationalStatus: null,
        coordinates: {
            lat: 40.5,
            lng: 66.0
        },
        ncbiData: [
            {
                type: "Nucleotide (12S-16S)",
                url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Bufotes+pewzowi"
            }
        ],
        notes: "Previously considered subspecies of B. viridis; elevated to species level based on molecular data.",
        researchPlans: "Investigate vocalization differences; study hybridization zones with related species."
    },
    {
        scientificName: "Eremias velox",
        commonName: "Rapid Racerunner",
        class: "Reptilia",
        order: "Squamata",
        family: "Lacertidae",
        subfamily: null,
        distribution: "Common throughout desert and semi-desert zones",
        habitat: "Sandy deserts, fixed and semi-fixed dunes, clay deserts, agricultural lands.",
        iucnStatus: "LC",
        nationalStatus: null,
        coordinates: {
            lat: 42.0,
            lng: 63.5
        },
        ncbiData: [
            {
                type: "Nucleotide (Cytb)",
                url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Eremias+velox+cytochrome"
            }
        ],
        notes: "Multiple subspecies described; taxonomic status of some populations uncertain.",
        researchPlans: "Genomic survey of populations across range; assess subspecies validity."
    },
    {
        scientificName: "Pelophylax ridibundus",
        commonName: "Marsh Frog",
        class: "Amphibia",
        order: "Anura",
        family: "Ranidae",
        subfamily: null,
        distribution: "Associated with permanent water bodies throughout Uzbekistan",
        habitat: "Lakes, ponds, rivers, canals, reservoirs. Most aquatic of Central Asian frogs.",
        iucnStatus: "LC",
        nationalStatus: null,
        coordinates: {
            lat: 41.0,
            lng: 69.0
        },
        ncbiData: [
            {
                type: "Nucleotide",
                url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Pelophylax+ridibundus"
            },
            {
                type: "Genome",
                url: "https://www.ncbi.nlm.nih.gov/genome/?term=Pelophylax+ridibundus"
            }
        ],
        notes: "Forms hybrid complexes with other Pelophylax species in parts of range.",
        researchPlans: null
    }
    // Add more species here following the same structure
];

// Literature Data
const literatureData = [
    {
        title: "Amphibians and Reptiles of Uzbekistan: A Complete Checklist",
        authors: "Brushko, Z.K. & Kubykin, R.A.",
        citation: "Russian Journal of Herpetology, 8(1): 75-83 (2001)",
        url: null
    },
    {
        title: "The Herpetofauna of Central Asia",
        authors: "Shcherbak, N.N.",
        citation: "Proceedings of the Zoological Institute, Russian Academy of Sciences, Volume 246 (1993)",
        url: null
    },
    {
        title: "Reptiles of Central Asia: A Field Guide",
        authors: "Ananjeva, N.B., Orlov, N.L., Khalikov, R.G., Darevsky, I.S., Ryabov, S.A. & Barabanov, A.V.",
        citation: "Pensoft Publishers, Sofia-Moscow (2006)",
        url: null
    },
    {
        title: "A new species of Eremias from Uzbekistan",
        authors: "Author, A.B. & Coauthor, C.D.",
        citation: "Zootaxa, 1234(1): 45-56 (2024)",
        url: "https://doi.org/example"
    }
    // Add more literature here
];

// Research Plans
const researchPlans = [
    {
        title: "Phylogeography of Central Asian Lacertids",
        description: "Investigating the evolutionary history and biogeographic patterns of Eremias and related genera across Uzbekistan using multilocus genetic data. This project aims to resolve taxonomic uncertainties and identify cryptic species diversity.",
        species: ["Eremias velox", "Eremias grammica", "Eremias lineolata"],
        timeline: "2026-2028"
    },
    {
        title: "Conservation Genetics of Testudo horsfieldii",
        description: "Assessing population structure and genetic diversity of the vulnerable Central Asian Tortoise to inform conservation strategies. Will sample populations across different habitat types and assess the impact of habitat fragmentation.",
        species: ["Testudo horsfieldii"],
        timeline: "2026-2027"
    },
    {
        title: "Taxonomic Revision of Uzbek Laudakia",
        description: "Comprehensive molecular and morphological study to clarify the taxonomy of rock agamas in Uzbekistan. Preliminary data suggest potential undescribed species diversity in mountain regions.",
        species: ["Laudakia lehmanni", "Laudakia caucasia"],
        timeline: "2027-2029"
    },
    {
        title: "Anuran Vocalization Database",
        description: "Creating a comprehensive database of anuran calls from Uzbekistan for use in acoustic monitoring and species identification. Will include spectrograms and call parameter analyses.",
        species: ["Bufotes pewzowi", "Bufotes sitibundus", "Pelophylax ridibundus", "Hyla savignyi"],
        timeline: "Ongoing"
    }
    // Add more research plans here
];
