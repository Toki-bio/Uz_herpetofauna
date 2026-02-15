// Comprehensive Species Data for Uzbekistan Herpetofauna
// Compiled from iNaturalist, scientific literature, and field guides (2026)

const speciesData = [
    // AMPHIBIANS - Order Caudata (Salamanders)
    {
        scientificName: "Hynobius turkestanicus",
        commonName: "Turkestanian Salamander",
        class: "Amphibia",
        order: "Caudata",
        family: "Hynobiidae",
        subfamily: null,
        distribution: "Western Tian Shan mountains; endemic to Central Asia. Found in mountainous regions of Uzbekistan, Kyrgyzstan, and Kazakhstan at high elevations",
        habitat: "Mountain streams, springs, and moist forests at 1500-3000m elevation. Requires cold, clear water",
        iucnStatus: "EN",
        nationalStatus: "Protected - Red Book of Uzbekistan",
        coordinates: {
            lat: 41.7,
            lng: 70.5
        },
        ncbiData: [
            {
                type: "Nucleotide",
                url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Hynobius+turkestanicus"
            }
        ],
        notes: "Range-restricted endemic species. Threatened by habitat degradation and climate change. Rarely observed due to remote habitat.",
        researchPlans: "Population surveys needed; molecular phylogenetics to clarify taxonomic position within Hynobius"
    },

    // AMPHIBIANS - Order Anura (Frogs and Toads)
    {
        scientificName: "Bufotes viridis",
        commonName: "Green Toad",
        class: "Amphibia",
        order: "Anura",
        family: "Bufonidae",
        subfamily: null,
        distribution: "Widespread throughout Uzbekistan in lowlands and foothills; common in urban areas, oases, and agricultural lands",
        habitat: "Desert oases, gardens, irrigation canals, near human settlements. Highly adaptable to arid conditions. Found from lowlands to 2000m",
        iucnStatus: "LC",
        nationalStatus: null,
        coordinates: {
            lat: 41.3,
            lng: 69.3
        },
        ncbiData: [
            {
                type: "Nucleotide",
                url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Bufotes+viridis"
            }
        ],
        notes: "Common and adaptable species. Taxonomy complex - includes multiple cryptic lineages in Central Asia",
        researchPlans: "Molecular survey to clarify species boundaries between B. viridis, B. pewzowi, and B. sitibundus in Uzbekistan"
    },
    {
        scientificName: "Bufotes pewzowi",
        commonName: "Pewzow's Toad / Xinjiang Toad",
        class: "Amphibia",
        order: "Anura",
        family: "Bufonidae",
        subfamily: null,
        distribution: "Eastern and northern Uzbekistan; Fergana Valley. Also found in Kazakhstan, Kyrgyzstan, China",
        habitat: "Desert and semi-desert areas near water bodies, temporary pools, irrigation systems. Breeds in spring",
        iucnStatus: "LC",
        nationalStatus: null,
        coordinates: {
            lat: 40.8,
            lng: 71.5
        },
        ncbiData: [
            {
                type: "Nucleotide",
                url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Bufotes+pewzowi"
            }
        ],
        notes: "Previously considered subspecies of B. viridis; elevated to species based on molecular data. Vocalization differs from B. viridis",
        researchPlans: "Acoustic analysis; distribution mapping; hybridization studies with B. viridis"
    },
    {
        scientificName: "Bufotes perrini",
        commonName: "Perrin's Green Toad",
        class: "Amphibia",
        order: "Anura",
        family: "Bufonidae",
        subfamily: null,
        distribution: "Southern Uzbekistan, particularly around Samarkand and Bukhara regions",
        habitat: "Desert areas near water sources, foothills, rocky areas",
        iucnStatus: "LC",
        nationalStatus: null,
        coordinates: {
            lat: 39.6,
            lng: 66.9
        },
        ncbiData: [
            {
                type: "Nucleotide",
                url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Bufotes+perrini"
            }
        ],
        notes: "Recently described species, separated from B. sitibundus",
        researchPlans: null
    },
    {
        scientificName: "Bufotes sitibundus",
        commonName: "Turan Toad",
        class: "Amphibia",
        order: "Anura",
        family: "Bufonidae",
        subfamily: null,
        distribution: "Southern regions of Uzbekistan; Surkhandarya province",
        habitat: "Rocky foothills, mountain valleys, near streams",
        iucnStatus: "LC",
        nationalStatus: null,
        coordinates: {
            lat: 37.9,
            lng: 67.6
        },
        ncbiData: [
            {
                type: "Nucleotide",
                url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Bufotes+sitibundus"
            }
        ],
        notes: "Part of the viridis species complex",
        researchPlans: null
    },
    {
        scientificName: "Pelophylax ridibundus",
        commonName: "Marsh Frog / Lake Frog",
        class: "Amphibia",
        order: "Anura",
        family: "Ranidae",
        subfamily: null,
        distribution: "Throughout Uzbekistan wherever permanent water bodies exist; common in Tashkent, along rivers, lakes, and reservoirs",
        habitat: "Permanent water bodies: lakes, ponds, rivers, canals, reservoirs. Most aquatic frog in Central Asia",
        iucnStatus: "LC",
        nationalStatus: null,
        coordinates: {
            lat: 41.3,
            lng: 69.2
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
        notes: "Very common. Can form hybrid complexes with other Pelophylax species. Important component of aquatic ecosystems",
        researchPlans: "Survey of genetic diversity; potential hybridization with other Central Asian water frogs"
    },
    {
        scientificName: "Rana asiatica",
        commonName: "Central Asian Frog / Asian Frog",
        class: "Amphibia",
        order: "Anura",
        family: "Ranidae",
        subfamily: null,
        distribution: "Eastern and northeastern Uzbekistan, particularly in mountain regions",
        habitat: "Mountain streams, springs, moist meadows at higher elevations",
        iucnStatus: "LC",
        nationalStatus: null,
        coordinates: {
            lat: 41.5,
            lng: 70.0
        },
        ncbiData: [
            {
                type: "Nucleotide",
                url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Rana+asiatica"
            }
        ],
        notes: "Less common than Pelophylax ridibundus; prefers cooler mountain habitats",
        researchPlans: null
    },

    // REPTILES - Order Testudines (Turtles)
    {
        scientificName: "Testudo horsfieldii",
        commonName: "Central Asian Tortoise / Russian Tortoise",
        class: "Reptilia",
        order: "Testudines",
        family: "Testudinidae",
        subfamily: null,
        distribution: "Throughout Uzbekistan; one of the most common reptiles. Found in deserts, semi-deserts, foothills, and agricultural areas",
        habitat: "Desert, semi-desert, steppe grassland, agricultural areas. Found from lowlands up to 2000m elevation. Hibernates in winter, aestivates in hot summer",
        iucnStatus: "VU",
        nationalStatus: "Protected under national law - Red Book of Uzbekistan",
        coordinates: {
            lat: 40.5,
            lng: 64.5
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
        notes: "Heavily impacted by illegal collection for pet trade. Population declining despite legal protection. Important herbivore in desert ecosystems",
        researchPlans: "Population genetic study across Uzbekistan; phylogeography of Central Asian populations; conservation genetics for management"
    },

    // REPTILES - Order Squamata, Suborder Sauria (Lizards)
    // Family Agamidae
    {
        scientificName: "Laudakia lehmanni",
        commonName: "Lehmann's Rock Agama / Turkestan Rock Agama",
        class: "Reptilia",
        order: "Squamata",
        family: "Agamidae",
        subfamily: null,
        distribution: "Western Tian Shan mountains; Chimgan, Beldersay, Pskem areas. Endemic to Central Asian mountains",
        habitat: "Rocky mountain slopes, cliffs, stone walls, boulder fields. Found at 1500-3000m elevation",
        iucnStatus: "LC",
        nationalStatus: null,
        coordinates: {
            lat: 41.6,
            lng: 70.0
        },
        ncbiData: [
            {
                type: "Nucleotide",
                url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Laudakia+lehmanni"
            }
        ],
        notes: "Taxonomy requires revision. Relationship to other Laudakia species unclear. Males have brilliant blue coloration during breeding season",
        researchPlans: "Molecular phylogenetics to clarify position within Laudakia complex; population genetics"
    },
    {
        scientificName: "Paralaudakia bochariensis",
        commonName: "Bukhara Rock Agama",
        class: "Reptilia",
        order: "Squamata",
        family: "Agamidae",
        subfamily: null,
        distribution: "Southern Uzbekistan; Bukhara and Surkhandarya regions",
        habitat: "Rocky areas in foothills and low mountains",
        iucnStatus: "LC",
        nationalStatus: null,
        coordinates: {
            lat: 39.0,
            lng: 66.8
        },
        ncbiData: [
            {
                type: "Nucleotide",
                url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Paralaudakia+bochariensis"
            }
        ],
        notes: "Recently separated from Laudakia based on molecular data",
        researchPlans: null
    },
    {
        scientificName: "Trapelus sanguinolentus",
        commonName: "Steppe Agama",
        class: "Reptilia",
        order: "Squamata",
        family: "Agamidae",
        subfamily: null,
        distribution: "Widespread in desert and steppe zones throughout Uzbekistan",
        habitat: "Clay deserts, semi-deserts, steppe grasslands, agricultural lands. Lowland species",
        iucnStatus: "LC",
        nationalStatus: null,
        coordinates: {
            lat: 41.0,
            lng: 64.0
        },
        ncbiData: [
            {
                type: "Nucleotide",
                url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Trapelus+sanguinolentus"
            }
        ],
        notes: "Common and widespread. Often seen basking on roads",
        researchPlans: null
    },
    {
        scientificName: "Phrynocephalus helioscopus",
        commonName: "Sunwatcher Toadhead Agama",
        class: "Reptilia",
        order: "Squamata",
        family: "Agamidae",
        subfamily: null,
        distribution: "Northern and central Uzbekistan in sandy and clay deserts",
        habitat: "Sandy and clay deserts, semi-fixed dunes",
        iucnStatus: "LC",
        nationalStatus: null,
        coordinates: {
            lat: 42.0,
            lng: 62.0
        },
        ncbiData: [
            {
                type: "Nucleotide",
                url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Phrynocephalus+helioscopus"
            }
        ],
        notes: "Displays distinctive threat behavior - opens mouth showing bright colors",
        researchPlans: null
    },
    {
        scientificName: "Phrynocephalus interscapularis",
        commonName: "Lichtenstein's Toadhead Agama",
        class: "Reptilia",
        order: "Squamata",
        family: "Agamidae",
        subfamily: null,
        distribution: "Northwestern Uzbekistan; Karakalpakstan region",
        habitat: "Sandy deserts, dunes",
        iucnStatus: "LC",
        nationalStatus: null,
        coordinates: {
            lat: 43.0,
            lng: 59.0
        },
        ncbiData: [
            {
                type: "Nucleotide",
                url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Phrynocephalus+interscapularis"
            }
        ],
        notes: "Sand-dwelling specialist",
        researchPlans: null
    },
    {
        scientificName: "Phrynocephalus mystaceus",
        commonName: "Secret Toadhead Agama",
        class: "Reptilia",
        order: "Squamata",
        family: "Agamidae",
        subfamily: null,
        distribution: "Central and southern Uzbekistan in desert regions",
        habitat: "Sandy and clay deserts",
        iucnStatus: "LC",
        nationalStatus: null,
        coordinates: {
            lat: 40.0,
            lng: 63.0
        },
        ncbiData: [
            {
                type: "Nucleotide",
                url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Phrynocephalus+mystaceus"
            }
        ],
        notes: "Named for the mustache-like markings on the face",
        researchPlans: null
    },
    {
        scientificName: "Phrynocephalus reticulatus",
        commonName: "Reticulated Toadhead Agama",
        class: "Reptilia",
        order: "Squamata",
        family: "Agamidae",
        subfamily: null,
        distribution: "Widespread in sandy deserts of Uzbekistan",
        habitat: "Sandy deserts, fixed and semi-fixed dunes",
        iucnStatus: "LC",
        nationalStatus: null,
        coordinates: {
            lat: 41.0,
            lng: 61.0
        },
        ncbiData: [
            {
                type: "Nucleotide",
                url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Phrynocephalus+reticulatus"
            }
        ],
        notes: "Well-adapted to sandy environments; can 'swim' through sand",
        researchPlans: null
    },
    {
        scientificName: "Phrynocephalus raddei",
        commonName: "Trans-Caspian Toadhead Agama",
        class: "Reptilia",
        order: "Squamata",
        family: "Agamidae",
        subfamily: null,
        distribution: "Southern Uzbekistan; Surkhandarya region",
        habitat: "Rocky and clay deserts in foothills",
        iucnStatus: "LC",
        nationalStatus: null,
        coordinates: {
            lat: 38.0,
            lng: 67.0
        },
        ncbiData: [
            {
                type: "Nucleotide",
                url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Phrynocephalus+raddei"
            }
        ],
        notes: "Several subspecies recognized",
        researchPlans: null
    },
    {
        scientificName: "Phrynocephalus strauchi",
        commonName: "Strauch's Toadhead Agama",
        class: "Reptilia",
        order: "Squamata",
        family: "Agamidae",
        subfamily: null,
        distribution: "Fergana Valley; endemic to Central Asia",
        habitat: "Sandy areas in intermountain valleys",
        iucnStatus: "VU",
        nationalStatus: "Vulnerable - Red Book of Uzbekistan",
        coordinates: {
            lat: 40.7,
            lng: 71.5
        },
        ncbiData: [
            {
                type: "Nucleotide",
                url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Phrynocephalus+strauchi"
            }
        ],
        notes: "Endemic to Fergana Valley. Threatened by habitat degradation and agricultural expansion",
        researchPlans: "Conservation genetics; population status assessment"
    },
    {
        scientificName: "Phrynocephalus rossikowi",
        commonName: "Uzbekistan Toadhead Agama",
        class: "Reptilia",
        order: "Squamata",
        family: "Agamidae",
        subfamily: null,
        distribution: "Northwestern Uzbekistan; Karakalpakstan",
        habitat: "Sandy deserts",
        iucnStatus: "LC",
        nationalStatus: null,
        coordinates: {
            lat: 42.5,
            lng: 59.5
        },
        ncbiData: [
            {
                type: "Nucleotide",
                url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Phrynocephalus+rossikowi"
            }
        ],
        notes: "Regional endemic",
        researchPlans: null
    },

    // Family Gekkonidae (Geckos)
    {
        scientificName: "Teratoscincus scincus",
        commonName: "Turkestan Plate-tailed Gecko / Wonder Gecko",
        class: "Reptilia",
        order: "Squamata",
        family: "Sphaerodactylidae",
        subfamily: null,
        distribution: "Sandy deserts throughout Uzbekistan; particularly in Kyzylkum Desert",
        habitat: "Sandy deserts with vegetation. Strictly nocturnal. Lives in burrows",
        iucnStatus: "LC",
        nationalStatus: null,
        coordinates: {
            lat: 41.5,
            lng: 63.0
        },
        ncbiData: [
            {
                type: "Nucleotide",
                url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Teratoscincus+scincus"
            }
        ],
        notes: "Remarkable species with large fish-like scales that fall off easily. Loud vocalizations. Endemic to Central Asia",
        researchPlans: "Ecological study; vocalization analysis; phylogeography"
    },
    {
        scientificName: "Teratoscincus rustamowi",
        commonName: "Rustamov's Wonder Gecko",
        class: "Reptilia",
        order: "Squamata",
        family: "Sphaerodactylidae",
        subfamily: null,
        distribution: "Fergana Valley; very limited range",
        habitat: "Sandy areas in valleys",
        iucnStatus: "VU",
        nationalStatus: "Endangered - Red Book of Uzbekistan",
        coordinates: {
            lat: 40.6,
            lng: 71.8
        },
        ncbiData: [
            {
                type: "Nucleotide",
                url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Teratoscincus+rustamowi"
            }
        ],
        notes: "Very rare endemic species with extremely limited range. Critically threatened by habitat loss",
        researchPlans: "Urgent conservation needs assessment; population surveys; habitat protection"
    },
    {
        scientificName: "Mediodactylus russowii",
        commonName: "Transcaspian Bent-toed Gecko",
        class: "Reptilia",
        order: "Squamata",
        family: "Gekkonidae",
        subfamily: null,
        distribution: "Southern and western Uzbekistan; rocky areas",
        habitat: "Rocky slopes, cliffs, old buildings. Nocturnal",
        iucnStatus: "LC",
        nationalStatus: null,
        coordinates: {
            lat: 39.5,
            lng: 66.0
        },
        ncbiData: [
            {
                type: "Nucleotide",
                url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Mediodactylus+russowii"
            }
        ],
        notes: "Common in rocky habitats. Often found in human structures",
        researchPlans: null
    },
    {
        scientificName: "Tenuidactylus fedtschenkoi",
        commonName: "Turkestan Thin-toed Gecko / Fedtschenko's Gecko",
        class: "Reptilia",
        order: "Squamata",
        family: "Gekkonidae",
        subfamily: null,
        distribution: "Throughout Uzbekistan in suitable rocky habitat",
        habitat: "Rocky areas, cliffs, saxaul forests, ruins. Nocturnal",
        iucnStatus: "LC",
        nationalStatus: null,
        coordinates: {
            lat: 40.0,
            lng: 66.0
        },
        ncbiData: [
            {
                type: "Nucleotide",
                url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Tenuidactylus+fedtschenkoi"
            }
        ],
        notes: "Common gecko species. Important predator of invertebrates",
        researchPlans: null
    },
    {
        scientificName: "Crossobamon eversmanni",
        commonName: "Comb-toed Gecko",
        class: "Reptilia",
        order: "Squamata",
        family: "Gekkonidae",
        subfamily: null,
        distribution: "Desert regions of Uzbekistan",
        habitat: "Sandy and clay deserts. Nocturnal",
        iucnStatus: "LC",
        nationalStatus: null,
        coordinates: {
            lat: 40.5,
            lng: 62.0
        },
        ncbiData: [
            {
                type: "Nucleotide",
                url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Crossobamon+eversmanni"
            }
        ],
        notes: "Named for the comb-like structures on toes",
        researchPlans: null
    },
    {
        scientificName: "Alsophylax loricatus",
        commonName: "Central Asian Even-fingered Gecko",
        class: "Reptilia",
        order: "Squamata",
        family: "Gekkonidae",
        subfamily: null,
        distribution: "Eastern Uzbekistan; Fergana Valley and adjacent areas",
        habitat: "Rocky and clay slopes in foothills",
        iucnStatus: "LC",
        nationalStatus: "Rare",
        coordinates: {
            lat: 40.8,
            lng: 71.0
        },
        ncbiData: [
            {
                type: "Nucleotide",
                url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Alsophylax+loricatus"
            }
        ],
        notes: "Uncommon species with limited distribution",
        researchPlans: null
    },

    // Family Lacertidae (Wall Lizards and Racerunners)
    {
        scientificName: "Eremias velox",
        commonName: "Rapid Racerunner / Central Asian Racerunner",
        class: "Reptilia",
        order: "Squamata",
        family: "Lacertidae",
        subfamily: null,
        distribution: "One of the most common lizards; throughout Uzbekistan in all desert and steppe zones",
        habitat: "Sandy and clay deserts, fixed dunes, steppe grasslands, agricultural lands. Extremely adaptable",
        iucnStatus: "LC",
        nationalStatus: null,
        coordinates: {
            lat: 41.0,
            lng: 64.0
        },
        ncbiData: [
            {
                type: "Nucleotide (Cytb)",
                url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Eremias+velox+cytochrome"
            }
        ],
        notes: "Very abundant. Multiple subspecies described; taxonomy needs revision. Important prey for snakes and birds",
        researchPlans: "Comprehensive phylogeographic study; subspecies validation using genomics"
    },
    {
        scientificName: "Eremias grammica",
        commonName: "Reticulate Racerunner",
        class: "Reptilia",
        order: "Squamata",
        family: "Lacertidae",
        subfamily: null,
        distribution: "Desert regions throughout Uzbekistan",
        habitat: "Sandy and clay deserts, semi-fixed dunes",
        iucnStatus: "LC",
        nationalStatus: null,
        coordinates: {
            lat: 41.5,
            lng: 62.5
        },
        ncbiData: [
            {
                type: "Nucleotide",
                url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Eremias+grammica"
            }
        ],
        notes: "Common desert species with distinctive reticulated pattern",
        researchPlans: null
    },
    {
        scientificName: "Eremias lineolata",
        commonName: "Striped Racerunner",
        class: "Reptilia",
        order: "Squamata",
        family: "Lacertidae",
        subfamily: null,
        distribution: "Desert and semi-desert regions across Uzbekistan",
        habitat: "Clay and sandy deserts, steppe",
        iucnStatus: "LC",
        nationalStatus: null,
        coordinates: {
            lat: 40.5,
            lng: 63.0
        },
        ncbiData: [
            {
                type: "Nucleotide",
                url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Eremias+lineolata"
            }
        ],
        notes: "Characterized by longitudinal stripes",
        researchPlans: null
    },
    {
        scientificName: "Eremias scripta",
        commonName: "Sand Racerunner",
        class: "Reptilia",
        order: "Squamata",
        family: "Lacertidae",
        subfamily: null,
        distribution: "Fergana Valley and adjacent sandy areas",
        habitat: "Sandy deserts and semi-deserts",
        iucnStatus: "LC",
        nationalStatus: "Rare in Uzbekistan",
        coordinates: {
            lat: 40.7,
            lng: 72.0
        },
        ncbiData: [
            {
                type: "Nucleotide",
                url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Eremias+scripta"
            }
        ],
        notes: "Several subspecies; E. s. pherganensis endemic to Fergana Valley",
        researchPlans: null
    },
    {
        scientificName: "Eremias intermedia",
        commonName: "Medial Racerunner",
        class: "Reptilia",
        order: "Squamata",
        family: "Lacertidae",
        subfamily: null,
        distribution: "Central Uzbekistan; desert regions",
        habitat: "Sandy and clay deserts",
        iucnStatus: "LC",
        nationalStatus: null,
        coordinates: {
            lat: 40.0,
            lng: 64.0
        },
        ncbiData: [
            {
                type: "Nucleotide",
                url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Eremias+intermedia"
            }
        ],
        notes: "Intermediate in characteristics between other Eremias species",
        researchPlans: null
    },
    {
        scientificName: "Eremias regeli",
        commonName: "Regel's Racerunner",
        class: "Reptilia",
        order: "Squamata",
        family: "Lacertidae",
        subfamily: null,
        distribution: "Southern Uzbekistan; Surkhandarya region",
        habitat: "Foothills, clay slopes",
        iucnStatus: "LC",
        nationalStatus: null,
        coordinates: {
            lat: 38.0,
            lng: 67.5
        },
        ncbiData: [
            {
                type: "Nucleotide",
                url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Eremias+regeli"
            }
        ],
        notes: "Less common than E. velox",
        researchPlans: null
    },
    {
        scientificName: "Eremias nigrocellata",
        commonName: "Black-spotted Racerunner",
        class: "Reptilia",
        order: "Squamata",
        family: "Lacertidae",
        subfamily: null,
        distribution: "Southern Uzbekistan",
        habitat: "Rocky foothills and mountains",
        iucnStatus: "LC",
        nationalStatus: null,
        coordinates: {
            lat: 38.5,
            lng: 67.0
        },
        ncbiData: [
            {
                type: "Nucleotide",
                url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Eremias+nigrocellata"
            }
        ],
        notes: "Named for black spots on sides",
        researchPlans: null
    },
    {
        scientificName: "Acanthodactylus erythrurus",
        commonName: "Spiny-footed Lizard",
        class: "Reptilia",
        order: "Squamata",
        family: "Lacertidae",
        subfamily: null,
        distribution: "Restricted areas of southern Uzbekistan",
        habitat: "Sandy areas",
        iucnStatus: "LC",
        nationalStatus: null,
        coordinates: {
            lat: 37.8,
            lng: 67.8
        },
        ncbiData: [
            {
                type: "Nucleotide",
                url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Acanthodactylus+erythrurus"
            }
        ],
        notes: "Edge of range in Central Asia",
        researchPlans: null
    },

    // Family Varanidae (Monitor Lizards)
    {
        scientificName: "Varanus griseus",
        commonName: "Desert Monitor",
        class: "Reptilia",
        order: "Squamata",
        family: "Varanidae",
        subfamily: null,
        distribution: "Desert regions throughout Uzbekistan, though declining",
        habitat: "Sandy and clay deserts, saxaul forests. Underground in burrows during day; active at dawn/dusk and night",
        iucnStatus: "EN",
        nationalStatus: "Endangered - Red Book of Uzbekistan",
        coordinates: {
            lat: 40.0,
            lng: 62.0
        },
        ncbiData: [
            {
                type: "Nucleotide",
                url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Varanus+griseus"
            },
            {
                type: "Genome",
                url: "https://www.ncbi.nlm.nih.gov/genome/?term=Varanus+griseus"
            }
        ],
        notes: "Largest lizard in Central Asia (up to 1.5m). Population severely declining due to habitat loss and persecution. Important predator",
        researchPlans: "Population assessment; conservation action plan; public awareness campaign"
    },

    // Family Anguidae (Glass Lizards)
    {
        scientificName: "Pseudopus apodus",
        commonName: "European Glass Lizard / Sheltopusik",
        class: "Reptilia",
        order: "Squamata",
        family: "Anguidae",
        subfamily: null,
        distribution: "Mountain regions of eastern Uzbekistan",
        habitat: "Mountain meadows, rocky slopes, forest edges",
        iucnStatus: "LC",
        nationalStatus: null,
        coordinates: {
            lat: 41.0,
            lng: 70.0
        },
        ncbiData: [
            {
                type: "Nucleotide",
                url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Pseudopus+apodus"
            }
        ],
        notes: "Legless lizard, often mistaken for snake. Can break off tail",
        researchPlans: null
    },

    // REPTILES - Order Squamata, Suborder Serpentes (Snakes)
    // Family Boidae (Boas)
    {
        scientificName: "Eryx tataricus",
        commonName: "Tartar Sand Boa",
        class: "Reptilia",
        order: "Squamata",
        family: "Boidae",
        subfamily: null,
        distribution: "Southern regions including Fergana Valley, Surkhandarya",
        habitat: "Sandy and rocky areas in deserts and foothills. Fossorial (burrowing)",
        iucnStatus: "LC",
        nationalStatus: "Near Threatened in Uzbekistan - Red Book",
        coordinates: {
            lat: 40.0,
            lng: 68.0
        },
        ncbiData: [
            {
                type: "Nucleotide",
                url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Eryx+tataricus"
            }
        ],
        notes: "Non-venomous constrictor. Threatened by habitat exploitation and poaching",
        researchPlans: "Distribution mapping; population status"
    },
    {
        scientificName: "Eryx miliaris",
        commonName: "Dwarf Sand Boa",
        class: "Reptilia",
        order: "Squamata",
        family: "Boidae",
        subfamily: null,
        distribution: "Desert regions of Uzbekistan",
        habitat: "Sandy deserts. Highly fossorial",
        iucnStatus: "LC",
        nationalStatus: null,
        coordinates: {
            lat: 41.0,
            lng: 62.0
        },
        ncbiData: [
            {
                type: "Nucleotide",
                url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Eryx+miliaris"
            }
        ],
        notes: "Small boa, rarely seen due to burrowing habits",
        researchPlans: null
    },

    // Family Colubridae (Colubrids)
    {
        scientificName: "Natrix tessellata",
        commonName: "Dice Snake / Tessellated Water Snake",
        class: "Reptilia",
        order: "Squamata",
        family: "Colubridae",
        subfamily: null,
        distribution: "Throughout Uzbekistan near water bodies; most common water snake",
        habitat: "Rivers, streams, lakes, canals. Semi-aquatic",
        iucnStatus: "LC",
        nationalStatus: null,
        coordinates: {
            lat: 40.5,
            lng: 68.0
        },
        ncbiData: [
            {
                type: "Nucleotide",
                url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Natrix+tessellata"
            }
        ],
        notes: "Non-venomous. Feeds primarily on fish and amphibians. Most widespread snake near water",
        researchPlans: null
    },
    {
        scientificName: "Natrix natrix",
        commonName: "Grass Snake",
        class: "Reptilia",
        order: "Squamata",
        family: "Colubridae",
        subfamily: null,
        distribution: "Northern and eastern Uzbekistan near water",
        habitat: "Wetlands, rivers, lake shores, moist meadows",
        iucnStatus: "LC",
        nationalStatus: null,
        coordinates: {
            lat: 41.5,
            lng: 69.5
        },
        ncbiData: [
            {
                type: "Nucleotide",
                url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Natrix+natrix"
            }
        ],
        notes: "Recognizable by yellow collar behind head. Non-venomous",
        researchPlans: null
    },
    {
        scientificName: "Psammophis lineolatus",
        commonName: "Desert Sand Snake / Stripe-bellied Sand Snake",
        class: "Reptilia",
        order: "Squamata",
        family: "Psammophiidae",
        subfamily: null,
        distribution: "Widespread in deserts throughout Uzbekistan; one of most common snakes",
        habitat: "Sandy and clay deserts, semi-deserts. Diurnal, fast-moving",
        iucnStatus: "LC",
        nationalStatus: null,
        coordinates: {
            lat: 40.0,
            lng: 63.0
        },
        ncbiData: [
            {
                type: "Nucleotide",
                url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Psammophis+lineolatus"
            }
        ],
        notes: "Very common. Rear-fanged, mildly venomous but harmless to humans",
        researchPlans: null
    },
    {
        scientificName: "Platyceps najadum",
        commonName: "Dahl's Whip Snake",
        class: "Reptilia",
        order: "Squamata",
        family: "Colubridae",
        subfamily: null,
        distribution: "Rocky and semi-desert areas throughout Uzbekistan",
        habitat: "Rocky slopes, foothills, ruins. Fast-moving diurnal snake",
        iucnStatus: "LC",
        nationalStatus: null,
        coordinates: {
            lat: 40.0,
            lng: 66.0
        },
        ncbiData: [
            {
                type: "Nucleotide",
                url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Platyceps+najadum"
            }
        ],
        notes: "Non-venomous. Very fast and agile",
        researchPlans: null
    },
    {
        scientificName: "Dolichophis caspius",
        commonName: "Caspian Whipsnake",
        class: "Reptilia",
        order: "Squamata",
        family: "Colubridae",
        subfamily: null,
        distribution: "Throughout Uzbekistan in various habitats",
        habitat: "Adaptable - forests, grasslands, agricultural areas, near settlements",
        iucnStatus: "LC",
        nationalStatus: null,
        coordinates: {
            lat: 40.5,
            lng: 67.0
        },
        ncbiData: [
            {
                type: "Nucleotide",
                url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Dolichophis+caspius"
            }
        ],
        notes: "Large, fast snake. Non-venomous but can be defensive",
        researchPlans: null
    },
    {
        scientificName: "Elaphe sauromates",
        commonName: "Eastern Ratsnake",
        class: "Reptilia",
        order: "Squamata",
        family: "Colubridae",
        subfamily: null,
        distribution: "Limited areas in western and northern Uzbekistan",
        habitat: "Forest edges, shrublands, near water",
        iucnStatus: "LC",
        nationalStatus: null,
        coordinates: {
            lat: 41.5,
            lng: 60.0
        },
        ncbiData: [
            {
                type: "Nucleotide",
                url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Elaphe+sauromates"
            }
        ],
        notes: "Edge of range in Uzbekistan. Non-venomous",
        researchPlans: null
    },
    {
        scientificName: "Lycodon bicolor",
        commonName: "Two-coloured Wolf Snake",
        class: "Reptilia",
        order: "Squamata",
        family: "Colubridae",
        subfamily: null,
        distribution: "Mountain regions of southern Uzbekistan",
        habitat: "Rocky mountain slopes, near streams. Nocturnal",
        iucnStatus: "LC",
        nationalStatus: null,
        coordinates: {
            lat: 39.0,
            lng: 67.0
        },
        ncbiData: [
            {
                type: "Nucleotide",
                url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Lycodon+bicolor"
            }
        ],
        notes: "Beautiful patterned snake. Non-venomous",
        researchPlans: null
    },
    {
        scientificName: "Boiga trigonata",
        commonName: "Common Cat Snake",
        class: "Reptilia",
        order: "Squamata",
        family: "Colubridae",
        subfamily: null,
        distribution: "Southern Uzbekistan in suitable habitat",
        habitat: "Rocky areas, shrublands. Nocturnal, arboreal",
        iucnStatus: "LC",
        nationalStatus: null,
        coordinates: {
            lat: 38.0,
            lng: 68.0
        },
        ncbiData: [
            {
                type: "Nucleotide",
                url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Boiga+trigonata"
            }
        ],
        notes: "Rear-fanged, mildly venomous. Northern edge of range",
        researchPlans: null
    },
    {
        scientificName: "Ptyas mucosa",
        commonName: "Oriental Ratsnake / Dhaman",
        class: "Reptilia",
        order: "Squamata",
        family: "Colubridae",
        subfamily: null,
        distribution: "Southern Uzbekistan; limited range",
        habitat: "Riverine forests, tugai forests, near water",
        iucnStatus: "LC",
        nationalStatus: "Declining",
        coordinates: {
            lat: 37.5,
            lng: 67.5
        },
        ncbiData: [
            {
                type: "Nucleotide",
                url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Ptyas+mucosa"
            }
        ],
        notes: "Large snake. Population declining due to tugai habitat loss",
        researchPlans: null
    },

    // Family Elapidae (Cobras)
    {
        scientificName: "Naja oxiana",
        commonName: "Central Asian Cobra / Caspian Cobra",
        class: "Reptilia",
        order: "Squamata",
        family: "Elapidae",
        subfamily: null,
        distribution: "Southern and eastern Uzbekistan; foothills and mountains",
        habitat: "Rocky foothills, shrublands, forests. Found from lowlands to 3000m. Hides in tree hollows, burrows",
        iucnStatus: "LC",
        nationalStatus: "Protected - dangerous species",
        coordinates: {
            lat: 39.0,
            lng: 67.0
        },
        ncbiData: [
            {
                type: "Nucleotide",
                url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Naja+oxiana"
            },
            {
                type: "Genome",
                url: "https://www.ncbi.nlm.nih.gov/genome/?term=Naja+oxiana"
            }
        ],
        notes: "HIGHLY VENOMOUS - most potent venom of all cobra species. Responsible for most serious snakebites in Central Asia. Adults 1-1.8m. Good climber and swimmer",
        researchPlans: "Venom composition analysis; distribution mapping; public education on snakebite prevention"
    },

    // Family Viperidae (Vipers)
    {
        scientificName: "Macrovipera lebetinus",
        commonName: "Blunt-nosed Viper / Levantine Viper",
        class: "Reptilia",
        order: "Squamata",
        family: "Viperidae",
        subfamily: null,
        distribution: "Southern and eastern Uzbekistan in mountains and foothills",
        habitat: "Rocky mountain slopes, scree, alpine meadows. 500-3000m elevation",
        iucnStatus: "VU",
        nationalStatus: "Protected - Red Book of Uzbekistan",
        coordinates: {
            lat: 39.0,
            lng: 68.0
        },
        ncbiData: [
            {
                type: "Nucleotide",
                url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Macrovipera+lebetinus"
            }
        ],
        notes: "VENOMOUS. Large viper, up to 1.5m. Several subspecies. Declining due to persecution",
        researchPlans: "Population assessment; subspecies clarification; conservation strategy"
    },
    {
        scientificName: "Vipera renardi",
        commonName: "Steppe Viper / Renard's Viper",
        class: "Reptilia",
        order: "Squamata",
        family: "Viperidae",
        subfamily: null,
        distribution: "Northern Uzbekistan in steppe zones; limited areas",
        habitat: "Steppe grasslands, semi-desert. Lowland species",
        iucnStatus: "LC",
        nationalStatus: "Rare in Uzbekistan",
        coordinates: {
            lat: 42.0,
            lng: 63.0
        },
        ncbiData: [
            {
                type: "Nucleotide",
                url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Vipera+renardi"
            }
        ],
        notes: "VENOMOUS. Small viper, usually under 50cm. Southern edge of range",
        researchPlans: "Distribution confirmation; genetic studies"
    },
    {
        scientificName: "Echis multisquamatus",
        commonName: "Central Asian Saw-scaled Viper",
        class: "Reptilia",
        order: "Squamata",
        family: "Viperidae",
        subfamily: null,
        distribution: "Southern Uzbekistan; limited distribution",
        habitat: "Rocky deserts, foothills",
        iucnStatus: "LC",
        nationalStatus: null,
        coordinates: {
            lat: 38.0,
            lng: 67.5
        },
        ncbiData: [
            {
                type: "Nucleotide",
                url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Echis+multisquamatus"
            }
        ],
        notes: "VENOMOUS. Makes characteristic rasping sound with scales when threatened",
        researchPlans: null
    }
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
        title: "The herpetofauna of central Uzbekistan",
        authors: "Martin, T., Guillemin, M., Eudeline, R., Landsmann, C., Nivet-Mazerolles, V. & Stroud, J.",
        citation: "Amphibian & Reptile Conservation, 11(1): 93-107 (2017)",
        url: "https://amphibian-reptile-conservation.org"
    },
    {
        title: "Species composition of Reptilia in Fergana Valley region of Uzbekistan",
        authors: "Zakirova, N. & various authors",
        citation: "European Journal of Agricultural and Rural Education (EJARE) (2024)",
        url: null
    },
    {
        title: "Snakes of Central Asia: Distribution, Taxonomy, Conservation",
        authors: "Aktag, B., Mega, B. & Cicek, K.",
        citation: "Various publications (2020-2024)",
        url: null
    },
    {
        title: "Red Book of the Republic of Uzbekistan",
        authors: "State Committee for Ecology and Environmental Protection",
        citation: "Third Edition, Tashkent (2019)",
        url: null
    },
    {
        title: "Central Asian Cobra (Naja oxiana): Venom, Distribution, and Conservation",
        authors: "Kazemi-Lomedasht, F. et al.",
        citation: "Toxicon, 167: 110-118 (2019)",
        url: null
    }
];

// Research Plans
const researchPlans = [
    {
        title: "Phylogeography of Central Asian Lacertids",
        description: "Comprehensive phylogeographic study of Eremias species across Uzbekistan using multilocus genetic data. This project aims to resolve taxonomic uncertainties (especially the velox complex), identify cryptic species diversity, and understand biogeographic patterns shaped by Central Asian paleogeography.",
        species: ["Eremias velox", "Eremias grammica", "Eremias lineolata", "Eremias intermedia", "Eremias scripta", "Eremias regeli", "Eremias nigrocellata"],
        timeline: "2026-2028"
    },
    {
        title: "Conservation Genetics of Threatened Herpetofauna",
        description: "Assessing population structure and genetic diversity of vulnerable and endangered species to inform conservation strategies. Will sample populations across different habitats and assess the impact of habitat fragmentation. Priority species include the Central Asian Tortoise, Desert Monitor, and endemic geckos.",
        species: ["Testudo horsfieldii", "Varanus griseus", "Teratoscincus rustamowi", "Phrynocephalus strauchi"],
        timeline: "2026-2028"
    },
    {
        title: "Taxonomy of Uzbek Agamids",
        description: "Comprehensive molecular and morphological study to clarify taxonomy of agamids in Uzbekistan, particularly Laudakia, Paralaudakia, and Phrynocephalus complexes. Preliminary data suggest potential undescribed species diversity in mountain regions and unresolved relationships within genera.",
        species: ["Laudakia lehmanni", "Paralaudakia bochariensis", "Phrynocephalus helioscopus", "Phrynocephalus reticulatus", "Phrynocephalus strauchi"],
        timeline: "2026-2029"
    },
    {
        title: "Central Asian Bufotes Systematics",
        description: "Resolving the taxonomy and phylogeography of the Bufotes viridis species complex in Uzbekistan. Multiple cryptic lineages exist; need to clarify species boundaries between B. viridis, B. pewzowi, B. sitibundus, and B. perrini using acoustic, molecular, and morphological data.",
        species: ["Bufotes viridis", "Bufotes pewzowi", "Bufotes sitibundus", "Bufotes perrini"],
        timeline: "2026-2027"
    },
    {
        title: "Venomous Snakes: Distribution, Ecology, and Public Health",
        description: "Comprehensive survey of venomous snake distribution and abundance in Uzbekistan. Includes GPS locality data collection, habitat modeling, venom composition analysis (Naja oxiana), and development of snakebite prevention educational materials. Critical for both conservation and public health.",
        species: ["Naja oxiana", "Macrovipera lebetinus", "Echis multisquamatus", "Vipera renardi"],
        timeline: "2026-2029"
    },
    {
        title: "Mountain Herpetofauna of the Western Tian Shan",
        description: "Ecological and conservation study of high-elevation species in Uzbekistan's mountains. Focus on the endemic Turkestanian Salamander, montane reptiles, and climate change impacts. Includes population monitoring, habitat assessment, and predictive modeling of climate change effects.",
        species: ["Hynobius turkestanicus", "Laudakia lehmanni", "Rana asiatica", "Macrovipera lebetinus"],
        timeline: "2027-2030"
    },
    {
        title: "Desert Monitor Conservation Action Plan",
        description: "Urgent conservation initiative for the declining Desert Monitor. Includes population surveys across historical range, habitat assessment, threat analysis (persecution, habitat loss), captive breeding feasibility study, and public awareness campaign to reduce persecution.",
        species: ["Varanus griseus"],
        timeline: "2026-2028"
    },
    {
        title: "Genomic Resources Development",
        description: "Building genomic resources for Central Asian herpetofauna through collection of tissue samples, DNA sequencing (mitochondrial and nuclear markers), and deposition in NCBI databases. Priority given to endemic, threatened, and taxonomically problematic species.",
        species: ["All Uzbekistan herpetofauna - systematic sampling"],
        timeline: "Ongoing 2026-2030"
    }
];
