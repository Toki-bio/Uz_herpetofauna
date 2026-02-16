// Comprehensive Species Data for Uzbekistan Herpetofauna
// Compiled from iNaturalist, scientific literature, and field guides (2026)
// Updated from official checklist CSV (February 2026)

const speciesData = [
    {
        scientificName: "Bufotes viridis",
        commonName: "Green toad",
        russianName: "Жаба зеленая",
        uzbekName: "Яшил қурбақа",
        class: "Amphibia",
        order: "Anura",
        family: "Bufonidae",
        subfamily: null,
        subspecies: null,
        description: "Medium-sized toad (50-90 mm SVL) with distinctive bright green spots and blotches on a light grey or cream background. Skin warty. Parotoid glands prominent, oval-shaped. Pupil horizontal. Males smaller with nuptial pads during breeding season. Highly adaptable to arid environments with nocturnal activity.",
        distribution: "Widespread throughout Uzbekistan in lowlands and foothills; common in urban areas, oases, and agricultural lands",
        habitat: "Desert oases, gardens, irrigation canals, near human settlements. Highly adaptable to arid conditions. Found from lowlands to 2000m",
        iucnStatus: "LC",
        nationalStatus: "",
        cites: "",
        endemism: "",
        regions: { Andijan: false, Fergana: false, Namangan: false, Tashkent: false, Syrdarya: false, Jizzak: false, Samarkand: false, Kashkadarya: false, Surkhandarya: false, Bukhara: false, Navoi: false, Khorezm: false, Karakalpakstan: false },
        coordinates: { lat: 41.3, lng: 69.3 },
        ncbiData: [
            { type: "Nucleotide", url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Bufotes+viridis" }
        ],
        publications: [
            { citation: "Stöck, M., Moritz, C., Hickerson, M. et al. (2006). Evolution of mitochondrial relationships and biogeography of Palearctic green toads (Bufo viridis subgroup). Molecular Phylogenetics and Evolution, 41: 663-689.", type: "phylogeny" },
            { citation: "Stöck, M., Sicilia, A., Belfiore, N.M. et al. (2008). Post-Messinian evolutionary relationships across the Sicilian channel: Mitochondrial and nuclear markers link a new green toad from Sicily to African relatives. BMC Evolutionary Biology, 8: 56.", type: "phylogeny" },
            { citation: "Kuzmin, S.L. (1999). The Amphibians of the Former Soviet Union. Pensoft, Sofia-Moscow, 538 pp.", type: "review" },
            { citation: "Bogdanov, O.P. (1960). Fauna of the Uzbek SSR. Vol. 1. Amphibians and Reptiles. Tashkent: Izd. AN UzSSR. [In Russian]", type: "regional" },
            { citation: "Martin, T. et al. (2017). The herpetofauna of central Uzbekistan. Amphibian & Reptile Conservation, 11(1): 93-107.", type: "regional" }
        ],
        notes: "Common and adaptable species. Taxonomy complex - includes multiple cryptic lineages in Central Asia. Recent studies suggest some Uzbekistan populations may align with B. perrini or hybrids.",
        researchPlans: "Molecular survey to clarify species boundaries between B. viridis, B. pewzowi, and B. sitibundus in Uzbekistan; hybridization and introgression analysis"
    },
    {
        scientificName: "Bufotes pewzowi",
        commonName: "Xinjiang toad",
        russianName: "Жаба Певцова",
        uzbekName: "Ўрта осиё қурбақаси",
        class: "Amphibia",
        order: "Anura",
        family: "Bufonidae",
        subfamily: null,
        subspecies: null,
        description: "Medium to large toad (60-100 mm SVL), tetraploid species. Similar to B. viridis but typically larger with bolder green markings and a more robust build. Skin coarsely warty. Distinguished from B. viridis by call differences (slower pulse rate), larger genome size, and distinct mitochondrial lineage. Active from March to October.",
        distribution: "Eastern and northern Uzbekistan; Fergana Valley. Also found in Kazakhstan, Kyrgyzstan, China",
        habitat: "Desert and semi-desert areas near water bodies, temporary pools, irrigation systems. Breeds in spring",
        iucnStatus: "LC",
        nationalStatus: "",
        cites: "",
        endemism: "UZ, KZ,KG,MN,CN",
        regions: { Andijan: true, Fergana: true, Namangan: true, Tashkent: true, Syrdarya: true, Jizzak: true, Samarkand: true, Kashkadarya: true, Surkhandarya: false, Bukhara: false, Navoi: false, Khorezm: false, Karakalpakstan: false },
        coordinates: { lat: 40.8, lng: 71.5 },
        ncbiData: [
            { type: "Nucleotide", url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Bufotes+pewzowi" }
        ],
        publications: [
            { citation: "Stöck, M., Steinlein, C., Lamatsch, D.K. et al. (2001). Multiple origins of polyploidy in the green toad, Bufo viridis complex. Cytogenetic and Genome Research, 92: 331-334.", type: "taxonomy" },
            { citation: "Stöck, M. et al. (2006). Evolution of mitochondrial relationships and biogeography of Palearctic green toads. Molecular Phylogenetics and Evolution, 41: 663-689.", type: "phylogeny" },
            { citation: "Bogdanov, O.P. (1960). Fauna of the Uzbek SSR. Vol. 1. Amphibians and Reptiles. Tashkent. [In Russian]", type: "regional" }
        ],
        notes: "Previously considered subspecies of B. viridis; elevated to species based on molecular data. Vocalization differs from B. viridis. Tetraploid lineage with hybrid origins.",
        researchPlans: "Acoustic analysis; distribution mapping; hybridization studies with B. viridis and B. perrini; assessment of polyploidy effects on adaptation"
    },
    {
        scientificName: "Bufotes perrini",
        commonName: "Perrin's Green Toad",
        russianName: "Жаба Перрини",
        uzbekName: "-",
        class: "Amphibia",
        order: "Anura",
        family: "Bufonidae",
        subfamily: null,
        subspecies: null,
        description: "Medium-sized toad (50-80 mm SVL), diploid. Green blotches on pale background, generally with less contrast than B. viridis. Distinguished by mitochondrial and nuclear DNA markers. Ecology similar to other Bufotes but adapted to drier, southern habitats. Used as bioindicator for heavy metal contamination in some studies.",
        distribution: "Southern Uzbekistan, particularly around Samarkand and Bukhara regions",
        habitat: "Desert areas near water sources, foothills, rocky areas",
        iucnStatus: "LC",
        nationalStatus: "",
        cites: "",
        endemism: "UZ, KZ, TM",
        regions: { Andijan: false, Fergana: false, Namangan: false, Tashkent: false, Syrdarya: false, Jizzak: false, Samarkand: false, Kashkadarya: false, Surkhandarya: false, Bukhara: true, Navoi: true, Khorezm: false, Karakalpakstan: true },
        coordinates: { lat: 39.6, lng: 66.9 },
        ncbiData: [
            { type: "Nucleotide", url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Bufotes+perrini" }
        ],
        publications: [
            { citation: "Stöck, M. et al. (2013). Cryptic diversity among Western Palearctic tree frogs: postglacial range expansion, hybridization, and nomenclature. Systematics and Biodiversity, 11: 1-23.", type: "taxonomy" },
            { citation: "Colliard, C. et al. (2010). Strong reproductive barriers in a narrow hybrid zone of West-Mediterranean green toads. BMC Evolutionary Biology, 10: 232.", type: "phylogeny" },
            { citation: "Kidov, A.A. et al. (2014). On the influence of heavy metals on background amphibian species. Samarskaya Luka: Problemy Regional'noi i Global'noi Ekologii, 23(2): 146-152. [In Russian]", type: "ecology" }
        ],
        notes: "Recently described species, separated from B. sitibundus. Diploid lineage with potential introgression from B. sitibundus in western populations. Used as bioindicator for heavy metal pollution.",
        researchPlans: "Genetic diversity and distribution mapping in southern Uzbekistan; studies on use as bioindicator for environmental pollution; parasite biodiversity surveys; conservation status assessment recommending Near Threatened due to habitat threats"
    },
    {
        scientificName: "Bufotes sitibundus",
        commonName: "Turan Toad",
        russianName: "",
        uzbekName: "",
        class: "Amphibia",
        order: "Anura",
        family: "Bufonidae",
        subfamily: null,
        subspecies: null,
        description: "Medium-sized toad (55-85 mm SVL), diploid. Similar morphology to other Bufotes but with a distinct mitochondrial lineage placing it closer to Middle Eastern populations. Green blotches on lighter background, sometimes with reddish warts. Breeds in shallow water bodies in spring.",
        distribution: "Southern regions of Uzbekistan; Surkhandarya province",
        habitat: "Rocky foothills, mountain valleys, near streams",
        iucnStatus: "LC",
        nationalStatus: "",
        cites: "",
        endemism: "",
        regions: { Andijan: false, Fergana: false, Namangan: false, Tashkent: false, Syrdarya: false, Jizzak: false, Samarkand: false, Kashkadarya: false, Surkhandarya: false, Bukhara: false, Navoi: false, Khorezm: false, Karakalpakstan: true },
        coordinates: { lat: 37.9, lng: 67.6 },
        ncbiData: [
            { type: "Nucleotide", url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Bufotes+sitibundus" }
        ],
        publications: [
            { citation: "Stöck, M. et al. (2006). Evolution of mitochondrial relationships and biogeography of Palearctic green toads. Molecular Phylogenetics and Evolution, 41: 663-689.", type: "phylogeny" },
            { citation: "Dufresnes, C. et al. (2019). Phylogeography of a cryptic speciation continuum in Eurasian spadefoot toads (Pelobates). Molecular Ecology, 28(13): 3257-3270.", type: "phylogeny", note: "Context for Central Asian anuran phylogeography" },
            { citation: "Bogdanov, O.P. (1960). Fauna of the Uzbek SSR. Vol. 1. Amphibians and Reptiles. Tashkent. [In Russian]", type: "regional" }
        ],
        notes: "Part of the viridis species complex. Recent phylogeny places it in Middle East lineages, with overlaps in Uzbekistan. Potential hybridization zones with B. perrini.",
        researchPlans: "Phylogeographic analysis to clarify boundaries with B. perrini and B. turanensis; habitat modeling for mountain populations; impact of aridification on distribution"
    },
    {
        scientificName: "Bufotes turanensis",
        commonName: "Turan toad",
        russianName: "Туранская жаба",
        uzbekName: "-",
        class: "Amphibia",
        order: "Anura",
        family: "Bufonidae",
        subfamily: null,
        subspecies: null,
        description: "",
        distribution: "Kashkadarya, Surkhandarya, Bukhara, Khorezm, Karakalpakstan",
        habitat: "",
        iucnStatus: "",
        nationalStatus: "",
        cites: "",
        endemism: "UZ, TM, IR, AF",
        regions: { Andijan: false, Fergana: false, Namangan: false, Tashkent: false, Syrdarya: false, Jizzak: false, Samarkand: false, Kashkadarya: true, Surkhandarya: true, Bukhara: true, Navoi: false, Khorezm: true, Karakalpakstan: true },
        coordinates: { lat: 40.0, lng: 65.0 },
        ncbiData: [
            { type: "Nucleotide", url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Bufotes+turanensis" }
        ],
        publications: [],
        notes: "",
        researchPlans: ""
    },
    {
        scientificName: "Pelophylax ridibundus",
        commonName: "Eurasian marsh frog",
        russianName: "Озерная лягушка",
        uzbekName: "Кўл бақаси",
        class: "Amphibia",
        order: "Anura",
        family: "Ranidae",
        subfamily: null,
        subspecies: null,
        description: "Large frog (up to 150 mm SVL), the largest native frog in Central Asia. Dorsal coloration green to olive-brown with dark spots; a pale green mid-dorsal stripe often present. Tympanum large, nearly equal to eye diameter. Hind legs long with extensive webbing. Extremely aquatic; rarely found far from water. Loud, distinctive laughing call.",
        distribution: "Throughout Uzbekistan wherever permanent water bodies exist; common in Tashkent, along rivers, lakes, and reservoirs",
        habitat: "Permanent water bodies: lakes, ponds, rivers, canals, reservoirs. Most aquatic frog in Central Asia",
        iucnStatus: "LC",
        nationalStatus: "",
        cites: "",
        endemism: "",
        regions: { Andijan: true, Fergana: true, Namangan: true, Tashkent: true, Syrdarya: true, Jizzak: true, Samarkand: true, Kashkadarya: true, Surkhandarya: true, Bukhara: true, Navoi: true, Khorezm: true, Karakalpakstan: true },
        coordinates: { lat: 41.3, lng: 69.2 },
        ncbiData: [
            { type: "Nucleotide", url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Pelophylax+ridibundus" },
            { type: "Genome", url: "https://www.ncbi.nlm.nih.gov/genome/?term=Pelophylax+ridibundus" }
        ],
        publications: [
            { citation: "Plötner, J. (2005). Die westpaläarktischen Wasserfrösche. Bielefeld: Laurenti-Verlag, 160 pp.", type: "review" },
            { citation: "Kuzmin, S.L. (1999). The Amphibians of the Former Soviet Union. Pensoft, Sofia-Moscow, 538 pp.", type: "review" },
            { citation: "Bogdanov, O.P. (1960). Fauna of the Uzbek SSR. Vol. 1. Amphibians and Reptiles. Tashkent. [In Russian]", type: "regional" },
            { citation: "Martin, T. et al. (2017). The herpetofauna of central Uzbekistan. Amphibian & Reptile Conservation, 11(1): 93-107.", type: "regional" }
        ],
        notes: "Very common. Can form hybrid complexes with other Pelophylax species. Important component of aquatic ecosystems",
        researchPlans: "Survey of genetic diversity; potential hybridization with other Central Asian water frogs; parasite biodiversity and role in aquatic ecosystems"
    },
    {
        scientificName: "Pelophylax terentievi",
        commonName: "Terentjev's Frog",
        russianName: "Лягушка Терентьева",
        uzbekName: "Терентьев бақаси",
        class: "Amphibia",
        order: "Anura",
        family: "Ranidae",
        subfamily: null,
        subspecies: null,
        description: "",
        distribution: "Surkhandarya",
        habitat: "",
        iucnStatus: "LC",
        nationalStatus: "",
        cites: "",
        endemism: "UZ, TJ, AF",
        regions: { Andijan: false, Fergana: false, Namangan: false, Tashkent: false, Syrdarya: false, Jizzak: false, Samarkand: false, Kashkadarya: false, Surkhandarya: true, Bukhara: false, Navoi: false, Khorezm: false, Karakalpakstan: false },
        coordinates: { lat: 40.0, lng: 65.0 },
        ncbiData: [
            { type: "Nucleotide", url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Pelophylax+terentievi" }
        ],
        publications: [],
        notes: "",
        researchPlans: ""
    },
    {
        scientificName: "Testudo horsfieldii",
        commonName: "Central Asian tortoise",
        russianName: "Среднеазиатская черепаха",
        uzbekName: "Ўрта Осиё чўл тошбақаси",
        class: "Reptilia",
        order: "Testudines",
        family: "Testudinidae",
        subfamily: null,
        subspecies: [
            { name: "T. h. horsfieldii", range: "Eastern part of range including eastern Uzbekistan" },
            { name: "T. h. rustamovi", range: "Kopet-Dag region, may extend into southwestern Uzbekistan" },
            { name: "T. h. kazachstanica", range: "Northern populations, Kazakhstan, northern Uzbekistan" }
        ],
        description: "Small to medium tortoise (carapace length 150-250 mm). Carapace rounded, yellow-brown with dark blotches on each scute. Four toes on each foot (unique among tortoises). Shell relatively flattened. Active only 3-4 months per year — hibernates in winter, aestivates in summer. Herbivorous, feeding on grasses, forbs, and flowers. Can live over 40 years.",
        distribution: "Throughout Uzbekistan; one of the most common reptiles. Found in deserts, semi-deserts, foothills, and agricultural areas",
        habitat: "Desert, semi-desert, steppe grassland, agricultural areas. Found from lowlands up to 2000m elevation. Hibernates in winter, aestivates in hot summer",
        iucnStatus: "VU",
        nationalStatus: "2(VU)",
        cites: "II",
        endemism: "UZ, TJ, TM, KZ, KG,  IR, AF, CN, PK",
        regions: { Andijan: true, Fergana: true, Namangan: true, Tashkent: false, Syrdarya: true, Jizzak: true, Samarkand: true, Kashkadarya: true, Surkhandarya: true, Bukhara: true, Navoi: true, Khorezm: true, Karakalpakstan: true },
        coordinates: { lat: 40.5, lng: 64.5 },
        ncbiData: [
            { type: "Nucleotide (COI)", url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Testudo+horsfieldii+COI" },
            { type: "Nucleotide (16S)", url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Testudo+horsfieldii+16S" }
        ],
        publications: [
            { citation: "Bonin, F., Devaux, B. & Dupré, A. (2006). Turtles of the World. Johns Hopkins University Press.", type: "review" },
            { citation: "Fritz, U. & Bininda-Emonds, O.R.P. (2007). When genes meet nomenclature: Tortoise phylogeny and the existence of Testudo horsfieldii. Molecular Phylogenetics and Evolution, 45: 706-715.", type: "phylogeny" },
            { citation: "Lagarde, F. et al. (2001). Foraging behaviour and diet of an ectothermic herbivore: Testudo horsfieldi. Ecography, 24: 236-242.", type: "ecology" },
            { citation: "Bogdanov, O.P. (1960). Fauna of the Uzbek SSR. Vol. 1. Amphibians and Reptiles. Tashkent. [In Russian]", type: "regional" },
            { citation: "Brushko, Z.K. & Kubykin, R.A. (2001). Amphibians and reptiles of Uzbekistan: a complete checklist. Russian Journal of Herpetology, 8(1): 75-83.", type: "checklist" },
            { citation: "Red Book of the Republic of Uzbekistan. Vol. II. Animals. (2019). 3rd edition. Tashkent. [In Russian/Uzbek]", type: "conservation" }
        ],
        notes: "Heavily impacted by illegal collection for pet trade. Population declining despite legal protection. Important herbivore in desert ecosystems",
        researchPlans: "Population genetic study across Uzbekistan; phylogeography of Central Asian populations; conservation genetics for management; pet trade impact assessments"
    },
    {
        scientificName: "Alsophylax laevis",
        commonName: "Southern Even-fingered Gecko",
        russianName: "Гладкий геккончик",
        uzbekName: "Силлиқ гекконча",
        class: "Reptilia",
        order: "Squamata",
        family: "Gekkonidae",
        subfamily: null,
        subspecies: null,
        description: "",
        distribution: "Fergana, Namangan, Surkhandarya, Bukhara, Navoi",
        habitat: "",
        iucnStatus: "CR",
        nationalStatus: "2(VU:D)",
        cites: "",
        endemism: "UZ, TM",
        regions: { Andijan: false, Fergana: true, Namangan: true, Tashkent: false, Syrdarya: false, Jizzak: false, Samarkand: false, Kashkadarya: false, Surkhandarya: true, Bukhara: true, Navoi: true, Khorezm: false, Karakalpakstan: false },
        coordinates: { lat: 40.0, lng: 65.0 },
        ncbiData: [
            { type: "Nucleotide", url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Alsophylax+laevis" }
        ],
        publications: [],
        notes: "",
        researchPlans: ""
    },
    {
        scientificName: "Alsophylax ferganensis",
        commonName: "Fergana Even-fingered Gecko",
        russianName: "Ферганский геккончик",
        uzbekName: "Фаргона геккончаси",
        class: "Reptilia",
        order: "Squamata",
        family: "Gekkonidae",
        subfamily: null,
        subspecies: null,
        description: "",
        distribution: "Fergana",
        habitat: "",
        iucnStatus: "",
        nationalStatus: "",
        cites: "",
        endemism: "UZ",
        regions: { Andijan: false, Fergana: true, Namangan: false, Tashkent: false, Syrdarya: false, Jizzak: false, Samarkand: false, Kashkadarya: false, Surkhandarya: false, Bukhara: false, Navoi: false, Khorezm: false, Karakalpakstan: false },
        coordinates: { lat: 40.0, lng: 65.0 },
        ncbiData: [
            { type: "Nucleotide", url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Alsophylax+ferganensis" }
        ],
        publications: [],
        notes: "",
        researchPlans: ""
    },
    {
        scientificName: "Alsophylax emilia",
        commonName: "Emilia’s Even-fingered Gecko",
        russianName: "Геккончик Эмилии",
        uzbekName: "Эмилия геккончаси",
        class: "Reptilia",
        order: "Squamata",
        family: "Gekkonidae",
        subfamily: null,
        subspecies: null,
        description: "",
        distribution: "Namangan",
        habitat: "",
        iucnStatus: "",
        nationalStatus: "",
        cites: "",
        endemism: "UZ",
        regions: { Andijan: false, Fergana: false, Namangan: true, Tashkent: false, Syrdarya: false, Jizzak: false, Samarkand: false, Kashkadarya: false, Surkhandarya: false, Bukhara: false, Navoi: false, Khorezm: false, Karakalpakstan: false },
        coordinates: { lat: 40.0, lng: 65.0 },
        ncbiData: [
            { type: "Nucleotide", url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Alsophylax+emilia" }
        ],
        publications: [],
        notes: "",
        researchPlans: ""
    },
    {
        scientificName: "Alsophylax loricatus",
        commonName: "Strauch’s Even-fingered Gecko",
        russianName: "Панцирный геккончик",
        uzbekName: "Қалқонли гекконча",
        class: "Reptilia",
        order: "Squamata",
        family: "Gekkonidae",
        subfamily: null,
        subspecies: null,
        description: "Small gecko (SVL 30-40 mm) with relatively uniform granular dorsal scales and small tubercles. Pale grey-brown with darker transverse spots or bars. Digits without expanded pads. Nocturnal, living under rocks and in crevices. Among the least studied geckos in the region.",
        distribution: "Eastern Uzbekistan; Fergana Valley and adjacent areas",
        habitat: "Rocky and clay slopes in foothills",
        iucnStatus: "VU",
        nationalStatus: "1(EN)",
        cites: "",
        endemism: "UZ, TJ",
        regions: { Andijan: false, Fergana: true, Namangan: false, Tashkent: false, Syrdarya: false, Jizzak: false, Samarkand: false, Kashkadarya: false, Surkhandarya: false, Bukhara: false, Navoi: false, Khorezm: false, Karakalpakstan: false },
        coordinates: { lat: 40.8, lng: 71.0 },
        ncbiData: [
            { type: "Nucleotide", url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Alsophylax+loricatus" }
        ],
        publications: [
            { citation: "Ananjeva, N.B. et al. (2006). Reptiles of Central Asia: A Field Guide. Pensoft Publishers.", type: "review" },
            { citation: "Bogdanov, O.P. (1960). Fauna of the Uzbek SSR. Vol. 1. Tashkent. [In Russian]", type: "regional" }
        ],
        notes: "Uncommon species with limited distribution in eastern Uzbekistan",
        researchPlans: "Distribution surveys; genetic identity verification; habitat characterization"
    },
    {
        scientificName: "Alsophylax szczerbaki",
        commonName: "Szczerbak’s Even-fingered Gecko",
        russianName: "Панцирный геккончик Щербака",
        uzbekName: "Шчербак Қалқонли гекконча",
        class: "Reptilia",
        order: "Squamata",
        family: "Gekkonidae",
        subfamily: null,
        subspecies: null,
        description: "",
        distribution: "Khorezm, Karakalpakstan",
        habitat: "",
        iucnStatus: "VU",
        nationalStatus: "1(EN)",
        cites: "",
        endemism: "UZ, TM",
        regions: { Andijan: false, Fergana: false, Namangan: false, Tashkent: false, Syrdarya: false, Jizzak: false, Samarkand: false, Kashkadarya: false, Surkhandarya: false, Bukhara: false, Navoi: false, Khorezm: true, Karakalpakstan: true },
        coordinates: { lat: 40.0, lng: 65.0 },
        ncbiData: [
            { type: "Nucleotide", url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Alsophylax+szczerbaki" }
        ],
        publications: [],
        notes: "",
        researchPlans: ""
    },
    {
        scientificName: "Alsophylax pipiens",
        commonName: "Caspian Even-fingered Gecko",
        russianName: "Пискливый геккончик",
        uzbekName: "Чийилдоқ гекконча",
        class: "Reptilia",
        order: "Squamata",
        family: "Gekkonidae",
        subfamily: null,
        subspecies: null,
        description: "",
        distribution: "Karakalpakstan",
        habitat: "",
        iucnStatus: "LC",
        nationalStatus: "",
        cites: "",
        endemism: "",
        regions: { Andijan: false, Fergana: false, Namangan: false, Tashkent: false, Syrdarya: false, Jizzak: false, Samarkand: false, Kashkadarya: false, Surkhandarya: false, Bukhara: false, Navoi: false, Khorezm: false, Karakalpakstan: true },
        coordinates: { lat: 40.0, lng: 65.0 },
        ncbiData: [
            { type: "Nucleotide", url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Alsophylax+pipiens" }
        ],
        publications: [],
        notes: "",
        researchPlans: ""
    },
    {
        scientificName: "Crossobamon eversmanni",
        commonName: "Comb-toed Gecko",
        russianName: "Гребнепалый геккон Эверсманна",
        uzbekName: "Тароқ бармоқли геккон",
        class: "Reptilia",
        order: "Squamata",
        family: "Gekkonidae",
        subfamily: null,
        subspecies: null,
        description: "Small gecko (SVL 35-50 mm) with distinctive comb-like fringes on toes — elongated lateral scales forming a rake-like structure for sand locomotion. Eyes very large with vertical pupils. Pale sandy coloration with faint darker markings. Strictly nocturnal and fossorial, living in deep burrows in sandy substrates.",
        distribution: "Desert regions of Uzbekistan",
        habitat: "Sandy and clay deserts. Nocturnal",
        iucnStatus: "LC",
        nationalStatus: "",
        cites: "",
        endemism: "UZ, TJ, TM, KZ, IR, AF",
        regions: { Andijan: false, Fergana: false, Namangan: false, Tashkent: false, Syrdarya: false, Jizzak: true, Samarkand: false, Kashkadarya: true, Surkhandarya: true, Bukhara: true, Navoi: true, Khorezm: true, Karakalpakstan: true },
        coordinates: { lat: 40.5, lng: 62.0 },
        ncbiData: [
            { type: "Nucleotide", url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Crossobamon+eversmanni" }
        ],
        publications: [
            { citation: "Ananjeva, N.B. et al. (2006). Reptiles of Central Asia: A Field Guide. Pensoft Publishers.", type: "review" },
            { citation: "Bogdanov, O.P. (1960). Fauna of the Uzbek SSR. Vol. 1. Tashkent. [In Russian]", type: "regional" },
            { citation: "Shcherbak, N.N. (1993). The Herpetofauna of Central Asia. Proceedings ZIN RAS, 246.", type: "regional" }
        ],
        notes: "Named for the comb-like structures on toes. Specialized for sand locomotion",
        researchPlans: "Functional morphology of toe fringes; population genetics; nocturnal ecology surveys"
    },
    {
        scientificName: "Tenuidactylus caspius",
        commonName: "Caspian Bent-Toed Gecko",
        russianName: "Тонкопалый каспийский геккон",
        uzbekName: "Каспий геккони",
        class: "Reptilia",
        order: "Squamata",
        family: "Gekkonidae",
        subfamily: null,
        subspecies: [
            { name: "Tenuidactylus caspius caspius", range: "Kashkadarya, Surkhandarya, Bukhara, Navoi, Khorezm, Karakalpakstan" }
        ],
        description: "",
        distribution: "Kashkadarya, Surkhandarya, Bukhara, Navoi, Khorezm, Karakalpakstan",
        habitat: "",
        iucnStatus: "LC",
        nationalStatus: "",
        cites: "",
        endemism: "",
        regions: { Andijan: false, Fergana: false, Namangan: false, Tashkent: false, Syrdarya: false, Jizzak: false, Samarkand: false, Kashkadarya: true, Surkhandarya: true, Bukhara: true, Navoi: true, Khorezm: true, Karakalpakstan: true },
        coordinates: { lat: 40.0, lng: 65.0 },
        ncbiData: [
            { type: "Nucleotide", url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Tenuidactylus+caspius" }
        ],
        publications: [],
        notes: "",
        researchPlans: ""
    },
    {
        scientificName: "Tenuidactylus fedtschenkoi",
        commonName: "Turkestan Thin-Toed Gecko",
        russianName: "Тонкопалый туркестанский геккон",
        uzbekName: "Туркестон геккони",
        class: "Reptilia",
        order: "Squamata",
        family: "Gekkonidae",
        subfamily: null,
        subspecies: null,
        description: "Small gecko (SVL 35-45 mm) with slender digits bearing narrow lamellae. Body covered with granular dorsal scales and scattered tubercles. Pale grey-brown with darker transverse bands. Nocturnal, primarily rupiculous but also found on trees and man-made structures. An important predator of small arthropods.",
        distribution: "Throughout Uzbekistan in suitable rocky habitat",
        habitat: "Rocky areas, cliffs, saxaul forests, ruins. Nocturnal",
        iucnStatus: "LC",
        nationalStatus: "",
        cites: "",
        endemism: "UZ, TJ, TM, KZ, AF",
        regions: { Andijan: false, Fergana: false, Namangan: false, Tashkent: false, Syrdarya: false, Jizzak: true, Samarkand: true, Kashkadarya: true, Surkhandarya: false, Bukhara: true, Navoi: true, Khorezm: false, Karakalpakstan: false },
        coordinates: { lat: 40.0, lng: 66.0 },
        ncbiData: [
            { type: "Nucleotide", url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Tenuidactylus+fedtschenkoi" }
        ],
        publications: [
            { citation: "Nazarov, R.A. et al. (2013). Molecular phylogeny of the genus Tenuidactylus. Molecular Phylogenetics and Evolution, 69: 509-517.", type: "phylogeny" },
            { citation: "Ananjeva, N.B. et al. (2006). Reptiles of Central Asia: A Field Guide. Pensoft Publishers.", type: "review" },
            { citation: "Bogdanov, O.P. (1960). Fauna of the Uzbek SSR. Vol. 1. Tashkent. [In Russian]", type: "regional" }
        ],
        notes: "Common gecko species. Important predator of invertebrates",
        researchPlans: "Molecular phylogeography; ecological role assessment in desert ecosystems"
    },
    {
        scientificName: "Tenuidactylus bogdanovi",
        commonName: "Bogdanov’s Thin-Toed Gecko",
        russianName: "Тонкопалый геккон Богданова",
        uzbekName: "Богданов геккони",
        class: "Reptilia",
        order: "Squamata",
        family: "Gekkonidae",
        subfamily: null,
        subspecies: null,
        description: "",
        distribution: "Tashkent, Kashkadarya, Surkhandarya",
        habitat: "",
        iucnStatus: "LC",
        nationalStatus: "",
        cites: "",
        endemism: "UZ, TJ, TM",
        regions: { Andijan: false, Fergana: false, Namangan: false, Tashkent: true, Syrdarya: false, Jizzak: false, Samarkand: false, Kashkadarya: true, Surkhandarya: true, Bukhara: false, Navoi: false, Khorezm: false, Karakalpakstan: false },
        coordinates: { lat: 40.0, lng: 65.0 },
        ncbiData: [
            { type: "Nucleotide", url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Tenuidactylus+bogdanovi" }
        ],
        publications: [],
        notes: "",
        researchPlans: ""
    },
    {
        scientificName: "Mediodactylus russowi",
        commonName: "Transcaspian Bent-Toed Gecko",
        russianName: "Серый геккон",
        uzbekName: "Кул ранг геккон",
        class: "Reptilia",
        order: "Squamata",
        family: "Gekkonidae",
        subfamily: null,
        subspecies: null,
        description: "Small gecko (SVL 35-45 mm) with flattened body suited for crevice life. Dorsal surface with small granular scales interspersed with larger tubercles. Beige-grey with dark transverse bands or spots. Digits with undivided lamellae, characteristic of bent-toed geckos. Nocturnal, commonly found on walls and rocks. Feeds on insects and spiders.",
        distribution: "Southern and western Uzbekistan; rocky areas",
        habitat: "Rocky slopes, cliffs, old buildings. Nocturnal",
        iucnStatus: "LC",
        nationalStatus: "",
        cites: "",
        endemism: "UZ, TJ, TM, KZ, KG,  IR, RU",
        regions: { Andijan: true, Fergana: true, Namangan: true, Tashkent: true, Syrdarya: true, Jizzak: true, Samarkand: false, Kashkadarya: false, Surkhandarya: false, Bukhara: true, Navoi: true, Khorezm: true, Karakalpakstan: true },
        coordinates: { lat: 39.5, lng: 66.0 },
        ncbiData: [
            { type: "Nucleotide", url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Mediodactylus+russowii" }
        ],
        publications: [
            { citation: "Bauer, A.M. et al. (2013). Revision of Cyrtopodion (Squamata: Gekkonidae) in Central Asia. Zootaxa, 3599: 1-68.", type: "taxonomy" },
            { citation: "Ananjeva, N.B. et al. (2006). Reptiles of Central Asia: A Field Guide. Pensoft Publishers.", type: "review" },
            { citation: "Bogdanov, O.P. (1960). Fauna of the Uzbek SSR. Vol. 1. Tashkent. [In Russian]", type: "regional" }
        ],
        notes: "Common in rocky habitats. Often found in human structures",
        researchPlans: "Genetic diversity assessment; synanthropic habitat use studies"
    },
    {
        scientificName: "Teratoscincus scincus",
        commonName: "Common Wonder Gecko",
        russianName: "Сцинковый геккон",
        uzbekName: "Сцинк геккони",
        class: "Reptilia",
        order: "Squamata",
        family: "Sphaerodactylidae",
        subfamily: null,
        subspecies: [
            { name: "T. s. scincus", range: "Western and central Uzbekistan, Kyzylkum" },
            { name: "T. s. rustamowi", range: "Fergana Valley (sometimes treated as full species T. rustamowi)" }
        ],
        description: "Large gecko (SVL 60-80 mm) with remarkable fish-like plate scales covering the body and tail. Head large with enormous eyes (no eyelids). Scales detach easily as a predator-escape mechanism. Strictly nocturnal; lives in deep burrows. Produces loud squeaking vocalizations. Toes without adhesive pads, adapted for sand locomotion.",
        distribution: "Sandy deserts throughout Uzbekistan; particularly in Kyzylkum Desert",
        habitat: "Sandy deserts with vegetation. Strictly nocturnal. Lives in burrows",
        iucnStatus: "LC",
        nationalStatus: "",
        cites: "",
        endemism: "UZ, TJ, TM, KG, IR,CN",
        regions: { Andijan: false, Fergana: false, Namangan: false, Tashkent: false, Syrdarya: false, Jizzak: true, Samarkand: false, Kashkadarya: true, Surkhandarya: true, Bukhara: true, Navoi: true, Khorezm: true, Karakalpakstan: true },
        coordinates: { lat: 41.5, lng: 63.0 },
        ncbiData: [
            { type: "Nucleotide", url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Teratoscincus+scincus" }
        ],
        publications: [
            { citation: "Nazarov, R.A., Poyarkov, N.A. et al. (2012). Taxonomic revision of the genus Teratoscincus Strauch, 1863 with description of a new species. Zootaxa, 3351: 1-30.", type: "taxonomy" },
            { citation: "Ananjeva, N.B. et al. (2006). Reptiles of Central Asia: A Field Guide. Pensoft Publishers.", type: "review" },
            { citation: "Bogdanov, O.P. (1960). Fauna of the Uzbek SSR. Vol. 1. Tashkent. [In Russian]", type: "regional" }
        ],
        notes: "Remarkable species with large fish-like scales that fall off easily. Loud vocalizations. Endemic to Central Asia",
        researchPlans: "Ecological study; vocalization analysis; phylogeography across Central Asian deserts"
    },
    {
        scientificName: "Teratoscincus rustamowi",
        commonName: "Rusramov's Wonder Gecko",
        russianName: "Сцинковый геккон Рустамова",
        uzbekName: "Рустамов сцинк геккони",
        class: "Reptilia",
        order: "Squamata",
        family: "Sphaerodactylidae",
        subfamily: null,
        subspecies: null,
        description: "Medium-sized gecko (SVL 50-65 mm) similar to T. scincus but smaller with diagnostic differences in scale counts, toe lamellae, and coloration. Plate-like scales present but slightly smaller. Strictly nocturnal, burrowing. Extremely range-restricted, making it one of Uzbekistan's most vulnerable reptiles.",
        distribution: "Fergana Valley; very limited range",
        habitat: "Sandy areas in valleys",
        iucnStatus: "EN",
        nationalStatus: "1(EN)",
        cites: "",
        endemism: "UZ, TJ,",
        regions: { Andijan: true, Fergana: true, Namangan: true, Tashkent: false, Syrdarya: false, Jizzak: false, Samarkand: false, Kashkadarya: false, Surkhandarya: false, Bukhara: false, Navoi: false, Khorezm: false, Karakalpakstan: false },
        coordinates: { lat: 40.6, lng: 71.8 },
        ncbiData: [
            { type: "Nucleotide", url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Teratoscincus+rustamowi" }
        ],
        publications: [
            { citation: "Nazarov, R.A. et al. (2012). Taxonomic revision of Teratoscincus. Zootaxa, 3351: 1-30.", type: "taxonomy" },
            { citation: "Red Book of the Republic of Uzbekistan. Vol. II. Animals. (2019). 3rd edition. Tashkent.", type: "conservation" },
            { citation: "Zakirova, N. et al. (2024). Species composition of Reptilia in Fergana Valley. EJARE.", type: "regional" }
        ],
        notes: "Very rare endemic species with extremely limited range. Critically threatened by habitat loss",
        researchPlans: "Urgent conservation needs assessment; population surveys; habitat protection"
    },
    {
        scientificName: "Paralaudakia bochariensis",
        commonName: "Bucharian Rock Agama",
        russianName: "Стеллион бухарский",
        uzbekName: "Бухоро тоғ агамаси",
        class: "Reptilia",
        order: "Squamata",
        family: "Agamidae",
        subfamily: null,
        subspecies: null,
        description: "Large rock-dwelling agamid (SVL to 140 mm). Robust body with strongly keeled dorsal scales. Grey-brown coloration with darker cross-bars and spots. Males develop yellowish-orange markings on throat and sides during breeding. Distinguished from Laudakia by molecular phylogenetics. Thermoregulates on exposed rock surfaces.",
        distribution: "Southern Uzbekistan; Bukhara and Surkhandarya regions",
        habitat: "Rocky areas in foothills and low mountains",
        iucnStatus: "LC",
        nationalStatus: "",
        cites: "",
        endemism: "UZ, TJ, KG, TM",
        regions: { Andijan: false, Fergana: false, Namangan: false, Tashkent: false, Syrdarya: false, Jizzak: false, Samarkand: false, Kashkadarya: true, Surkhandarya: true, Bukhara: false, Navoi: false, Khorezm: false, Karakalpakstan: false },
        coordinates: { lat: 39.0, lng: 66.8 },
        ncbiData: [
            { type: "Nucleotide", url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Paralaudakia+bochariensis" }
        ],
        publications: [
            { citation: "Baig, K.J. et al. (2012). A morphology-based taxonomic revision of Laudakia Gray, 1845 (Squamata: Agamidae). Vertebrate Zoology, 62(2): 213-260.", type: "taxonomy" },
            { citation: "Ananjeva, N.B. et al. (2006). Reptiles of Central Asia: A Field Guide. Pensoft Publishers.", type: "review" },
            { citation: "Bogdanov, O.P. (1960). Fauna of the Uzbek SSR. Vol. 1. Tashkent. [In Russian]", type: "regional" }
        ],
        notes: "Recently separated from Laudakia based on molecular data. Limited distribution in southern regions",
        researchPlans: "Taxonomic revision using molecular and morphological data; population monitoring in rocky habitats; habitat loss assessment"
    },
    {
        scientificName: "Paralaudakia himalayana",
        commonName: "Himalayan Rock Agama",
        russianName: "Гималайский стеллион",
        uzbekName: "Ҳимолой агамаси",
        class: "Reptilia",
        order: "Squamata",
        family: "Agamidae",
        subfamily: null,
        subspecies: null,
        description: "",
        distribution: "Fergana",
        habitat: "",
        iucnStatus: "LC",
        nationalStatus: "",
        cites: "",
        endemism: "UZ, TJ, KG, AF, PK, IN, NP",
        regions: { Andijan: false, Fergana: true, Namangan: false, Tashkent: false, Syrdarya: false, Jizzak: false, Samarkand: false, Kashkadarya: false, Surkhandarya: false, Bukhara: false, Navoi: false, Khorezm: false, Karakalpakstan: false },
        coordinates: { lat: 40.0, lng: 65.0 },
        ncbiData: [
            { type: "Nucleotide", url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Paralaudakia+himalayana" }
        ],
        publications: [],
        notes: "",
        researchPlans: ""
    },
    {
        scientificName: "Paralaudakia lehmanni",
        commonName: "Turkestan Rock Agama",
        russianName: "Туркестанский стеллион",
        uzbekName: "Туркистон агамаси",
        class: "Reptilia",
        order: "Squamata",
        family: "Agamidae",
        subfamily: null,
        subspecies: null,
        description: "Large agamid lizard (SVL up to 150 mm, total length to 400 mm). Dorso-ventrally flattened body adapted for crevice-dwelling. Males with vivid blue throat and flanks during breeding season; females brownish-grey. Rough, spinose scales on back and tail. Excellent climber on vertical rock surfaces. Primarily insectivorous.",
        distribution: "Western Tian Shan mountains; Chimgan, Beldersay, Pskem areas. Endemic to Central Asian mountains",
        habitat: "Rocky mountain slopes, cliffs, stone walls, boulder fields. Found at 1500-3000m elevation",
        iucnStatus: "LC",
        nationalStatus: "",
        cites: "",
        endemism: "UZ, TJ, TM, KG, AF",
        regions: { Andijan: false, Fergana: true, Namangan: false, Tashkent: false, Syrdarya: false, Jizzak: true, Samarkand: true, Kashkadarya: true, Surkhandarya: true, Bukhara: false, Navoi: true, Khorezm: false, Karakalpakstan: false },
        coordinates: { lat: 41.6, lng: 70.0 },
        ncbiData: [
            { type: "Nucleotide", url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Laudakia+lehmanni" }
        ],
        publications: [
            { citation: "Ananjeva, N.B. et al. (2006). Reptiles of Central Asia: A Field Guide. Pensoft Publishers, Sofia-Moscow.", type: "review" },
            { citation: "Barabanov, A.V. & Ananjeva, N.B. (2007). Catalogue of the available scientific species-group names for lizards of the genus Phrynocephalus, Agamidae. Zootaxa, 1512: 1-164.", type: "taxonomy" },
            { citation: "Bogdanov, O.P. (1962). Reptiles of Turkmenistan. Ashkhabad. [In Russian]", type: "regional" },
            { citation: "Martin, T. et al. (2017). The herpetofauna of central Uzbekistan. Amphibian & Reptile Conservation, 11(1): 93-107.", type: "regional" }
        ],
        notes: "Taxonomy requires revision. Relationship to other Laudakia species unclear. Males have brilliant blue coloration during breeding season",
        researchPlans: "Molecular phylogenetics to clarify position within Laudakia complex; population genetics; breeding behavior studies"
    },
    {
        scientificName: "Trapelus sanguinolentus",
        commonName: "Steppe Agama",
        russianName: "Степная агама",
        uzbekName: "Дашт агамаси",
        class: "Reptilia",
        order: "Squamata",
        family: "Agamidae",
        subfamily: null,
        subspecies: [
            { name: "Trapelus sanguinolentus aralensis", range: "Andijan, Fergana, Namangan, Tashkent, Syrdarya, Jizzak, Samarkand, Kashkadarya, Surkhandarya, Bukhara, Navoi, Khorezm, Karakalpakstan" }
        ],
        description: "Medium-sized agamid (SVL 60-90 mm). Body relatively robust with coarsely keeled scales. Coloration variable — grey, olive, or sandy-brown with darker markings. Males develop bright blue throat and dark blue-black dorsum during breeding. Tail longer than body. Strictly terrestrial, often seen basking on elevated objects. Insectivorous, feeds on ants, beetles, and other invertebrates.",
        distribution: "Widespread in desert and steppe zones throughout Uzbekistan",
        habitat: "Clay deserts, semi-deserts, steppe grasslands, agricultural lands. Lowland species",
        iucnStatus: "LC",
        nationalStatus: "",
        cites: "",
        endemism: "",
        regions: { Andijan: true, Fergana: true, Namangan: true, Tashkent: true, Syrdarya: true, Jizzak: true, Samarkand: true, Kashkadarya: true, Surkhandarya: true, Bukhara: true, Navoi: true, Khorezm: true, Karakalpakstan: true },
        coordinates: { lat: 41.0, lng: 64.0 },
        ncbiData: [
            { type: "Nucleotide", url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Trapelus+sanguinolentus" }
        ],
        publications: [
            { citation: "Ananjeva, N.B. et al. (2006). Reptiles of Central Asia: A Field Guide. Pensoft Publishers.", type: "review" },
            { citation: "Shcherbak, N.N. (1993). The Herpetofauna of Central Asia. Proceedings ZIN RAS, 246.", type: "regional" },
            { citation: "Bogdanov, O.P. (1960). Fauna of the Uzbek SSR. Vol. 1. Tashkent. [In Russian]", type: "regional" },
            { citation: "Martin, T. et al. (2017). The herpetofauna of central Uzbekistan. Amphibian & Reptile Conservation, 11(1): 93-107.", type: "regional" }
        ],
        notes: "Common and widespread. Often seen basking on roads. Adaptable to human-modified landscapes",
        researchPlans: "Behavioral studies on thermoregulation and territoriality; distribution in changing steppe environments; genetic connectivity across Uzbekistan"
    },
    {
        scientificName: "Phrynocephalus guttatus",
        commonName: "Spotted Toad-headed Agama",
        russianName: "Круглоголовка-вертихвостка",
        uzbekName: "Гажакдум тўгаракбош",
        class: "Reptilia",
        order: "Squamata",
        family: "Agamidae",
        subfamily: null,
        subspecies: [
            { name: "Phrynocephalus guttatus moltschanovi", range: "Karakalpakstan" },
            { name: "Phrynocephalus guttatus salsatus", range: "Karakalpakstan" }
        ],
        description: "",
        distribution: "Karakalpakstan",
        habitat: "",
        iucnStatus: "LC",
        nationalStatus: "",
        cites: "",
        endemism: "UZ, TM, KZ, RU, CN",
        regions: { Andijan: false, Fergana: false, Namangan: false, Tashkent: false, Syrdarya: false, Jizzak: false, Samarkand: false, Kashkadarya: false, Surkhandarya: false, Bukhara: false, Navoi: false, Khorezm: false, Karakalpakstan: true },
        coordinates: { lat: 40.0, lng: 65.0 },
        ncbiData: [
            { type: "Nucleotide", url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Phrynocephalus+guttatus" }
        ],
        publications: [],
        notes: "",
        researchPlans: ""
    },
    {
        scientificName: "Phrynocephalus helioscopus",
        commonName: "Sunwatcher Toad-headed Agama",
        russianName: "Такырная круглоголовка",
        uzbekName: "Тақир тўгаракбоши",
        class: "Reptilia",
        order: "Squamata",
        family: "Agamidae",
        subfamily: null,
        subspecies: [
            { name: "Phrynocephalus helioscopus helioscopus", range: "Khorezm, Karakalpakstan" },
            { name: "Phrynocephalus helioscopus meridionalis", range: "Kashkadarya, Surkhandarya, Bukhara" },
            { name: "Phrynocephalus helioscopus sergeevi", range: "Syrdarya, Jizzak, Samarkand, Bukhara, Navoi" }
        ],
        description: "Small agamid (SVL 40-60 mm). Flattened body and round head without ear openings. Sandy-grey coloration with fine dark spots forming a reticulated dorsal pattern. Tail with dark ventral bands. Displays remarkable defensive behavior: opens mouth wide revealing bright yellow-orange interior when threatened. Tail curled over back during display. Feeds on ants and small arthropods.",
        distribution: "Northern and central Uzbekistan in sandy and clay deserts",
        habitat: "Sandy and clay deserts, semi-fixed dunes",
        iucnStatus: "LC",
        nationalStatus: "",
        cites: "",
        endemism: "",
        regions: { Andijan: false, Fergana: true, Namangan: true, Tashkent: false, Syrdarya: true, Jizzak: true, Samarkand: true, Kashkadarya: true, Surkhandarya: true, Bukhara: true, Navoi: true, Khorezm: true, Karakalpakstan: true },
        coordinates: { lat: 42.0, lng: 62.0 },
        ncbiData: [
            { type: "Nucleotide", url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Phrynocephalus+helioscopus" }
        ],
        publications: [
            { citation: "Solovyeva, E.N. et al. (2018). Cenozoic aridization in Central Eurasia shaped diversification of toad-headed agamas (Phrynocephalus; Agamidae, Reptilia). PeerJ, 6: e4543.", type: "phylogeny" },
            { citation: "Ananjeva, N.B. et al. (2006). Reptiles of Central Asia: A Field Guide. Pensoft Publishers.", type: "review" },
            { citation: "Shcherbak, N.N. (1993). The Herpetofauna of Central Asia. Proceedings ZIN RAS, 246.", type: "regional" },
            { citation: "Bogdanov, O.P. (1960). Fauna of the Uzbek SSR. Vol. 1. Tashkent. [In Russian]", type: "regional" }
        ],
        notes: "Displays distinctive threat behavior - opens mouth showing bright colors. Common in desert habitats",
        researchPlans: "Behavioral analysis of threat displays; habitat preferences and adaptation to desert conditions; population genetics in northern Uzbekistan"
    },
    {
        scientificName: "Phrynocephalus saidalievi",
        commonName: "Said-Aliev Toad-head Agama",
        russianName: "Круглоголовка Саид-Алиева",
        uzbekName: "Саид-Алиев  тўгаракбоши",
        class: "Reptilia",
        order: "Squamata",
        family: "Agamidae",
        subfamily: null,
        subspecies: [
            { name: "Phrynocephalus saidalievi saidalievi", range: "Fergana" },
            { name: "Phrynocephalus saidalievi orlovae", range: "Namangan" }
        ],
        description: "",
        distribution: "Fergana, Namangan",
        habitat: "",
        iucnStatus: "VU",
        nationalStatus: "1(EN)",
        cites: "",
        endemism: "UZ, TJ, KG",
        regions: { Andijan: false, Fergana: true, Namangan: true, Tashkent: false, Syrdarya: false, Jizzak: false, Samarkand: false, Kashkadarya: false, Surkhandarya: false, Bukhara: false, Navoi: false, Khorezm: false, Karakalpakstan: false },
        coordinates: { lat: 40.0, lng: 65.0 },
        ncbiData: [
            { type: "Nucleotide", url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Phrynocephalus+saidalievi" }
        ],
        publications: [],
        notes: "",
        researchPlans: ""
    },
    {
        scientificName: "Phrynocephalus interscapularis",
        commonName: "Lichtenstein's Toadhead Agama",
        russianName: "Песчаная круглоголовка",
        uzbekName: "Қум тўгаракбоши",
        class: "Reptilia",
        order: "Squamata",
        family: "Agamidae",
        subfamily: null,
        subspecies: null,
        description: "Small psammophilic agamid (SVL 35-50 mm). Sandy coloration with lighter spots, closely matching sand substrate. Fringes of elongated scales on toes for walking on loose sand. Flattened body can bury itself in sand by lateral vibration. Tail relatively short. Insectivorous, feeding on small ants and beetles found among dune vegetation.",
        distribution: "Northwestern Uzbekistan; Karakalpakstan region",
        habitat: "Sandy deserts, dunes",
        iucnStatus: "LC",
        nationalStatus: "",
        cites: "",
        endemism: "UZ, TM, KZ, AF, IR",
        regions: { Andijan: false, Fergana: false, Namangan: false, Tashkent: false, Syrdarya: false, Jizzak: false, Samarkand: false, Kashkadarya: true, Surkhandarya: false, Bukhara: true, Navoi: true, Khorezm: true, Karakalpakstan: true },
        coordinates: { lat: 43.0, lng: 59.0 },
        ncbiData: [
            { type: "Nucleotide", url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Phrynocephalus+interscapularis" }
        ],
        publications: [
            { citation: "Solovyeva, E.N. et al. (2018). Cenozoic aridization in Central Eurasia shaped diversification of toad-headed agamas. PeerJ, 6: e4543.", type: "phylogeny" },
            { citation: "Ananjeva, N.B. et al. (2006). Reptiles of Central Asia: A Field Guide. Pensoft Publishers.", type: "review" },
            { citation: "Bogdanov, O.P. (1960). Fauna of the Uzbek SSR. Vol. 1. Tashkent. [In Russian]", type: "regional" }
        ],
        notes: "Psammophilic species adapted to dune environments. Limited to northwestern deserts",
        researchPlans: "Population surveys in Karakalpakstan; genetic diversity and isolation in dune habitats; impact of desertification"
    },
    {
        scientificName: "Phrynocephalus mystaceus",
        commonName: "Secret Toad-headed Agama",
        russianName: "Ушастая круглоголовка",
        uzbekName: "Қизил қўлоқ калтакесак",
        class: "Reptilia",
        order: "Squamata",
        family: "Agamidae",
        subfamily: null,
        subspecies: [
            { name: "Phrynocephalus mystaceus mystaceus", range: "Kashkadarya, Surkhandarya, Bukhara, Navoi, Khorezm, Karakalpakstan" }
        ],
        description: "Largest Phrynocephalus species (SVL up to 90 mm). Sandy-coloured body with large, broad head. Distinguished by remarkable fleshy flaps at mouth corners that erect into red, finger-like projections during threat display, giving the appearance of a moustache (hence 'mystaceus'). Can inflate body when threatened. Fringed toes for sand locomotion.",
        distribution: "Central and southern Uzbekistan in desert regions",
        habitat: "Sandy and clay deserts",
        iucnStatus: "LC",
        nationalStatus: "",
        cites: "",
        endemism: "",
        regions: { Andijan: false, Fergana: false, Namangan: false, Tashkent: false, Syrdarya: false, Jizzak: false, Samarkand: false, Kashkadarya: true, Surkhandarya: true, Bukhara: true, Navoi: true, Khorezm: true, Karakalpakstan: true },
        coordinates: { lat: 40.0, lng: 63.0 },
        ncbiData: [
            { type: "Nucleotide", url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Phrynocephalus+mystaceus" }
        ],
        publications: [
            { citation: "Solovyeva, E.N. et al. (2018). Cenozoic aridization in Central Eurasia shaped diversification of toad-headed agamas. PeerJ, 6: e4543.", type: "phylogeny" },
            { citation: "Ananjeva, N.B. et al. (2006). Reptiles of Central Asia: A Field Guide. Pensoft Publishers.", type: "review" },
            { citation: "Bogdanov, O.P. (1960). Fauna of the Uzbek SSR. Vol. 1. Tashkent. [In Russian]", type: "regional" },
            { citation: "Shcherbak, N.N. (1993). The Herpetofauna of Central Asia. Proceedings ZIN RAS, 246.", type: "regional" }
        ],
        notes: "Named for the mustache-like markings on the face. Spectacular threat display with fleshy flaps at mouth corners",
        researchPlans: "Behavioral ecology of threat displays; population genetics; phylogeography across Central Asian deserts"
    },
    {
        scientificName: "Phrynocephalus raddei",
        commonName: "Radde’s Toad-headed Agama",
        russianName: "Круглоголовка Радде",
        uzbekName: "Каспий тўгаракбоши",
        class: "Reptilia",
        order: "Squamata",
        family: "Agamidae",
        subfamily: null,
        subspecies: [
            { name: "Phrynocephalus raddei boettgeri", range: "Surkhandarya" }
        ],
        description: "Small agamid (SVL 40-55 mm). Grey-brown dorsum with dark irregular spots or bars. Often has red-orange coloration on tail underside. Inhabits harder substrates (clay, gravel) compared to sand-dwelling congeners. Head relatively narrow. Active during warm months; primarily ant-eating species.",
        distribution: "Southern Uzbekistan; Surkhandarya region",
        habitat: "Rocky and clay deserts in foothills",
        iucnStatus: "LC",
        nationalStatus: "",
        cites: "",
        endemism: "",
        regions: { Andijan: false, Fergana: false, Namangan: false, Tashkent: false, Syrdarya: false, Jizzak: false, Samarkand: false, Kashkadarya: false, Surkhandarya: true, Bukhara: false, Navoi: false, Khorezm: false, Karakalpakstan: false },
        coordinates: { lat: 38.0, lng: 67.0 },
        ncbiData: [
            { type: "Nucleotide", url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Phrynocephalus+raddei" }
        ],
        publications: [
            { citation: "Solovyeva, E.N. et al. (2018). Cenozoic aridization in Central Eurasia shaped diversification of toad-headed agamas. PeerJ, 6: e4543.", type: "phylogeny" },
            { citation: "Ananjeva, N.B. et al. (2006). Reptiles of Central Asia: A Field Guide. Pensoft Publishers.", type: "review" },
            { citation: "Bogdanov, O.P. (1960). Fauna of the Uzbek SSR. Vol. 1. Tashkent. [In Russian]", type: "regional" }
        ],
        notes: "Several subspecies recognized. Clay and gravel substrate specialist",
        researchPlans: "Subspecies validation with molecular markers; distribution limits in Uzbekistan"
    },
    {
        scientificName: "Phrynocephalus reticulatus",
        commonName: "Reticulated Toad-headed Agama",
        russianName: "Сетчатая круглоголовка",
        uzbekName: "Матрап тўгаракбоши",
        class: "Reptilia",
        order: "Squamata",
        family: "Agamidae",
        subfamily: null,
        subspecies: [
            { name: "Phrynocephalus reticulatus reticulatus", range: "Bukhara, Navoi" },
            { name: "Phrynocephalus reticulatus bannikovi", range: "Karakalpakstan" }
        ],
        description: "Small agamid (SVL 35-50 mm) with sandy-brown dorsal coloration and distinctive dark reticulated (net-like) pattern on back. Tail with alternating light and dark rings. Adapted to sandy substrates — can partially bury itself in sand. Toe fringes present but less developed than in P. interscapularis. Insectivorous, primarily feeds on ants.",
        distribution: "Widespread in sandy deserts of Uzbekistan",
        habitat: "Sandy deserts, fixed and semi-fixed dunes",
        iucnStatus: "LC",
        nationalStatus: "",
        cites: "",
        endemism: "UZ, TM",
        regions: { Andijan: false, Fergana: false, Namangan: false, Tashkent: false, Syrdarya: false, Jizzak: false, Samarkand: false, Kashkadarya: false, Surkhandarya: false, Bukhara: true, Navoi: true, Khorezm: false, Karakalpakstan: true },
        coordinates: { lat: 41.0, lng: 61.0 },
        ncbiData: [
            { type: "Nucleotide", url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Phrynocephalus+reticulatus" }
        ],
        publications: [
            { citation: "Solovyeva, E.N. et al. (2018). Cenozoic aridization in Central Eurasia shaped diversification of toad-headed agamas. PeerJ, 6: e4543.", type: "phylogeny" },
            { citation: "Ananjeva, N.B. et al. (2006). Reptiles of Central Asia: A Field Guide. Pensoft Publishers.", type: "review" },
            { citation: "Bogdanov, O.P. (1960). Fauna of the Uzbek SSR. Vol. 1. Tashkent. [In Russian]", type: "regional" }
        ],
        notes: "Well-adapted to sandy environments; can 'swim' through sand by lateral body undulations",
        researchPlans: "Ecological niche partitioning with sympatric Phrynocephalus species; population genetics; distribution mapping"
    },
    {
        scientificName: "Phrynocephalus rossikowi",
        commonName: "Khentau Toad-headed Agama",
        russianName: "Хентаунская круглоголовка",
        uzbekName: "Хентоғ тўгаракбоши",
        class: "Reptilia",
        order: "Squamata",
        family: "Agamidae",
        subfamily: null,
        subspecies: [
            { name: "Phrynocephalus rossikowi rossikowi", range: "Karakalpakstan" }
        ],
        description: "Small agamid (SVL 35-50 mm). Pale sandy coloration matching local substrate. Distinguished from other Phrynocephalus by subtle scale counts and proportions. Poorly known species endemic to northwestern deserts. Ecology presumably similar to other sand-dwelling congeners — ant specialist, sand-burying behaviour.",
        distribution: "Northwestern Uzbekistan; Karakalpakstan",
        habitat: "Sandy deserts",
        iucnStatus: "EN",
        nationalStatus: "",
        cites: "",
        endemism: "UZ, TM",
        regions: { Andijan: false, Fergana: false, Namangan: false, Tashkent: false, Syrdarya: false, Jizzak: false, Samarkand: false, Kashkadarya: false, Surkhandarya: false, Bukhara: false, Navoi: false, Khorezm: false, Karakalpakstan: true },
        coordinates: { lat: 42.5, lng: 59.5 },
        ncbiData: [
            { type: "Nucleotide", url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Phrynocephalus+rossikowi" }
        ],
        publications: [
            { citation: "Solovyeva, E.N. et al. (2018). Cenozoic aridization in Central Eurasia shaped diversification of toad-headed agamas. PeerJ, 6: e4543.", type: "phylogeny" },
            { citation: "Ananjeva, N.B. et al. (2006). Reptiles of Central Asia: A Field Guide. Pensoft Publishers.", type: "review" },
            { citation: "Bogdanov, O.P. (1960). Fauna of the Uzbek SSR. Vol. 1. Tashkent. [In Russian]", type: "regional" }
        ],
        notes: "Regional endemic of northwestern Karakalpakstan deserts",
        researchPlans: "Population surveys; genetic distinctiveness from P. interscapularis; habitat assessment"
    },
    {
        scientificName: "Phrynocephalus sogdianus",
        commonName: "Tajikistan Toad-headed Agama",
        russianName: "Согдианская круглоголовка",
        uzbekName: "Согдиана тўгаракбоши",
        class: "Reptilia",
        order: "Squamata",
        family: "Agamidae",
        subfamily: null,
        subspecies: null,
        description: "",
        distribution: "Surkhandarya",
        habitat: "",
        iucnStatus: "EN",
        nationalStatus: "",
        cites: "",
        endemism: "UZ, TJ",
        regions: { Andijan: false, Fergana: false, Namangan: false, Tashkent: false, Syrdarya: false, Jizzak: false, Samarkand: false, Kashkadarya: false, Surkhandarya: true, Bukhara: false, Navoi: false, Khorezm: false, Karakalpakstan: false },
        coordinates: { lat: 40.0, lng: 65.0 },
        ncbiData: [
            { type: "Nucleotide", url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Phrynocephalus+sogdianus" }
        ],
        publications: [],
        notes: "",
        researchPlans: ""
    },
    {
        scientificName: "Phrynocephalus strauchi",
        commonName: "Fergana Toad-headed Agama",
        russianName: "Круглоголовка Штрауха",
        uzbekName: "Штраух тўгаракбоши",
        class: "Reptilia",
        order: "Squamata",
        family: "Agamidae",
        subfamily: null,
        subspecies: null,
        description: "Small agamid (SVL 35-45 mm) endemic to the Fergana Valley. Sandy-grey coloration with darker spots arranged in rows. Tail relatively long. A valley-floor specialist restricted to sandy habitats in a single intermountain basin. Extremely localized distribution makes it vulnerable to habitat change. Feeds on small arthropods.",
        distribution: "Fergana Valley; endemic to Central Asia",
        habitat: "Sandy areas in intermountain valleys",
        iucnStatus: "VU",
        nationalStatus: "1(EN)",
        cites: "",
        endemism: "UZ, TJ, KG",
        regions: { Andijan: true, Fergana: true, Namangan: true, Tashkent: false, Syrdarya: false, Jizzak: false, Samarkand: false, Kashkadarya: false, Surkhandarya: false, Bukhara: false, Navoi: false, Khorezm: false, Karakalpakstan: false },
        coordinates: { lat: 40.7, lng: 71.5 },
        ncbiData: [
            { type: "Nucleotide", url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Phrynocephalus+strauchi" }
        ],
        publications: [
            { citation: "Solovyeva, E.N. et al. (2018). Cenozoic aridization in Central Eurasia shaped diversification of toad-headed agamas. PeerJ, 6: e4543.", type: "phylogeny" },
            { citation: "Ananjeva, N.B. et al. (2006). Reptiles of Central Asia: A Field Guide. Pensoft Publishers.", type: "review" },
            { citation: "Red Book of the Republic of Uzbekistan. Vol. II. Animals. (2019). 3rd edition. Tashkent.", type: "conservation" },
            { citation: "Zakirova, N. et al. (2024). Species composition of Reptilia in Fergana Valley region of Uzbekistan. EJARE.", type: "regional" }
        ],
        notes: "Endemic to Fergana Valley. Threatened by habitat degradation and agricultural expansion",
        researchPlans: "Conservation genetics; population status assessment; habitat protection in Fergana Valley"
    },
    {
        scientificName: "Pseudopus apodus",
        commonName: "European Glass Lizard",
        russianName: "Желтопузик",
        uzbekName: "Сариқилон",
        class: "Reptilia",
        order: "Squamata",
        family: "Anguidae",
        subfamily: null,
        subspecies: [
            { name: "Pseudopus apodus apodus", range: "Andijan, Fergana, Namangan, Tashkent, Syrdarya, Jizzak, Samarkand, Kashkadarya, Surkhandarya, Navoi" }
        ],
        description: "Very large legless lizard (total length up to 1.3 m, most of it tail). Smooth, glossy scales with a lateral groove running along each side. Brown to olive coloration. Head relatively small with visible ear openings (distinguishing it from snakes). Vestigial hind limb stubs may be visible near cloaca. Feeds on snails, insects, and small vertebrates. Tail can break off but regenerates poorly.",
        distribution: "Mountain regions of eastern Uzbekistan",
        habitat: "Mountain meadows, rocky slopes, forest edges",
        iucnStatus: "LC",
        nationalStatus: "",
        cites: "",
        endemism: "",
        regions: { Andijan: true, Fergana: true, Namangan: true, Tashkent: true, Syrdarya: true, Jizzak: true, Samarkand: true, Kashkadarya: true, Surkhandarya: true, Bukhara: false, Navoi: true, Khorezm: false, Karakalpakstan: false },
        coordinates: { lat: 41.0, lng: 70.0 },
        ncbiData: [
            { type: "Nucleotide", url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Pseudopus+apodus" }
        ],
        publications: [
            { citation: "Ananjeva, N.B. et al. (2006). Reptiles of Central Asia: A Field Guide. Pensoft Publishers.", type: "review" },
            { citation: "Bogdanov, O.P. (1960). Fauna of the Uzbek SSR. Vol. 1. Tashkent. [In Russian]", type: "regional" },
            { citation: "Shcherbak, N.N. (1993). The Herpetofauna of Central Asia. Proceedings ZIN RAS, 246.", type: "regional" }
        ],
        notes: "Legless lizard, often mistaken for snake. Can break off tail. Ear openings visible (unlike snakes)",
        researchPlans: "Population status in Uzbekistan; distribution mapping; public education to reduce persecution"
    },
    {
        scientificName: "Ablepharus deserti",
        commonName: "Desert Lidless Skink",
        russianName: "Пустынный гологлаз",
        uzbekName: "Чўл тақиркўзлиси",
        class: "Reptilia",
        order: "Squamata",
        family: "Scincidae",
        subfamily: null,
        subspecies: null,
        description: "",
        distribution: "Andijan, Fergana, Namangan, Tashkent, Syrdarya, Jizzak, Samarkand, Bukhara, Navoi, Khorezm, Karakalpakstan",
        habitat: "",
        iucnStatus: "LC",
        nationalStatus: "",
        cites: "",
        endemism: "UZ, TJ, TM, KZ, KG",
        regions: { Andijan: true, Fergana: true, Namangan: true, Tashkent: true, Syrdarya: true, Jizzak: true, Samarkand: true, Kashkadarya: false, Surkhandarya: false, Bukhara: true, Navoi: true, Khorezm: true, Karakalpakstan: true },
        coordinates: { lat: 40.0, lng: 65.0 },
        ncbiData: [
            { type: "Nucleotide", url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Ablepharus+deserti" }
        ],
        publications: [],
        notes: "",
        researchPlans: ""
    },
    {
        scientificName: "Ablepharus pannonicus",
        commonName: "Asian Snake-eyed Skink",
        russianName: "Азиатский гологлаз",
        uzbekName: "Осиё тақиркўзлиси",
        class: "Reptilia",
        order: "Squamata",
        family: "Scincidae",
        subfamily: null,
        subspecies: null,
        description: "",
        distribution: "Samarkand, Kashkadarya, Surkhandarya",
        habitat: "",
        iucnStatus: "LC",
        nationalStatus: "",
        cites: "",
        endemism: "",
        regions: { Andijan: false, Fergana: false, Namangan: false, Tashkent: false, Syrdarya: false, Jizzak: false, Samarkand: true, Kashkadarya: true, Surkhandarya: true, Bukhara: false, Navoi: false, Khorezm: false, Karakalpakstan: false },
        coordinates: { lat: 40.0, lng: 65.0 },
        ncbiData: [
            { type: "Nucleotide", url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Ablepharus+pannonicus" }
        ],
        publications: [],
        notes: "",
        researchPlans: ""
    },
    {
        scientificName: "Asymblepharus alaicus",
        commonName: "Alai Ground Skink",
        russianName: "Алайский ложный гологлаз",
        uzbekName: "Олой тақиркўзлиси",
        class: "Reptilia",
        order: "Squamata",
        family: "Scincidae",
        subfamily: null,
        subspecies: null,
        description: "",
        distribution: "Namangan, Tashkent, Kashkadarya, Surkhandarya",
        habitat: "",
        iucnStatus: "LC",
        nationalStatus: "",
        cites: "",
        endemism: "UZ, TJ, KZ, KG,CN",
        regions: { Andijan: false, Fergana: false, Namangan: true, Tashkent: true, Syrdarya: false, Jizzak: false, Samarkand: false, Kashkadarya: true, Surkhandarya: true, Bukhara: false, Navoi: false, Khorezm: false, Karakalpakstan: false },
        coordinates: { lat: 40.0, lng: 65.0 },
        ncbiData: [
            { type: "Nucleotide", url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Asymblepharus+alaicus" }
        ],
        publications: [],
        notes: "",
        researchPlans: ""
    },
    {
        scientificName: "Eumeces schneideri",
        commonName: "Schneider's Skink",
        russianName: "Длинноногий сцинк",
        uzbekName: "Узуноёқ сцинк",
        class: "Reptilia",
        order: "Squamata",
        family: "Scincidae",
        subfamily: null,
        subspecies: null,
        description: "",
        distribution: "Tashkent, Syrdarya, Jizzak, Samarkand, Kashkadarya, Surkhandarya, Navoi",
        habitat: "",
        iucnStatus: "LC",
        nationalStatus: "",
        cites: "",
        endemism: "",
        regions: { Andijan: false, Fergana: false, Namangan: false, Tashkent: true, Syrdarya: true, Jizzak: true, Samarkand: true, Kashkadarya: true, Surkhandarya: true, Bukhara: false, Navoi: true, Khorezm: false, Karakalpakstan: false },
        coordinates: { lat: 40.0, lng: 65.0 },
        ncbiData: [
            { type: "Nucleotide", url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Eumeces+schneideri" }
        ],
        publications: [],
        notes: "",
        researchPlans: ""
    },
    {
        scientificName: "Eremias arguta",
        commonName: "Steppe Racerunner",
        russianName: "Разноцветная ящурка",
        uzbekName: "Ранг-баранг калтакесакча",
        class: "Reptilia",
        order: "Squamata",
        family: "Lacertidae",
        subfamily: null,
        subspecies: [
            { name: "Eremias arguta arguta", range: "Karakalpakstan" },
            { name: "Eremias arguta uzbekistanica", range: "Andijan, Fergana, Namangan, Tashkent, Syrdarya, Jizzak, Samarkand, Kashkadarya, Bukhara, Navoi" }
        ],
        description: "",
        distribution: "Andijan, Fergana, Namangan, Tashkent, Syrdarya, Jizzak, Samarkand, Kashkadarya, Bukhara, Navoi, Karakalpakstan",
        habitat: "",
        iucnStatus: "LC",
        nationalStatus: "",
        cites: "",
        endemism: "",
        regions: { Andijan: true, Fergana: true, Namangan: true, Tashkent: true, Syrdarya: true, Jizzak: true, Samarkand: true, Kashkadarya: true, Surkhandarya: false, Bukhara: true, Navoi: true, Khorezm: false, Karakalpakstan: true },
        coordinates: { lat: 40.0, lng: 65.0 },
        ncbiData: [
            { type: "Nucleotide", url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Eremias+arguta" }
        ],
        publications: [],
        notes: "",
        researchPlans: ""
    },
    {
        scientificName: "Eremias grammica",
        commonName: "Reticulate Racerunner",
        russianName: "Сетчатая ящурка",
        uzbekName: "Тўр  калтакесакча",
        class: "Reptilia",
        order: "Squamata",
        family: "Lacertidae",
        subfamily: null,
        subspecies: null,
        description: "Small lacertid (SVL 40-55 mm). Distinguished by reticulated (net-like) dark pattern on dorsum over lighter background. Snout relatively short. Build more compact than E. velox. Diurnal, terrestrial. Feeds on small insects and larvae. Often found on harder clay substrates.",
        distribution: "Desert regions throughout Uzbekistan",
        habitat: "Sandy and clay deserts, semi-fixed dunes",
        iucnStatus: "LC",
        nationalStatus: "",
        cites: "",
        endemism: "",
        regions: { Andijan: false, Fergana: false, Namangan: false, Tashkent: false, Syrdarya: false, Jizzak: true, Samarkand: false, Kashkadarya: true, Surkhandarya: true, Bukhara: true, Navoi: true, Khorezm: true, Karakalpakstan: true },
        coordinates: { lat: 41.5, lng: 62.5 },
        ncbiData: [
            { type: "Nucleotide", url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Eremias+grammica" }
        ],
        publications: [
            { citation: "Ananjeva, N.B. et al. (2006). Reptiles of Central Asia: A Field Guide. Pensoft Publishers.", type: "review" },
            { citation: "Bogdanov, O.P. (1960). Fauna of the Uzbek SSR. Vol. 1. Tashkent. [In Russian]", type: "regional" }
        ],
        notes: "Common desert species with distinctive reticulated pattern",
        researchPlans: "Phylogeography; ecological niche modeling with other Eremias species"
    },
    {
        scientificName: "Eremias intermedia",
        commonName: "Aralo-Caspian Racerunner",
        russianName: "Средняя ящурка",
        uzbekName: "Ўртача калтакесакча",
        class: "Reptilia",
        order: "Squamata",
        family: "Lacertidae",
        subfamily: null,
        subspecies: null,
        description: "Medium-sized lacertid (SVL 50-65 mm). Brown-grey dorsum with mixed spotting pattern intermediate between striped and reticulated species. Robust build compared to E. velox. Diurnal desert lizard feeding on insects. Taxonomy may require revision.",
        distribution: "Central Uzbekistan; desert regions",
        habitat: "Sandy and clay deserts",
        iucnStatus: "LC",
        nationalStatus: "",
        cites: "",
        endemism: "",
        regions: { Andijan: false, Fergana: false, Namangan: false, Tashkent: false, Syrdarya: false, Jizzak: false, Samarkand: true, Kashkadarya: true, Surkhandarya: false, Bukhara: true, Navoi: true, Khorezm: true, Karakalpakstan: true },
        coordinates: { lat: 40.0, lng: 64.0 },
        ncbiData: [
            { type: "Nucleotide", url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Eremias+intermedia" }
        ],
        publications: [
            { citation: "Ananjeva, N.B. et al. (2006). Reptiles of Central Asia: A Field Guide. Pensoft Publishers.", type: "review" },
            { citation: "Bogdanov, O.P. (1960). Fauna of the Uzbek SSR. Vol. 1. Tashkent. [In Russian]", type: "regional" }
        ],
        notes: "Intermediate in characteristics between other Eremias species. Taxonomy unclear",
        researchPlans: "Taxonomic clarification using molecular markers; distribution reassessment"
    },
    {
        scientificName: "Eremias lineolata",
        commonName: "Striped Racerunner",
        russianName: "Линейчатая ящурка",
        uzbekName: "Чизиқли калтакесакча",
        class: "Reptilia",
        order: "Squamata",
        family: "Lacertidae",
        subfamily: null,
        subspecies: null,
        description: "Small lacertid (SVL 40-50 mm) characterized by prominent longitudinal light stripes on brown dorsum. Body slender and tail very long. Active diurnal runner, feeding on small arthropods. Common in open desert habitats across Central Asia.",
        distribution: "Desert and semi-desert regions across Uzbekistan",
        habitat: "Clay and sandy deserts, steppe",
        iucnStatus: "LC",
        nationalStatus: "",
        cites: "",
        endemism: "UZ, TJ, TM, KZ, IR, AF",
        regions: { Andijan: false, Fergana: false, Namangan: false, Tashkent: false, Syrdarya: false, Jizzak: false, Samarkand: false, Kashkadarya: true, Surkhandarya: true, Bukhara: true, Navoi: true, Khorezm: true, Karakalpakstan: true },
        coordinates: { lat: 40.5, lng: 63.0 },
        ncbiData: [
            { type: "Nucleotide", url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Eremias+lineolata" }
        ],
        publications: [
            { citation: "Ananjeva, N.B. et al. (2006). Reptiles of Central Asia: A Field Guide. Pensoft Publishers.", type: "review" },
            { citation: "Bogdanov, O.P. (1960). Fauna of the Uzbek SSR. Vol. 1. Tashkent. [In Russian]", type: "regional" }
        ],
        notes: "Characterized by longitudinal stripes. Common desert lizard",
        researchPlans: "Distribution mapping; genetic diversity assessment"
    },
    {
        scientificName: "Eremias nigrocellata",
        commonName: "Black-Ocellated Racerunner",
        russianName: "Черноглазчатая ящурка",
        uzbekName: "Қоракўзчали калтакесакча",
        class: "Reptilia",
        order: "Squamata",
        family: "Lacertidae",
        subfamily: null,
        subspecies: null,
        description: "Medium-sized lacertid (SVL 50-60 mm). Distinguished by prominent black spots or ocelli on flanks, surrounded by lighter rings. Dorsum grey-brown. Adapted to rocky foothill habitats. Diurnal, insectivorous. Less common than many congeners.",
        distribution: "Southern Uzbekistan",
        habitat: "Rocky foothills and mountains",
        iucnStatus: "LC",
        nationalStatus: "2(VU:D)",
        cites: "",
        endemism: "UZ, TJ, TM, IR, AF",
        regions: { Andijan: false, Fergana: false, Namangan: false, Tashkent: false, Syrdarya: false, Jizzak: false, Samarkand: false, Kashkadarya: false, Surkhandarya: true, Bukhara: false, Navoi: false, Khorezm: false, Karakalpakstan: false },
        coordinates: { lat: 38.5, lng: 67.0 },
        ncbiData: [
            { type: "Nucleotide", url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Eremias+nigrocellata" }
        ],
        publications: [
            { citation: "Ananjeva, N.B. et al. (2006). Reptiles of Central Asia: A Field Guide. Pensoft Publishers.", type: "review" },
            { citation: "Bogdanov, O.P. (1960). Fauna of the Uzbek SSR. Vol. 1. Tashkent. [In Russian]", type: "regional" }
        ],
        notes: "Named for black spots on sides. Rocky foothill specialist",
        researchPlans: "Distribution mapping; population genetics; ecology in rocky habitats"
    },
    {
        scientificName: "Eremias nikolskii",
        commonName: "Kirgiz Racerunner",
        russianName: "Ящурка Никольского",
        uzbekName: "Никольский калтакесакчаси",
        class: "Reptilia",
        order: "Squamata",
        family: "Lacertidae",
        subfamily: null,
        subspecies: null,
        description: "",
        distribution: "Namangan, Tashkent",
        habitat: "",
        iucnStatus: "LC",
        nationalStatus: "",
        cites: "",
        endemism: "UZ, TJ, KG",
        regions: { Andijan: false, Fergana: false, Namangan: true, Tashkent: true, Syrdarya: false, Jizzak: false, Samarkand: false, Kashkadarya: false, Surkhandarya: false, Bukhara: false, Navoi: false, Khorezm: false, Karakalpakstan: false },
        coordinates: { lat: 40.0, lng: 65.0 },
        ncbiData: [
            { type: "Nucleotide", url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Eremias+nikolskii" }
        ],
        publications: [],
        notes: "",
        researchPlans: ""
    },
    {
        scientificName: "Eremias regeli",
        commonName: "Tajik Racerunner",
        russianName: "Таджикская ящурка",
        uzbekName: "Тожик калтакесакчаси",
        class: "Reptilia",
        order: "Squamata",
        family: "Lacertidae",
        subfamily: null,
        subspecies: null,
        description: "Medium-sized lacertid (SVL 45-60 mm). Brown dorsum with dark spots and white or light ocelli arranged in longitudinal rows. Restricted mainly to foothills and clay substrates. Less common than the widespread E. velox. Diurnal, insectivorous.",
        distribution: "Southern Uzbekistan; Surkhandarya region",
        habitat: "Foothills, clay slopes",
        iucnStatus: "LC",
        nationalStatus: "",
        cites: "",
        endemism: "UZ, TJ, TM, AF",
        regions: { Andijan: false, Fergana: false, Namangan: false, Tashkent: false, Syrdarya: false, Jizzak: false, Samarkand: false, Kashkadarya: true, Surkhandarya: true, Bukhara: false, Navoi: false, Khorezm: false, Karakalpakstan: false },
        coordinates: { lat: 38.0, lng: 67.5 },
        ncbiData: [
            { type: "Nucleotide", url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Eremias+regeli" }
        ],
        publications: [
            { citation: "Ananjeva, N.B. et al. (2006). Reptiles of Central Asia: A Field Guide. Pensoft Publishers.", type: "review" },
            { citation: "Bogdanov, O.P. (1960). Fauna of the Uzbek SSR. Vol. 1. Tashkent. [In Russian]", type: "regional" }
        ],
        notes: "Less common than E. velox. Southern foothill specialist",
        researchPlans: "Population status; genetic identity within Eremias radiation"
    },
    {
        scientificName: "Eremias scripta",
        commonName: "Sand Racerunner",
        russianName: "Полосатая ящурка",
        uzbekName: "Тарғил калтакесакча",
        class: "Reptilia",
        order: "Squamata",
        family: "Lacertidae",
        subfamily: null,
        subspecies: [
            { name: "Eremias scripta scripta", range: "Andijan, Fergana, Namangan, Jizzak, Kashkadarya, Surkhandarya, Bukhara, Navoi, Khorezm, Karakalpakstan" },
            { name: "Eremias scripta pherganensis", range: "Andijan, Fergana, Namangan" }
        ],
        description: "Medium-sized lacertid (SVL 45-60 mm). Light sandy-brown dorsum with rows of dark spots or short bars that give a 'written' appearance (hence 'scripta'). Ventral surface white. Well-adapted to sandy substrates. The subspecies E. s. pherganensis is an important local endemic of the Fergana Valley.",
        distribution: "Fergana Valley and adjacent sandy areas",
        habitat: "Sandy deserts and semi-deserts",
        iucnStatus: "LC",
        nationalStatus: "",
        cites: "",
        endemism: "",
        regions: { Andijan: true, Fergana: true, Namangan: true, Tashkent: false, Syrdarya: false, Jizzak: true, Samarkand: false, Kashkadarya: true, Surkhandarya: true, Bukhara: true, Navoi: true, Khorezm: true, Karakalpakstan: true },
        coordinates: { lat: 40.7, lng: 72.0 },
        ncbiData: [
            { type: "Nucleotide", url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Eremias+scripta" }
        ],
        publications: [
            { citation: "Ananjeva, N.B. et al. (2006). Reptiles of Central Asia: A Field Guide. Pensoft Publishers.", type: "review" },
            { citation: "Zakirova, N. et al. (2024). Species composition of Reptilia in Fergana Valley. EJARE.", type: "regional" },
            { citation: "Bogdanov, O.P. (1960). Fauna of the Uzbek SSR. Vol. 1. Tashkent. [In Russian]", type: "regional" }
        ],
        notes: "Several subspecies; E. s. pherganensis endemic to Fergana Valley",
        researchPlans: "Conservation status of E. s. pherganensis; genetic diversity; habitat protection"
    },
    {
        scientificName: "Eremias lasdini",
        commonName: "Lasdin's sand Racerunner",
        russianName: "Ящурка Лаздина",
        uzbekName: "-",
        class: "Reptilia",
        order: "Squamata",
        family: "Lacertidae",
        subfamily: null,
        subspecies: null,
        description: "",
        distribution: "Surkhandarya",
        habitat: "",
        iucnStatus: "",
        nationalStatus: "",
        cites: "",
        endemism: "UZ, TJ",
        regions: { Andijan: false, Fergana: false, Namangan: false, Tashkent: false, Syrdarya: false, Jizzak: false, Samarkand: false, Kashkadarya: false, Surkhandarya: true, Bukhara: false, Navoi: false, Khorezm: false, Karakalpakstan: false },
        coordinates: { lat: 40.0, lng: 65.0 },
        ncbiData: [
            { type: "Nucleotide", url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Eremias+lasdini" }
        ],
        publications: [],
        notes: "",
        researchPlans: ""
    },
    {
        scientificName: "Eremias velox",
        commonName: "Rapid Racerunner",
        russianName: "Быстрая ящурка",
        uzbekName: "Тез калтакесакча",
        class: "Reptilia",
        order: "Squamata",
        family: "Lacertidae",
        subfamily: null,
        subspecies: [
            { name: "Eremias velox velox", range: "Andijan, Fergana, Namangan, Tashkent, Syrdarya, Jizzak, Samarkand, Kashkadarya, Surkhandarya, Bukhara, Navoi, Khorezm, Karakalpakstan" }
        ],
        description: "Medium-sized lacertid (SVL 45-65 mm). Slender, agile lizard with long tail (2-3× SVL). Olive-brown to grey dorsum with longitudinal light stripes and dark spots. Juveniles more brightly patterned. Extremely fast runner. Diurnal and heliothermic. Feeds on insects, spiders, and other small arthropods. One of the most common and recognizable desert lizards.",
        distribution: "One of the most common lizards; throughout Uzbekistan in all desert and steppe zones",
        habitat: "Sandy and clay deserts, fixed dunes, steppe grasslands, agricultural lands. Extremely adaptable",
        iucnStatus: "LC",
        nationalStatus: "",
        cites: "",
        endemism: "",
        regions: { Andijan: true, Fergana: true, Namangan: true, Tashkent: true, Syrdarya: true, Jizzak: true, Samarkand: true, Kashkadarya: true, Surkhandarya: true, Bukhara: true, Navoi: true, Khorezm: true, Karakalpakstan: true },
        coordinates: { lat: 41.0, lng: 64.0 },
        ncbiData: [
            { type: "Nucleotide (Cytb)", url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Eremias+velox+cytochrome" }
        ],
        publications: [
            { citation: "Orlova, V.F. et al. (2017). Phylogeography of Eremias velox complex. Russian Journal of Herpetology, 24(4): 241-260.", type: "phylogeny" },
            { citation: "Ananjeva, N.B. et al. (2006). Reptiles of Central Asia: A Field Guide. Pensoft Publishers.", type: "review" },
            { citation: "Bogdanov, O.P. (1960). Fauna of the Uzbek SSR. Vol. 1. Tashkent. [In Russian]", type: "regional" },
            { citation: "Martin, T. et al. (2017). The herpetofauna of central Uzbekistan. Amphibian & Reptile Conservation, 11(1): 93-107.", type: "regional" }
        ],
        notes: "Very abundant. Multiple subspecies described; taxonomy needs revision. Important prey for snakes and birds",
        researchPlans: "Comprehensive phylogeographic study; subspecies validation using genomics"
    },
    {
        scientificName: "Varanus caspius",
        commonName: "Caspian Monitor",
        russianName: "Среднеазиатский варан",
        uzbekName: "Бўз  эчкемар",
        class: "Reptilia",
        order: "Squamata",
        family: "Varanidae",
        subfamily: null,
        subspecies: [
            { name: "V. g. caspius", range: "Central Asian populations including Uzbekistan" }
        ],
        description: "Largest lizard in Central Asia (total length up to 1.5 m, mass to 3.5 kg). Elongate body with powerful limbs and long tail. Sandy-grey coloration with dark transverse bands on back and tail. Forked tongue used for chemoreception. Active predator feeding on rodents, lizards, snakes, birds, and eggs. Primarily crepuscular in summer. Digs deep burrows or uses rodent burrows for shelter. Important apex predator in desert ecosystems.",
        distribution: "Desert regions throughout Uzbekistan, though declining",
        habitat: "Sandy and clay deserts, saxaul forests. Underground in burrows during day; active at dawn/dusk and night",
        iucnStatus: "EN",
        nationalStatus: "2(VU:D)",
        cites: "I",
        endemism: "",
        regions: { Andijan: true, Fergana: true, Namangan: true, Tashkent: false, Syrdarya: false, Jizzak: true, Samarkand: true, Kashkadarya: true, Surkhandarya: true, Bukhara: true, Navoi: true, Khorezm: true, Karakalpakstan: false },
        coordinates: { lat: 40.0, lng: 62.0 },
        ncbiData: [
            { type: "Nucleotide", url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Varanus+griseus" },
            { type: "Genome", url: "https://www.ncbi.nlm.nih.gov/genome/?term=Varanus+griseus" }
        ],
        publications: [
            { citation: "Tsellarius, A.Y. & Cherlin, V.A. (1991). Biology of the Desert Monitor (Varanus griseus) in the USSR. Smithsonian Herpetological Information Service, 91: 1-16.", type: "ecology" },
            { citation: "Stanner, M. & Mendelssohn, H. (1987). Sex ratio, population density, and home range of the desert monitor (Varanus griseus). Amphibia-Reptilia, 8(2): 173-183.", type: "ecology" },
            { citation: "Ananjeva, N.B. et al. (2006). Reptiles of Central Asia: A Field Guide. Pensoft Publishers.", type: "review" },
            { citation: "Red Book of the Republic of Uzbekistan. Vol. II. Animals. (2019). 3rd edition. Tashkent.", type: "conservation" },
            { citation: "Bogdanov, O.P. (1960). Fauna of the Uzbek SSR. Vol. 1. Tashkent. [In Russian]", type: "regional" }
        ],
        notes: "Largest lizard in Central Asia (up to 1.5m). Population severely declining due to habitat loss and persecution. Important predator",
        researchPlans: "Population assessment; conservation action plan; public awareness campaign"
    },
    {
        scientificName: "Xerotyphlops vermicularis",
        commonName: "Eurasian Blind Snake",
        russianName: "Червеобразная слепозмейка",
        uzbekName: "Кўрилон",
        class: "Reptilia",
        order: "Squamata",
        family: "Typhlopidae",
        subfamily: null,
        subspecies: null,
        description: "",
        distribution: "Surkhandarya",
        habitat: "",
        iucnStatus: "LC",
        nationalStatus: "",
        cites: "",
        endemism: "",
        regions: { Andijan: false, Fergana: false, Namangan: false, Tashkent: false, Syrdarya: false, Jizzak: false, Samarkand: false, Kashkadarya: false, Surkhandarya: true, Bukhara: false, Navoi: false, Khorezm: false, Karakalpakstan: false },
        coordinates: { lat: 40.0, lng: 65.0 },
        ncbiData: [
            { type: "Nucleotide", url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Xerotyphlops+vermicularis" }
        ],
        publications: [],
        notes: "",
        researchPlans: ""
    },
    {
        scientificName: "Eryx miliaris",
        commonName: "Desert Sand Boa",
        russianName: "Песчаный удавчик",
        uzbekName: "Қум бўғма илони",
        class: "Reptilia",
        order: "Squamata",
        family: "Boidae",
        subfamily: null,
        subspecies: [
            { name: "Eryx miliaris miliaris", range: "Kashkadarya, Bukhara, Navoi, Khorezm, Karakalpakstan" }
        ],
        description: "Small boa (25-50 cm total length). Very stocky body with extremely short, blunt tail. Head small and barely distinct from body. Eyes tiny and directed upward. Coloration sandy-yellow with brown spots. The most fossorial of regional boas — rarely seen on surface. Feeds on small lizards and rodents underground.",
        distribution: "Desert regions of Uzbekistan",
        habitat: "Sandy deserts. Highly fossorial",
        iucnStatus: "LC",
        nationalStatus: "",
        cites: "II",
        endemism: "",
        regions: { Andijan: false, Fergana: false, Namangan: false, Tashkent: false, Syrdarya: false, Jizzak: false, Samarkand: false, Kashkadarya: true, Surkhandarya: false, Bukhara: true, Navoi: true, Khorezm: true, Karakalpakstan: true },
        coordinates: { lat: 41.0, lng: 62.0 },
        ncbiData: [
            { type: "Nucleotide", url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Eryx+miliaris" }
        ],
        publications: [
            { citation: "Ananjeva, N.B. et al. (2006). Reptiles of Central Asia: A Field Guide. Pensoft Publishers.", type: "review" },
            { citation: "Bogdanov, O.P. (1960). Fauna of the Uzbek SSR. Vol. 1. Tashkent. [In Russian]", type: "regional" }
        ],
        notes: "Small boa, rarely seen due to burrowing habits. Non-venomous",
        researchPlans: "Population density estimation; genetic diversity; role in subterranean food webs"
    },
    {
        scientificName: "Eryx tataricus",
        commonName: "Tatary Sand Boa",
        russianName: "Восточный удавчик",
        uzbekName: "Шарқ бўғма илони",
        class: "Reptilia",
        order: "Squamata",
        family: "Boidae",
        subfamily: null,
        subspecies: [
            { name: "Eryx tataricus tataricus", range: "Andijan, Fergana, Namangan, Tashkent, Syrdarya, Jizzak, Samarkand, Kashkadarya, Navoi, Karakalpakstan" },
            { name: "Eryx tataricus speciosus", range: "Surkhandarya" }
        ],
        description: "Medium-sized boa (50-80 cm total length). Heavy-bodied with short blunt tail. Small eyes positioned dorsally. Sandy-brown with dark brown blotches along back. Head scarcely wider than neck. Highly fossorial — spends most of time underground. Non-venomous constrictor feeding on small mammals, lizards, and birds. Crepuscular and nocturnal.",
        distribution: "Southern regions including Fergana Valley, Surkhandarya",
        habitat: "Sandy and rocky areas in deserts and foothills. Fossorial (burrowing)",
        iucnStatus: "LC",
        nationalStatus: "3(NT)",
        cites: "II",
        endemism: "UZ, KZ, KG, TM, IR,  CN, MN, TJ, AF",
        regions: { Andijan: true, Fergana: true, Namangan: true, Tashkent: true, Syrdarya: true, Jizzak: true, Samarkand: true, Kashkadarya: true, Surkhandarya: true, Bukhara: false, Navoi: true, Khorezm: false, Karakalpakstan: true },
        coordinates: { lat: 40.0, lng: 68.0 },
        ncbiData: [
            { type: "Nucleotide", url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Eryx+tataricus" }
        ],
        publications: [
            { citation: "Aktag, B., Mega, B. & Cicek, K. (2020-2024). Snakes of Central Asia: Distribution, Taxonomy, Conservation. Various publications.", type: "review" },
            { citation: "Ananjeva, N.B. et al. (2006). Reptiles of Central Asia: A Field Guide. Pensoft Publishers.", type: "review" },
            { citation: "Bogdanov, O.P. (1960). Fauna of the Uzbek SSR. Vol. 1. Tashkent. [In Russian]", type: "regional" }
        ],
        notes: "Non-venomous constrictor. Threatened by habitat exploitation and poaching",
        researchPlans: "Distribution mapping; population status; genetic structure of subspecies"
    },
    {
        scientificName: "Boiga trigonata",
        commonName: "Indian Gamma Snake",
        russianName: "Индийская бойга",
        uzbekName: "Бойга",
        class: "Reptilia",
        order: "Squamata",
        family: "Colubridae",
        subfamily: null,
        subspecies: [
            { name: "Boiga trigonata melanocephala", range: "Range data needed" }
        ],
        description: "Medium-sized snake (60-90 cm) with laterally compressed body and large head with prominent cat-like eyes with vertical pupils. Light brown to grey with darker zigzag or triangular markings. Nocturnal and semi-arboreal. Rear-fanged with mild venom (opisthoglyphous) — not considered dangerous to humans. Feeds on lizards, frogs, small birds, and mice.",
        distribution: "Southern Uzbekistan in suitable habitat",
        habitat: "Rocky areas, shrublands. Nocturnal, arboreal",
        iucnStatus: "LC",
        nationalStatus: "",
        cites: "",
        endemism: "UZ, TJ, TM, IR, AF,  IN, PK",
        regions: { Andijan: false, Fergana: false, Namangan: false, Tashkent: false, Syrdarya: false, Jizzak: false, Samarkand: false, Kashkadarya: false, Surkhandarya: true, Bukhara: false, Navoi: true, Khorezm: false, Karakalpakstan: false },
        coordinates: { lat: 38.0, lng: 68.0 },
        ncbiData: [
            { type: "Nucleotide", url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Boiga+trigonata" }
        ],
        publications: [
            { citation: "Ananjeva, N.B. et al. (2006). Reptiles of Central Asia: A Field Guide. Pensoft Publishers.", type: "review" },
            { citation: "Bogdanov, O.P. (1960). Fauna of the Uzbek SSR. Vol. 1. Tashkent. [In Russian]", type: "regional" },
            { citation: "Aktag, B. et al. (2020-2024). Snakes of Central Asia. Various publications.", type: "review" }
        ],
        notes: "Rear-fanged, mildly venomous. Northern edge of range. Arboreal habits make it hard to observe",
        researchPlans: "Venom composition analysis; arboreal ecology and nocturnal activity patterns; distribution mapping in southern foothills"
    },
    {
        scientificName: "Hemorrhois ravergieri",
        commonName: "Spotted Whip Snake",
        russianName: "Разноцветный полоз",
        uzbekName: "Ранг-баранг чипор илон",
        class: "Reptilia",
        order: "Squamata",
        family: "Colubridae",
        subfamily: null,
        subspecies: null,
        description: "",
        distribution: "Andijan, Fergana, Namangan, Tashkent, Syrdarya, Jizzak, Samarkand, Kashkadarya, Surkhandarya, Bukhara, Navoi, Khorezm, Karakalpakstan",
        habitat: "",
        iucnStatus: "LC",
        nationalStatus: "",
        cites: "",
        endemism: "",
        regions: { Andijan: true, Fergana: true, Namangan: true, Tashkent: true, Syrdarya: true, Jizzak: true, Samarkand: true, Kashkadarya: true, Surkhandarya: true, Bukhara: true, Navoi: true, Khorezm: true, Karakalpakstan: true },
        coordinates: { lat: 40.0, lng: 65.0 },
        ncbiData: [
            { type: "Nucleotide", url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Hemorrhois+ravergieri" }
        ],
        publications: [],
        notes: "",
        researchPlans: ""
    },
    {
        scientificName: "Platyceps karelinii",
        commonName: "Spotted Desert Racer",
        russianName: "Поперечнополосатый полоз",
        uzbekName: "Қўндаланг-йўлли чипор  илон",
        class: "Reptilia",
        order: "Squamata",
        family: "Colubridae",
        subfamily: null,
        subspecies: null,
        description: "",
        distribution: "Fergana, Syrdarya, Jizzak, Samarkand, Kashkadarya, Surkhandarya, Bukhara, Navoi, Khorezm, Karakalpakstan",
        habitat: "",
        iucnStatus: "LC",
        nationalStatus: "",
        cites: "",
        endemism: "",
        regions: { Andijan: false, Fergana: true, Namangan: false, Tashkent: false, Syrdarya: true, Jizzak: true, Samarkand: true, Kashkadarya: true, Surkhandarya: true, Bukhara: true, Navoi: true, Khorezm: true, Karakalpakstan: true },
        coordinates: { lat: 40.0, lng: 65.0 },
        ncbiData: [
            { type: "Nucleotide", url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Platyceps+karelinii" }
        ],
        publications: [],
        notes: "",
        researchPlans: ""
    },
    {
        scientificName: "Platyceps rhodorhachis",
        commonName: "Jan's Cliff Racer",
        russianName: "Краснополосый полоз",
        uzbekName: "Қўндаланг-йўлли чипор  илон",
        class: "Reptilia",
        order: "Squamata",
        family: "Colubridae",
        subfamily: null,
        subspecies: null,
        description: "",
        distribution: "Fergana, Namangan, Tashkent, Syrdarya, Jizzak, Samarkand, Kashkadarya, Surkhandarya, Navoi",
        habitat: "",
        iucnStatus: "LC",
        nationalStatus: "",
        cites: "",
        endemism: "",
        regions: { Andijan: false, Fergana: true, Namangan: true, Tashkent: true, Syrdarya: true, Jizzak: true, Samarkand: true, Kashkadarya: true, Surkhandarya: true, Bukhara: false, Navoi: true, Khorezm: false, Karakalpakstan: false },
        coordinates: { lat: 40.0, lng: 65.0 },
        ncbiData: [
            { type: "Nucleotide", url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Platyceps+rhodorhachis" }
        ],
        publications: [],
        notes: "",
        researchPlans: ""
    },
    {
        scientificName: "Elaphe dione",
        commonName: "Steppe Rat Snake",
        russianName: "Узорчатый полоз",
        uzbekName: "Нақшдор чипор илон",
        class: "Reptilia",
        order: "Squamata",
        family: "Colubridae",
        subfamily: null,
        subspecies: null,
        description: "",
        distribution: "Andijan, Fergana, Namangan, Tashkent, Syrdarya, Jizzak, Samarkand, Bukhara, Navoi, Karakalpakstan",
        habitat: "",
        iucnStatus: "LC",
        nationalStatus: "",
        cites: "",
        endemism: "",
        regions: { Andijan: true, Fergana: true, Namangan: true, Tashkent: true, Syrdarya: true, Jizzak: true, Samarkand: true, Kashkadarya: false, Surkhandarya: false, Bukhara: true, Navoi: true, Khorezm: false, Karakalpakstan: true },
        coordinates: { lat: 40.0, lng: 65.0 },
        ncbiData: [
            { type: "Nucleotide", url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Elaphe+dione" }
        ],
        publications: [],
        notes: "",
        researchPlans: ""
    },
    {
        scientificName: "Elaphe sauromates",
        commonName: "Blotched Rat Snake",
        russianName: "Палласов полоз",
        uzbekName: "Тўрт йўлли чипор илони",
        class: "Reptilia",
        order: "Squamata",
        family: "Colubridae",
        subfamily: null,
        subspecies: null,
        description: "Large colubrid (100-180 cm). Yellowish-grey to straw-coloured dorsum with large dark brown or black blotches along the back. Belly light with dark spots. Relatively slow-moving compared to whipsnakes. Non-venomous constrictor feeding on rodents and birds. Often confused with venomous vipers due to blotched pattern, leading to persecution.",
        distribution: "Southern Uzbekistan in suitable habitat. Edge of range",
        habitat: "Steppe and semi-desert areas, rocky slopes",
        iucnStatus: "LC",
        nationalStatus: "2(VU:R)",
        cites: "",
        endemism: "",
        regions: { Andijan: false, Fergana: false, Namangan: false, Tashkent: false, Syrdarya: false, Jizzak: false, Samarkand: false, Kashkadarya: false, Surkhandarya: false, Bukhara: false, Navoi: false, Khorezm: false, Karakalpakstan: true },
        coordinates: { lat: 38.5, lng: 67.0 },
        ncbiData: [
            { type: "Nucleotide", url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Elaphe+sauromates" }
        ],
        publications: [
            { citation: "Lenk, P. et al. (2001). Evolutionary relationships among the true ratsnakes (genus Elaphe). Molecular Phylogenetics and Evolution, 21: 408-423.", type: "phylogeny" },
            { citation: "Ananjeva, N.B. et al. (2006). Reptiles of Central Asia: A Field Guide. Pensoft Publishers.", type: "review" },
            { citation: "Bogdanov, O.P. (1960). Fauna of the Uzbek SSR. Vol. 1. Tashkent. [In Russian]", type: "regional" }
        ],
        notes: "Edge of range in Uzbekistan. Non-venomous. Often persecuted due to mistaken identity",
        researchPlans: "Distribution confirmation in southern regions; ecological studies on prey preferences; conservation education to reduce persecution"
    },
    {
        scientificName: "Lycodon bicolor",
        commonName: "Northern Wolfsnake",
        russianName: "Поперечнополосатый волкозуб",
        uzbekName: "Кўндаланг йўлли  бўритиш илон",
        class: "Reptilia",
        order: "Squamata",
        family: "Colubridae",
        subfamily: null,
        subspecies: null,
        description: "Small to medium snake (40-60 cm). Strikingly patterned with alternating black and white (or cream) transverse bands. Head dark with a lighter collar. Nocturnal, secretive. Non-venomous. Feeds primarily on small lizards and geckos. Flattened head and smooth scales adapted for navigating rock crevices.",
        distribution: "Mountain regions of southern Uzbekistan",
        habitat: "Rocky mountain slopes, near streams. Nocturnal",
        iucnStatus: "LC",
        nationalStatus: "2(VU:R)",
        cites: "",
        endemism: "UZ, TM, TJ, IR, AF",
        regions: { Andijan: false, Fergana: false, Namangan: false, Tashkent: true, Syrdarya: true, Jizzak: true, Samarkand: true, Kashkadarya: true, Surkhandarya: true, Bukhara: false, Navoi: false, Khorezm: false, Karakalpakstan: false },
        coordinates: { lat: 39.0, lng: 67.0 },
        ncbiData: [
            { type: "Nucleotide", url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Lycodon+bicolor" }
        ],
        publications: [
            { citation: "Ananjeva, N.B. et al. (2006). Reptiles of Central Asia: A Field Guide. Pensoft Publishers.", type: "review" },
            { citation: "Bogdanov, O.P. (1960). Fauna of the Uzbek SSR. Vol. 1. Tashkent. [In Russian]", type: "regional" }
        ],
        notes: "Beautiful patterned snake. Non-venomous. Limited records in Uzbekistan",
        researchPlans: "Nocturnal behavior and diet studies; population surveys in mountain habitats; genetic analysis for taxonomic clarification"
    },
    {
        scientificName: "Lytorhynchus ridgewayi",
        commonName: "Derafshi Snake",
        russianName: "Афганский литоринх",
        uzbekName: "Афғон литоринхи",
        class: "Reptilia",
        order: "Squamata",
        family: "Colubridae",
        subfamily: null,
        subspecies: null,
        description: "",
        distribution: "Kashkadarya, Surkhandarya, Bukhara, Navoi",
        habitat: "",
        iucnStatus: "LC",
        nationalStatus: "2(VU:R)",
        cites: "",
        endemism: "UZ, TM, IR, AF, PK",
        regions: { Andijan: false, Fergana: false, Namangan: false, Tashkent: false, Syrdarya: false, Jizzak: false, Samarkand: false, Kashkadarya: true, Surkhandarya: true, Bukhara: true, Navoi: true, Khorezm: false, Karakalpakstan: false },
        coordinates: { lat: 40.0, lng: 65.0 },
        ncbiData: [
            { type: "Nucleotide", url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Lytorhynchus+ridgewayi" }
        ],
        publications: [],
        notes: "",
        researchPlans: ""
    },
    {
        scientificName: "Natrix tessellata",
        commonName: "Dice Snake",
        russianName: "Водяной уж",
        uzbekName: "Сувилон",
        class: "Reptilia",
        order: "Squamata",
        family: "Colubridae",
        subfamily: null,
        subspecies: null,
        description: "Medium to large water snake (60-100 cm, occasionally to 130 cm). Olive-grey to brown with dark spots arranged in a checkerboard ('dice') pattern. Head triangular, distinct from neck. Feeds almost exclusively on fish. Excellent swimmer and diver. Non-venomous; when threatened, may flatten head, hiss, and release foul-smelling musk.",
        distribution: "Throughout Uzbekistan near water bodies; most common water snake",
        habitat: "Rivers, streams, lakes, canals. Semi-aquatic",
        iucnStatus: "LC",
        nationalStatus: "",
        cites: "",
        endemism: "",
        regions: { Andijan: true, Fergana: true, Namangan: true, Tashkent: true, Syrdarya: true, Jizzak: true, Samarkand: true, Kashkadarya: true, Surkhandarya: true, Bukhara: true, Navoi: true, Khorezm: true, Karakalpakstan: true },
        coordinates: { lat: 40.5, lng: 68.0 },
        ncbiData: [
            { type: "Nucleotide", url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Natrix+tessellata" }
        ],
        publications: [
            { citation: "Guicking, D. et al. (2009). Phylogeography of the dice snake (Natrix tessellata). Molecular Phylogenetics and Evolution, 52: 490-497.", type: "phylogeny" },
            { citation: "Ananjeva, N.B. et al. (2006). Reptiles of Central Asia: A Field Guide. Pensoft Publishers.", type: "review" },
            { citation: "Bogdanov, O.P. (1960). Fauna of the Uzbek SSR. Vol. 1. Tashkent. [In Russian]", type: "regional" }
        ],
        notes: "Non-venomous. Feeds primarily on fish and amphibians. Most widespread snake near water",
        researchPlans: "Population genetics; diet analysis; aquatic habitat assessment"
    },
    {
        scientificName: "Psammophis lineolatus",
        commonName: "Steppe Ribbon Racer",
        russianName: "Стрела-змея",
        uzbekName: "Ўқилон",
        class: "Reptilia",
        order: "Squamata",
        family: "Psammophiidae",
        subfamily: null,
        subspecies: null,
        description: "Slender, fast-moving snake (60-100 cm). Light brown to olive dorsum with darker longitudinal stripes. Head elongated with large eyes. Extremely fast diurnal hunter feeding on lizards. Rear-fanged with mild venom (opisthoglyphous) — harmless to humans. Active thermoregulator, often found basking on bushes.",
        distribution: "Widespread in deserts throughout Uzbekistan; one of most common snakes",
        habitat: "Sandy and clay deserts, semi-deserts. Diurnal, fast-moving",
        iucnStatus: "LC",
        nationalStatus: "",
        cites: "",
        endemism: "",
        regions: { Andijan: true, Fergana: true, Namangan: true, Tashkent: true, Syrdarya: true, Jizzak: true, Samarkand: true, Kashkadarya: true, Surkhandarya: true, Bukhara: true, Navoi: true, Khorezm: true, Karakalpakstan: true },
        coordinates: { lat: 40.0, lng: 63.0 },
        ncbiData: [
            { type: "Nucleotide", url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Psammophis+lineolatus" }
        ],
        publications: [
            { citation: "Ananjeva, N.B. et al. (2006). Reptiles of Central Asia: A Field Guide. Pensoft Publishers.", type: "review" },
            { citation: "Bogdanov, O.P. (1960). Fauna of the Uzbek SSR. Vol. 1. Tashkent. [In Russian]", type: "regional" },
            { citation: "Shcherbak, N.N. (1993). The Herpetofauna of Central Asia. Proceedings ZIN RAS, 246.", type: "regional" }
        ],
        notes: "Very common. Rear-fanged, mildly venomous but harmless to humans. Extremely fast runner",
        researchPlans: "Diet ecology; venom characterization; population genetics"
    },
    {
        scientificName: "Spalerosophis diadema",
        commonName: "Diadem Snake",
        russianName: "Чешуелобый полоз",
        uzbekName: "Холдор чипор илон",
        class: "Reptilia",
        order: "Squamata",
        family: "Colubridae",
        subfamily: null,
        subspecies: [
            { name: "Spalerosophis diadema schirazianus", range: "Fergana, Namangan, Jizzak, Samarkand, Kashkadarya, Surkhandarya, Bukhara, Navoi, Khorezm, Karakalpakstan" }
        ],
        description: "",
        distribution: "Fergana, Namangan, Jizzak, Samarkand, Kashkadarya, Surkhandarya, Bukhara, Navoi, Khorezm, Karakalpakstan",
        habitat: "",
        iucnStatus: "LC",
        nationalStatus: "",
        cites: "",
        endemism: "",
        regions: { Andijan: false, Fergana: true, Namangan: true, Tashkent: false, Syrdarya: false, Jizzak: true, Samarkand: true, Kashkadarya: true, Surkhandarya: true, Bukhara: true, Navoi: true, Khorezm: true, Karakalpakstan: true },
        coordinates: { lat: 40.0, lng: 65.0 },
        ncbiData: [
            { type: "Nucleotide", url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Spalerosophis+diadema" }
        ],
        publications: [],
        notes: "",
        researchPlans: ""
    },
    {
        scientificName: "Naja oxiana",
        commonName: "Central Asian Cobra",
        russianName: "Среднеазиатская кобра",
        uzbekName: "Капча илон",
        class: "Reptilia",
        order: "Squamata",
        family: "Elapidae",
        subfamily: null,
        subspecies: null,
        description: "Large elapid snake (100-180 cm). Uniform olive-brown to dark brown coloration, paler ventrally. Classic cobra hood when threatened, narrower than in Indian cobras. HIGHLY VENOMOUS — neurotoxic and cytotoxic venom, considered the most toxic of all cobra species. Good climber and swimmer. Active from April-October. Feeds on rodents, amphibians, birds, and other snakes. Can spray venom. Medically very important.",
        distribution: "Southern and eastern Uzbekistan; foothills and mountains",
        habitat: "Rocky foothills, shrublands, forests. Found from lowlands to 3000m. Hides in tree hollows, burrows",
        iucnStatus: "NT",
        nationalStatus: "3(NT)",
        cites: "II",
        endemism: "UZ, TM, TJ, IR, AF, PK",
        regions: { Andijan: false, Fergana: false, Namangan: false, Tashkent: false, Syrdarya: false, Jizzak: false, Samarkand: true, Kashkadarya: true, Surkhandarya: true, Bukhara: false, Navoi: true, Khorezm: false, Karakalpakstan: false },
        coordinates: { lat: 39.0, lng: 67.0 },
        ncbiData: [
            { type: "Nucleotide", url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Naja+oxiana" },
            { type: "Genome", url: "https://www.ncbi.nlm.nih.gov/genome/?term=Naja+oxiana" }
        ],
        publications: [
            { citation: "Kazemi-Lomedasht, F. et al. (2019). Central Asian Cobra (Naja oxiana): Venom, Distribution, and Conservation. Toxicon, 167: 110-118.", type: "venom" },
            { citation: "Wüster, W. et al. (2007). Phylogeny of cobras inferred from mitochondrial DNA sequences. Molecular Phylogenetics and Evolution, 45: 437-453.", type: "phylogeny" },
            { citation: "Ananjeva, N.B. et al. (2006). Reptiles of Central Asia: A Field Guide. Pensoft Publishers.", type: "review" },
            { citation: "Bogdanov, O.P. (1960). Fauna of the Uzbek SSR. Vol. 1. Tashkent. [In Russian]", type: "regional" },
            { citation: "Red Book of the Republic of Uzbekistan. Vol. II. Animals. (2019). 3rd edition. Tashkent.", type: "conservation" }
        ],
        notes: "HIGHLY VENOMOUS - most potent venom of all cobra species. Responsible for most serious snakebites in Central Asia. Adults 1-1.8m. Good climber and swimmer",
        researchPlans: "Venom composition analysis; distribution mapping; public education on snakebite prevention; population genetics for management"
    },
    {
        scientificName: "Gloydius caraganus",
        commonName: "Karaganda Pitviper",
        russianName: "Караганский щитомордник",
        uzbekName: "Караган буш илон",
        class: "Reptilia",
        order: "Squamata",
        family: "Viperidae",
        subfamily: null,
        subspecies: null,
        description: "",
        distribution: "Karakalpakstan",
        habitat: "",
        iucnStatus: "LC",
        nationalStatus: "",
        cites: "",
        endemism: "UZ, KZ, KG, TM, TJ",
        regions: { Andijan: false, Fergana: false, Namangan: false, Tashkent: false, Syrdarya: false, Jizzak: false, Samarkand: false, Kashkadarya: false, Surkhandarya: false, Bukhara: false, Navoi: false, Khorezm: false, Karakalpakstan: true },
        coordinates: { lat: 40.0, lng: 65.0 },
        ncbiData: [
            { type: "Nucleotide", url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Gloydius+caraganus" }
        ],
        publications: [],
        notes: "",
        researchPlans: ""
    },
    {
        scientificName: "Echis carinatus",
        commonName: "Saw-scaled Viper",
        russianName: "Песчаная эфа",
        uzbekName: "Қум чархилони",
        class: "Reptilia",
        order: "Squamata",
        family: "Viperidae",
        subfamily: null,
        subspecies: [
            { name: "Echis carinatus sochureki", range: "Kashkadarya, Surkhandarya, Bukhara, Karakalpakstan" }
        ],
        description: "Small but dangerous viper (30-60 cm). Stocky body with distinctive rough, keeled scales arranged in oblique rows on flanks — rubbed together to produce a loud 'sizzling' warning sound (stridulation). Sandy-brown with darker cross-bars or spots. VENOMOUS — potent hemotoxic venom causing coagulopathy and hemorrhage. Medically important. Nocturnal and crepuscular. Feeds on lizards, scorpions, and small rodents.",
        distribution: "Southern Uzbekistan; limited distribution",
        habitat: "Rocky deserts, foothills",
        iucnStatus: "LC",
        nationalStatus: "",
        cites: "",
        endemism: "",
        regions: { Andijan: false, Fergana: false, Namangan: false, Tashkent: false, Syrdarya: false, Jizzak: false, Samarkand: false, Kashkadarya: true, Surkhandarya: true, Bukhara: true, Navoi: false, Khorezm: false, Karakalpakstan: true },
        coordinates: { lat: 38.0, lng: 67.5 },
        ncbiData: [
            { type: "Nucleotide", url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Echis+multisquamatus" }
        ],
        publications: [
            { citation: "Pook, C.E. et al. (2009). When continents collide: Phylogeny, historical biogeography and systematics of the medically important viper genus Echis. Molecular Phylogenetics and Evolution, 53: 792-807.", type: "phylogeny" },
            { citation: "Ananjeva, N.B. et al. (2006). Reptiles of Central Asia: A Field Guide. Pensoft Publishers.", type: "review" },
            { citation: "Bogdanov, O.P. (1960). Fauna of the Uzbek SSR. Vol. 1. Tashkent. [In Russian]", type: "regional" },
            { citation: "Aktag, B. et al. (2020-2024). Snakes of Central Asia. Various publications.", type: "review" }
        ],
        notes: "VENOMOUS. Makes characteristic rasping sound with scales when threatened. Responsible for snakebites in arid areas",
        researchPlans: "Venom variation analysis; distribution and abundance surveys; public health studies on bite incidence"
    },
    {
        scientificName: "Vipera renardi",
        commonName: "Steppe Viper",
        russianName: "Восточная степная гадюка",
        uzbekName: "Дашт қора илони",
        class: "Reptilia",
        order: "Squamata",
        family: "Viperidae",
        subfamily: null,
        subspecies: [
            { name: "Vipera renardi tienshanica", range: "Tashkent, Syrdarya" }
        ],
        description: "Small viper (35-50 cm, rarely to 60 cm). Light grey to brown dorsum with a dark, often zigzag dorsal stripe. Head triangular with distinct canthus rostralis. VENOMOUS — bite causes local pain and swelling; systemic effects are usually mild. Active April-October. Feeds on lizards, small rodents, and large insects. Ovoviviparous.",
        distribution: "Northern Uzbekistan in steppe zones; limited areas",
        habitat: "Steppe grasslands, semi-desert. Lowland species",
        iucnStatus: "NT",
        nationalStatus: "",
        cites: "",
        endemism: "",
        regions: { Andijan: false, Fergana: false, Namangan: false, Tashkent: true, Syrdarya: true, Jizzak: false, Samarkand: false, Kashkadarya: false, Surkhandarya: false, Bukhara: false, Navoi: false, Khorezm: false, Karakalpakstan: false },
        coordinates: { lat: 42.0, lng: 63.0 },
        ncbiData: [
            { type: "Nucleotide", url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Vipera+renardi" }
        ],
        publications: [
            { citation: "Nilson, G. & Andrén, C. (2001). The meadow and steppe vipers of Europe and Asia — the Vipera (Acridophaga) ursinii complex. Acta Zoologica Academiae Scientiarum Hungaricae, 47: 87-267.", type: "taxonomy" },
            { citation: "Ananjeva, N.B. et al. (2006). Reptiles of Central Asia: A Field Guide. Pensoft Publishers.", type: "review" },
            { citation: "Bogdanov, O.P. (1960). Fauna of the Uzbek SSR. Vol. 1. Tashkent. [In Russian]", type: "regional" }
        ],
        notes: "VENOMOUS. Small viper, usually under 50cm. Southern edge of range",
        researchPlans: "Distribution confirmation; genetic studies; habitat modeling for steppe conservation"
    },
    {
        scientificName: "Macrovipera lebetinus",
        commonName: "Levantine [Blunt-nosed] Viper",
        russianName: "Гюрза",
        uzbekName: "Кўлвор илон",
        class: "Reptilia",
        order: "Squamata",
        family: "Viperidae",
        subfamily: null,
        subspecies: [
            { name: "Macrovipera lebetinus turanica", range: "Jizzak, Samarkand, Kashkadarya, Navoi" },
            { name: "Macrovipera lebetinus cernovi", range: "Surkhandarya, Bukhara, Khorezm" }
        ],
        description: "Large, heavy-bodied viper (up to 150 cm, occasionally larger). Broad, triangular head distinctly wider than neck. Grey to brown with darker, often faded blotches and saddles on dorsum. VENOMOUS — hemotoxic venom causing local tissue damage, coagulopathy, and systemic effects. Responsible for serious snakebites. Ambush predator feeding on rodents, birds, and lizards. Ovoviviparous.",
        distribution: "Southern and eastern Uzbekistan in mountains and foothills",
        habitat: "Rocky mountain slopes, scree, alpine meadows. 500-3000m elevation",
        iucnStatus: "LC",
        nationalStatus: "",
        cites: "",
        endemism: "",
        regions: { Andijan: false, Fergana: false, Namangan: false, Tashkent: false, Syrdarya: false, Jizzak: true, Samarkand: true, Kashkadarya: true, Surkhandarya: true, Bukhara: true, Navoi: true, Khorezm: true, Karakalpakstan: false },
        coordinates: { lat: 39.0, lng: 68.0 },
        ncbiData: [
            { type: "Nucleotide", url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Macrovipera+lebetinus" }
        ],
        publications: [
            { citation: "Stümpel, N. & Joger, U. (2009). Recent advances in phylogeny and taxonomy of Near and Middle Eastern Vipers. ZooKeys, 31: 179-191.", type: "phylogeny" },
            { citation: "Ananjeva, N.B. et al. (2006). Reptiles of Central Asia: A Field Guide. Pensoft Publishers.", type: "review" },
            { citation: "Bogdanov, O.P. (1960). Fauna of the Uzbek SSR. Vol. 1. Tashkent. [In Russian]", type: "regional" },
            { citation: "Red Book of the Republic of Uzbekistan. Vol. II. Animals. (2019). 3rd edition. Tashkent.", type: "conservation" }
        ],
        notes: "VENOMOUS. Large viper, up to 1.5m. Several subspecies. Declining due to persecution",
        researchPlans: "Population assessment; subspecies clarification; conservation strategy; venom studies for antivenom development"
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
    },
    {
        title: "Fauna of the Uzbek SSR. Vol. 1. Amphibians and Reptiles",
        authors: "Bogdanov, O.P.",
        citation: "Izd. AN UzSSR, Tashkent (1960) [In Russian]",
        url: null
    },
    {
        title: "The Amphibians of the Former Soviet Union",
        authors: "Kuzmin, S.L.",
        citation: "Pensoft, Sofia-Moscow, 538 pp. (1999)",
        url: null
    },
    {
        title: "Cenozoic aridization in Central Eurasia shaped diversification of toad-headed agamas (Phrynocephalus)",
        authors: "Solovyeva, E.N. et al.",
        citation: "PeerJ, 6: e4543 (2018)",
        url: "https://peerj.com/articles/4543/"
    },
    {
        title: "Reptiles of Turkmenistan",
        authors: "Bogdanov, O.P.",
        citation: "Ashkhabad (1962) [In Russian]",
        url: null
    },
    {
        title: "Herpetologia Rossica",
        authors: "Nikolsky, A.M.",
        citation: "Mémoires de l'Académie Impériale des Sciences de St.-Pétersbourg, 8, 17(1): 1-518 (1910)",
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
        species: ["Testudo horsfieldii", "Varanus caspius", "Teratoscincus rustamowi", "Phrynocephalus strauchi"],
        timeline: "2026-2028"
    },
    {
        title: "Taxonomy of Uzbek Agamids",
        description: "Comprehensive molecular and morphological study to clarify taxonomy of agamids in Uzbekistan, particularly Laudakia, Paralaudakia, and Phrynocephalus complexes. Preliminary data suggest potential undescribed species diversity in mountain regions and unresolved relationships within genera.",
        species: ["Paralaudakia lehmanni", "Paralaudakia bochariensis", "Phrynocephalus helioscopus", "Phrynocephalus reticulatus", "Phrynocephalus strauchi"],
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
        species: ["Naja oxiana", "Macrovipera lebetinus", "Echis carinatus", "Vipera renardi"],
        timeline: "2026-2029"
    },
    {
        title: "Mountain Herpetofauna of the Western Tian Shan",
        description: "Ecological and conservation study of high-elevation species in Uzbekistan's mountains. Focus on the endemic Turkestanian Salamander, montane reptiles, and climate change impacts. Includes population monitoring, habitat assessment, and predictive modeling of climate change effects.",
        species: ["Paralaudakia lehmanni", "Macrovipera lebetinus"],
        timeline: "2027-2030"
    },
    {
        title: "Desert Monitor Conservation Action Plan",
        description: "Urgent conservation initiative for the declining Desert Monitor. Includes population surveys across historical range, habitat assessment, threat analysis (persecution, habitat loss), captive breeding feasibility study, and public awareness campaign to reduce persecution.",
        species: ["Varanus caspius"],
        timeline: "2026-2028"
    },
    {
        title: "Genomic Resources Development",
        description: "Building genomic resources for Central Asian herpetofauna through collection of tissue samples, DNA sequencing (mitochondrial and nuclear markers), and deposition in NCBI databases. Priority given to endemic, threatened, and taxonomically problematic species.",
        species: ["All Uzbekistan herpetofauna - systematic sampling"],
        timeline: "Ongoing 2026-2030"
    }
];

// ═══════════════════════════════════════════
// Locality Data — multi-point records per species
// ═══════════════════════════════════════════
const localityData = {
    "Bufotes viridis": [
        { lat: 41.31, lng: 69.28, label: "Tashkent city", source: "Martin et al. 2017" },
        { lat: 39.65, lng: 66.96, label: "Samarkand environs", source: "Martin et al. 2017" },
        { lat: 39.77, lng: 64.42, label: "Bukhara oasis", source: "Bogdanov 1960" },
        { lat: 40.50, lng: 71.80, label: "Fergana city", source: "Bogdanov 1960" },
        { lat: 38.80, lng: 65.80, label: "Karshi steppe", source: "Field obs." }
    ],
    "Bufotes pewzowi": [
        { lat: 40.78, lng: 71.79, label: "Fergana Valley, east", source: "Stöck et al. 2006" },
        { lat: 41.00, lng: 71.67, label: "Namangan", source: "Bogdanov 1960" },
        { lat: 40.53, lng: 70.94, label: "Kokand", source: "Bogdanov 1960" },
        { lat: 41.30, lng: 69.30, label: "Tashkent area (syntopy zone)", source: "Stöck et al. 2001" }
    ],
    "Bufotes perrini": [
        { lat: 39.65, lng: 66.95, label: "Samarkand", source: "Stöck et al. 2013" },
        { lat: 39.77, lng: 64.42, label: "Bukhara", source: "Stöck et al. 2013" },
        { lat: 38.80, lng: 65.80, label: "Karshi", source: "Field obs." }
    ],
    "Bufotes sitibundus": [
        { lat: 37.83, lng: 67.60, label: "Termez area", source: "Bogdanov 1960" },
        { lat: 38.30, lng: 67.80, label: "Denau, Surkhandarya", source: "Field obs." },
        { lat: 38.00, lng: 68.20, label: "Babatag Range foothills", source: "Martin et al. 2017" }
    ],
    "Pelophylax ridibundus": [
        { lat: 41.30, lng: 69.20, label: "Tashkent, Chirchik River", source: "Martin et al. 2017" },
        { lat: 39.65, lng: 66.96, label: "Samarkand, Zarafshan R.", source: "Bogdanov 1960" },
        { lat: 40.78, lng: 72.00, label: "Syr Darya, Fergana", source: "Bogdanov 1960" },
        { lat: 42.46, lng: 59.60, label: "Amu Darya delta, Karakalpakstan", source: "Kuzmin 1999" },
        { lat: 39.77, lng: 64.42, label: "Bukhara canals", source: "Field obs." }
    ],
    "Testudo horsfieldii": [
        { lat: 40.50, lng: 64.50, label: "Kyzylkum, central", source: "Bogdanov 1960" },
        { lat: 38.80, lng: 65.80, label: "Karshi steppe", source: "Red Book Uz 2019" },
        { lat: 39.65, lng: 66.96, label: "Samarkand foothills", source: "Martin et al. 2017" },
        { lat: 41.00, lng: 69.00, label: "Tashkent region", source: "Martin et al. 2017" },
        { lat: 37.83, lng: 67.60, label: "Surkhandarya lowlands", source: "Bogdanov 1960" },
        { lat: 40.78, lng: 71.79, label: "Fergana Valley", source: "Bogdanov 1960" }
    ],
    "Paralaudakia lehmanni": [
        { lat: 41.60, lng: 70.00, label: "Chimgan rocks", source: "Ananjeva et al. 2006" },
        { lat: 41.73, lng: 70.10, label: "Beldersay cliffs", source: "Martin et al. 2017" },
        { lat: 41.80, lng: 70.25, label: "Pskem gorge", source: "Bogdanov 1960" },
        { lat: 41.50, lng: 70.30, label: "Chatkal Reserve", source: "Bogdanov 1960" }
    ],
    "Paralaudakia bochariensis": [
        { lat: 39.00, lng: 66.80, label: "Samarkand foothills", source: "Bogdanov 1960" },
        { lat: 38.50, lng: 67.50, label: "Surkhandarya rocks", source: "Ananjeva et al. 2006" },
        { lat: 39.10, lng: 67.30, label: "Zarafshan Range", source: "Martin et al. 2017" }
    ],
    "Trapelus sanguinolentus": [
        { lat: 41.00, lng: 64.00, label: "Kyzylkum edge", source: "Bogdanov 1960" },
        { lat: 40.50, lng: 68.00, label: "Jizzakh steppe", source: "Martin et al. 2017" },
        { lat: 39.00, lng: 66.00, label: "Samarkand lowlands", source: "Martin et al. 2017" },
        { lat: 42.00, lng: 60.00, label: "Karakalpakstan plain", source: "Bogdanov 1960" }
    ],
    "Phrynocephalus helioscopus": [
        { lat: 42.00, lng: 62.00, label: "Khorezm lowlands", source: "Solovyeva et al. 2018" },
        { lat: 41.50, lng: 63.50, label: "Kyzylkum NE", source: "Bogdanov 1960" },
        { lat: 42.50, lng: 59.50, label: "Aral Sea vicinity", source: "Shcherbak 1993" },
        { lat: 40.50, lng: 65.00, label: "Navoi region", source: "Bogdanov 1960" }
    ],
    "Phrynocephalus interscapularis": [
        { lat: 43.00, lng: 59.00, label: "Ustyurt Plateau edge", source: "Bogdanov 1960" },
        { lat: 42.50, lng: 59.50, label: "Kungrad district", source: "Shcherbak 1993" },
        { lat: 42.80, lng: 58.50, label: "NW Karakalpakstan", source: "Bogdanov 1960" }
    ],
    "Phrynocephalus mystaceus": [
        { lat: 40.00, lng: 63.00, label: "Kyzylkum central", source: "Bogdanov 1960" },
        { lat: 41.00, lng: 62.00, label: "Bukhara sands", source: "Bogdanov 1960" },
        { lat: 42.50, lng: 59.50, label: "Karakalpakstan dunes", source: "Shcherbak 1993" },
        { lat: 39.50, lng: 64.00, label: "Bukhara environs", source: "Martin et al. 2017" }
    ],
    "Phrynocephalus reticulatus": [
        { lat: 41.00, lng: 61.00, label: "Kyzylkum west", source: "Bogdanov 1960" },
        { lat: 42.00, lng: 60.00, label: "Khorezm sands", source: "Bogdanov 1960" },
        { lat: 40.50, lng: 63.00, label: "Navoi sands", source: "Solovyeva et al. 2018" },
        { lat: 41.50, lng: 62.00, label: "Kyzylkum NW", source: "Bogdanov 1960" }
    ],
    "Phrynocephalus raddei": [
        { lat: 38.00, lng: 67.00, label: "Surkhandarya foothills", source: "Bogdanov 1960" },
        { lat: 38.40, lng: 67.60, label: "Denau area", source: "Ananjeva et al. 2006" },
        { lat: 37.83, lng: 67.60, label: "Termez environs", source: "Martin et al. 2017" }
    ],
    "Phrynocephalus strauchi": [
        { lat: 40.70, lng: 71.50, label: "Fergana Valley, west", source: "Solovyeva et al. 2018" },
        { lat: 40.50, lng: 71.80, label: "Fergana city environs", source: "Bogdanov 1960" },
        { lat: 41.00, lng: 71.67, label: "Namangan sands", source: "Red Book Uz 2019" }
    ],
    "Phrynocephalus rossikowi": [
        { lat: 42.50, lng: 59.50, label: "Aral Sea area", source: "Bogdanov 1960" },
        { lat: 43.00, lng: 58.50, label: "Ustyurt edge", source: "Shcherbak 1993" },
        { lat: 42.00, lng: 60.00, label: "Kungrad", source: "Bogdanov 1960" }
    ],
    "Teratoscincus scincus": [
        { lat: 41.50, lng: 63.00, label: "Kyzylkum, Zarafshan sands", source: "Bogdanov 1960" },
        { lat: 40.50, lng: 62.00, label: "Bukhara sands", source: "Martin et al. 2017" },
        { lat: 42.00, lng: 60.00, label: "Khorezm sands", source: "Bogdanov 1960" },
        { lat: 39.50, lng: 64.00, label: "SW Kyzylkum", source: "Field obs." }
    ],
    "Teratoscincus rustamowi": [
        { lat: 40.60, lng: 71.80, label: "Fergana Valley, SE", source: "Red Book Uz 2019" },
        { lat: 40.40, lng: 71.50, label: "Fergana Valley, SW", source: "Bogdanov 1960" },
        { lat: 40.70, lng: 72.00, label: "Near Fergana city", source: "Field obs." }
    ],
    "Mediodactylus russowi": [
        { lat: 39.50, lng: 66.00, label: "Samarkand rocks", source: "Bogdanov 1960" },
        { lat: 38.80, lng: 66.50, label: "Shakhrisabz", source: "Ananjeva et al. 2006" },
        { lat: 39.00, lng: 67.50, label: "Baysun rocks", source: "Martin et al. 2017" }
    ],
    "Tenuidactylus fedtschenkoi": [
        { lat: 40.00, lng: 66.00, label: "Nuratau Mts.", source: "Bogdanov 1960" },
        { lat: 39.65, lng: 66.96, label: "Samarkand ruins", source: "Martin et al. 2017" },
        { lat: 41.30, lng: 69.30, label: "Tashkent old town", source: "Martin et al. 2017" },
        { lat: 38.80, lng: 66.50, label: "Shakhrisabz", source: "Bogdanov 1960" }
    ],
    "Crossobamon eversmanni": [
        { lat: 40.50, lng: 62.00, label: "Bukhara sands", source: "Bogdanov 1960" },
        { lat: 41.50, lng: 63.00, label: "Kyzylkum central", source: "Bogdanov 1960" },
        { lat: 39.50, lng: 64.00, label: "SW Kyzylkum", source: "Field obs." }
    ],
    "Alsophylax loricatus": [
        { lat: 40.80, lng: 71.00, label: "Fergana Valley foothills", source: "Bogdanov 1960" },
        { lat: 41.30, lng: 69.30, label: "Tashkent outskirts", source: "Martin et al. 2017" },
        { lat: 40.50, lng: 68.00, label: "Jizzakh foothills", source: "Bogdanov 1960" }
    ],
    "Eremias velox": [
        { lat: 41.00, lng: 64.00, label: "Kyzylkum edge", source: "Bogdanov 1960" },
        { lat: 39.65, lng: 66.96, label: "Samarkand", source: "Martin et al. 2017" },
        { lat: 41.30, lng: 69.30, label: "Tashkent area", source: "Martin et al. 2017" },
        { lat: 40.78, lng: 71.79, label: "Fergana Valley", source: "Bogdanov 1960" },
        { lat: 42.00, lng: 60.00, label: "Khorezm", source: "Bogdanov 1960" }
    ],
    "Eremias grammica": [
        { lat: 41.50, lng: 62.50, label: "Kyzylkum NW", source: "Bogdanov 1960" },
        { lat: 40.50, lng: 63.00, label: "Navoi sands", source: "Bogdanov 1960" },
        { lat: 42.00, lng: 60.00, label: "Khorezm desert", source: "Bogdanov 1960" }
    ],
    "Eremias lineolata": [
        { lat: 40.50, lng: 63.00, label: "Navoi region", source: "Bogdanov 1960" },
        { lat: 41.50, lng: 62.50, label: "Kyzylkum", source: "Bogdanov 1960" },
        { lat: 39.50, lng: 64.00, label: "Bukhara steppe", source: "Martin et al. 2017" }
    ],
    "Eremias scripta": [
        { lat: 40.70, lng: 72.00, label: "Fergana SE", source: "Bogdanov 1960" },
        { lat: 40.50, lng: 71.50, label: "Fergana Valley", source: "Bogdanov 1960" },
        { lat: 41.00, lng: 71.67, label: "Namangan sands", source: "Field obs." }
    ],
    "Eremias intermedia": [
        { lat: 40.00, lng: 64.00, label: "Kyzylkum south", source: "Bogdanov 1960" },
        { lat: 41.50, lng: 63.00, label: "Kyzylkum central", source: "Bogdanov 1960" },
        { lat: 42.00, lng: 60.00, label: "Khorezm desert", source: "Bogdanov 1960" }
    ],
    "Eremias regeli": [
        { lat: 38.00, lng: 67.50, label: "Surkhandarya foothills", source: "Bogdanov 1960" },
        { lat: 38.40, lng: 67.80, label: "Denau slopes", source: "Field obs." },
        { lat: 37.83, lng: 67.60, label: "Termez environs", source: "Bogdanov 1960" }
    ],
    "Eremias nigrocellata": [
        { lat: 38.50, lng: 67.00, label: "Surkhandarya mountains", source: "Bogdanov 1960" },
        { lat: 38.20, lng: 67.50, label: "Baysun range", source: "Bogdanov 1960" },
        { lat: 37.83, lng: 67.60, label: "Termez area", source: "Field obs." }
    ],
    "Varanus caspius": [
        { lat: 40.00, lng: 62.00, label: "Kyzylkum, Bukhara region", source: "Red Book Uz 2019" },
        { lat: 41.50, lng: 63.00, label: "Kyzylkum central", source: "Bogdanov 1960" },
        { lat: 42.00, lng: 60.00, label: "Khorezm desert", source: "Bogdanov 1960" },
        { lat: 39.50, lng: 64.00, label: "SW Kyzylkum", source: "Field obs." }
    ],
    "Pseudopus apodus": [
        { lat: 41.00, lng: 70.00, label: "W Tian Shan foothills", source: "Bogdanov 1960" },
        { lat: 41.50, lng: 70.20, label: "Chimgan area", source: "Bogdanov 1960" },
        { lat: 41.30, lng: 69.50, label: "Tashkent hills", source: "Martin et al. 2017" }
    ],
    "Eryx tataricus": [
        { lat: 40.00, lng: 68.00, label: "Jizzakh foothills", source: "Bogdanov 1960" },
        { lat: 38.50, lng: 67.50, label: "Surkhandarya", source: "Bogdanov 1960" },
        { lat: 40.78, lng: 71.79, label: "Fergana Valley", source: "Bogdanov 1960" },
        { lat: 39.65, lng: 66.96, label: "Samarkand area", source: "Martin et al. 2017" }
    ],
    "Eryx miliaris": [
        { lat: 41.00, lng: 62.00, label: "Kyzylkum W", source: "Bogdanov 1960" },
        { lat: 40.50, lng: 63.00, label: "Navoi sands", source: "Bogdanov 1960" },
        { lat: 42.00, lng: 60.00, label: "Khorezm desert", source: "Bogdanov 1960" }
    ],
    "Natrix tessellata": [
        { lat: 40.50, lng: 68.00, label: "Syr Darya, Jizzakh", source: "Martin et al. 2017" },
        { lat: 41.30, lng: 69.20, label: "Chirchik River, Tashkent", source: "Martin et al. 2017" },
        { lat: 39.65, lng: 66.96, label: "Zarafshan River", source: "Bogdanov 1960" },
        { lat: 42.46, lng: 59.60, label: "Amu Darya delta", source: "Bogdanov 1960" }
    ],
    "Psammophis lineolatus": [
        { lat: 40.00, lng: 63.00, label: "Kyzylkum central", source: "Bogdanov 1960" },
        { lat: 41.50, lng: 62.50, label: "Kyzylkum NW", source: "Bogdanov 1960" },
        { lat: 39.50, lng: 64.50, label: "Bukhara steppe", source: "Martin et al. 2017" },
        { lat: 42.00, lng: 60.00, label: "Khorezm", source: "Bogdanov 1960" },
        { lat: 38.80, lng: 65.80, label: "Karshi steppe", source: "Bogdanov 1960" }
    ],
    "Elaphe sauromates": [
        { lat: 38.50, lng: 67.00, label: "Surkhandarya slopes", source: "Bogdanov 1960" },
        { lat: 38.80, lng: 66.50, label: "Shakhrisabz area", source: "Bogdanov 1960" },
        { lat: 39.10, lng: 67.30, label: "Zarafshan Range", source: "Field obs." }
    ],
    "Lycodon bicolor": [
        { lat: 39.00, lng: 67.00, label: "Baysun mountains", source: "Bogdanov 1960" },
        { lat: 38.50, lng: 67.50, label: "Surkhandarya gorges", source: "Bogdanov 1960" },
        { lat: 38.30, lng: 67.80, label: "Denau area", source: "Field obs." }
    ],
    "Boiga trigonata": [
        { lat: 38.00, lng: 68.00, label: "Babatag Range", source: "Bogdanov 1960" },
        { lat: 37.83, lng: 67.60, label: "Termez rocks", source: "Bogdanov 1960" },
        { lat: 38.30, lng: 67.80, label: "Denau shrubs", source: "Field obs." }
    ],
    "Naja oxiana": [
        { lat: 39.00, lng: 67.00, label: "Baysun foothills", source: "Kazemi-Lomedasht et al. 2019" },
        { lat: 38.50, lng: 67.50, label: "Surkhandarya mountains", source: "Bogdanov 1960" },
        { lat: 41.00, lng: 70.00, label: "W Tian Shan (rare)", source: "Bogdanov 1960" },
        { lat: 39.65, lng: 66.96, label: "Samarkand foothills", source: "Field obs." }
    ],
    "Macrovipera lebetinus": [
        { lat: 39.00, lng: 68.00, label: "Surkhandarya mountains", source: "Bogdanov 1960" },
        { lat: 41.60, lng: 70.00, label: "Chimgan, W Tian Shan", source: "Bogdanov 1960" },
        { lat: 40.70, lng: 71.50, label: "Fergana foothills", source: "Bogdanov 1960" },
        { lat: 38.50, lng: 67.50, label: "Baysun Range", source: "Martin et al. 2017" }
    ],
    "Vipera renardi": [
        { lat: 42.00, lng: 63.00, label: "Kyzylkum NE steppe", source: "Bogdanov 1960" },
        { lat: 42.50, lng: 59.50, label: "Karakalpakstan steppe", source: "Shcherbak 1993" },
        { lat: 41.50, lng: 62.50, label: "NW Kyzylkum edge", source: "Field obs." }
    ],
    "Echis carinatus": [
        { lat: 38.00, lng: 67.50, label: "Surkhandarya rocks", source: "Bogdanov 1960" },
        { lat: 38.40, lng: 67.80, label: "Denau foothills", source: "Bogdanov 1960" },
        { lat: 37.83, lng: 67.60, label: "Termez environs", source: "Red Book Uz 2019" }
    ]
};
