# Herpetofauna of Uzbekistan

A comprehensive database of reptiles and amphibians found in Uzbekistan, including taxonomic information, distribution data, conservation status, genomic resources, and ongoing research.

## Features

- **Interactive Species Database**: Browse and filter species by taxonomic group and conservation status
- **Detailed Species Pages**: View comprehensive information including distribution maps, habitat, and genomic data
- **Literature Repository**: Curated list of key publications on Central Asian herpetofauna
- **Research Plans**: Overview of ongoing and planned research projects
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## How to Use

### Viewing the Website Locally

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/uzbekistan-herps.git
   cd uzbekistan-herps
   ```

2. Open `index.html` in your web browser, or serve it locally:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Then open http://localhost:8000 in your browser
   ```

### Deploying to GitHub Pages

1. Push your repository to GitHub

2. Go to your repository settings on GitHub

3. Navigate to "Pages" in the left sidebar

4. Under "Source", select your main branch and click "Save"

5. Your site will be published at `https://yourusername.github.io/uzbekistan-herps/`

## Adding Data

### Adding Species

Edit `js/data.js` and add new species to the `speciesData` array following this template:

```javascript
{
    scientificName: "Genus species",
    commonName: "Common Name",
    class: "Reptilia", // or "Amphibia"
    order: "OrderName",
    family: "FamilyName",
    subfamily: null, // or "SubfamilyName"
    distribution: "Description of distribution in Uzbekistan",
    habitat: "Habitat description",
    iucnStatus: "LC", // LC, NT, VU, EN, CR, or DD
    nationalStatus: "National conservation status if different",
    coordinates: {
        lat: 41.3775,  // Latitude for map
        lng: 64.5853   // Longitude for map
    },
    ncbiData: [
        {
            type: "Nucleotide (COI)",
            url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=..."
        }
    ],
    notes: "Additional notes",
    researchPlans: "Your research plans for this species"
}
```

### Adding Literature

Add entries to the `literatureData` array:

```javascript
{
    title: "Article Title",
    authors: "Author, A.B. & Coauthor, C.D.",
    citation: "Journal Name, Volume(Issue): Pages (Year)",
    url: "https://doi.org/..." // optional
}
```

### Adding Research Plans

Add entries to the `researchPlans` array:

```javascript
{
    title: "Project Title",
    description: "Detailed description of the research project",
    species: ["Species 1", "Species 2"], // optional
    timeline: "2026-2028" // optional
}
```

## File Structure

```
uzbekistan-herps/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styling
├── js/
│   ├── data.js         # Species, literature, and research data
│   └── main.js         # Main JavaScript functionality
├── images/             # Species images (optional)
└── README.md           # This file
```

## Customization

### Changing Colors

Edit the CSS variables in `css/styles.css`:

```css
:root {
    --primary-color: #2c5f2d;
    --secondary-color: #97bc62;
    --accent-color: #ff6b35;
    /* ... */
}
```

### Adding Species Images

1. Add images to the `images/` folder
2. Reference them in your species data:
   ```javascript
   image: "images/species-name.jpg"
   ```
3. Update the card template in `js/main.js` to display images

## Contributing

Contributions are welcome! To contribute:

1. Fork this repository
2. Create a new branch for your changes
3. Make your changes and commit them
4. Push to your fork and submit a pull request

Please ensure your data follows the existing format and includes proper citations.

## Citation

If you use this database in your research, please cite it as:

```
[Your Name]. (2026). Herpetofauna of Uzbekistan Database. 
GitHub repository: https://github.com/yourusername/uzbekistan-herps
```

## License

This project is licensed under the MIT License - see below:

```
MIT License

Copyright (c) 2026 [Your Name]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation data to deal in the Data without 
restriction, including without limitation the rights to use, copy, modify, 
merge, publish, distribute, sublicense, and/or sell copies of the Data, and 
to permit persons to whom the Data is furnished to do so, subject to the 
following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Data.

THE DATA IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED.
```

## Contact

- Email: your.email@example.com
- GitHub: [@yourusername](https://github.com/yourusername)

## Acknowledgments

- Data compiled from various published sources (see Literature section)
- Map functionality provided by Leaflet.js and OpenStreetMap
- Genomic data links to NCBI databases

---

**Last Updated**: February 2026
