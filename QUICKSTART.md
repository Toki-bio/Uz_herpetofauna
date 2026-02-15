# Quick Start Guide

## Getting Your Database Online in 5 Minutes

### Step 1: Prepare Your Repository

1. **Create a new repository on GitHub**
   - Go to github.com and create a new repository
   - Name it something like `uzbekistan-herps`
   - Don't initialize with README (we already have one)

### Step 2: Upload Your Files

```bash
# Navigate to the project folder
cd uzbekistan-herps

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Uzbekistan herpetofauna database"

# Add your GitHub repository as remote
git remote add origin https://github.com/yourusername/uzbekistan-herps.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Click **Pages** (left sidebar)
4. Under "Source", select **main** branch
5. Click **Save**
6. Wait 1-2 minutes, then visit: `https://yourusername.github.io/uzbekistan-herps/`

### Step 4: Customize Your Site

Edit these files with your information:

**js/data.js**
- Add your species data
- Add literature references
- Add research plans

**index.html**
- Update contact information in the About section
- Update GitHub repository links

**CITATION.cff**
- Add your name, email, and ORCID
- Update repository URL

**README.md**
- Update contact information
- Update license if needed

### Step 5: Add Your Data

#### Option A: Edit JavaScript Directly

Open `js/data.js` and add species following the template.

#### Option B: Use CSV Import

1. Fill in `data/species_template.csv` with your species data
2. Run the converter:
   ```bash
   python csv_to_js.py data/species_template.csv js/data_new.js
   ```
3. Review `js/data_new.js` and replace `js/data.js`

### Step 6: Update Your Site

```bash
git add .
git commit -m "Added species data"
git push
```

Your changes will be live in 1-2 minutes!

## Tips for Managing Your Data

### Working with Images

1. Add species images to the `images/` folder
2. Name them systematically: `genus-species.jpg`
3. Reference in your data (you'll need to modify the code slightly)

### Organizing Literature

Group literature by:
- Time period (historical vs. recent)
- Topic (taxonomy, ecology, conservation)
- Geographic scope

### Using Version Control

```bash
# See what's changed
git status

# Commit specific files
git add js/data.js
git commit -m "Added 5 new species records"

# View history
git log --oneline

# Undo changes (before committing)
git restore js/data.js
```

## Common Tasks

### Adding a Single Species

1. Open `js/data.js`
2. Copy an existing species entry
3. Modify the values
4. Save and commit

### Updating NCBI Links

Search NCBI and copy the URL:
```javascript
ncbiData: [
    {
        type: "Nucleotide (COI)",
        url: "https://www.ncbi.nlm.nih.gov/nuccore/?term=Testudo+horsfieldii+COI"
    }
]
```

### Adding Distribution Maps

Update the coordinates for each species:
```javascript
coordinates: {
    lat: 41.3775,  // Latitude
    lng: 64.5853   // Longitude
}
```

### Backing Up Your Data

```bash
# Create a backup
git tag -a v1.0 -m "Version 1.0 - Initial data"
git push --tags

# Or export to JSON
node -p "JSON.stringify(require('./js/data.js').speciesData)" > backup.json
```

## Troubleshooting

**Site not showing up?**
- Check GitHub Pages settings
- Make sure index.html is in the root directory
- Wait 2-3 minutes after pushing changes

**Data not displaying?**
- Check browser console for errors (F12)
- Verify JavaScript syntax in data.js
- Make sure all required fields are filled

**Maps not working?**
- Check that coordinates are valid numbers
- Ensure latitude is between -90 and 90
- Ensure longitude is between -180 and 180

## Getting Help

- Check the main README.md for detailed documentation
- Open an issue on GitHub if you encounter problems
- Review the example data in js/data.js for reference

## Next Steps

1. **Add more species** - The more complete your database, the more useful it is
2. **Get feedback** - Share with colleagues and incorporate suggestions
3. **Regular updates** - Keep your data current with new publications
4. **Promote** - Share on social media, academic networks
5. **Accept contributions** - Enable issues and pull requests for community input

---

Happy databasing! 🦎🐸
