#!/usr/bin/env python3
"""
CSV to JavaScript Converter for Uzbekistan Herpetofauna Database

This script converts species data from CSV format to the JavaScript format
used in js/data.js. This makes it easier to manage species data in a 
spreadsheet program before converting to JavaScript.

Usage:
    python csv_to_js.py input.csv output.js

Or modify the species_template.csv and run:
    python csv_to_js.py data/species_template.csv js/data_new.js
"""

import csv
import json
import sys
from pathlib import Path


def csv_to_species_dict(csv_file):
    """Convert CSV file to list of species dictionaries."""
    species_list = []
    
    with open(csv_file, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            # Skip comment lines
            if row['scientificName'].startswith('#'):
                continue
                
            # Build ncbiData array
            ncbi_data = []
            if row['ncbiNucleotide']:
                ncbi_data.append({
                    'type': 'Nucleotide',
                    'url': row['ncbiNucleotide']
                })
            if row['ncbiGenome']:
                ncbi_data.append({
                    'type': 'Genome',
                    'url': row['ncbiGenome']
                })
            
            # Build species object
            species = {
                'scientificName': row['scientificName'],
                'commonName': row['commonName'] or None,
                'class': row['class'],
                'order': row['order'],
                'family': row['family'],
                'subfamily': row['subfamily'] or None,
                'distribution': row['distribution'],
                'habitat': row['habitat'] or None,
                'iucnStatus': row['iucnStatus'],
                'nationalStatus': row['nationalStatus'] or None,
            }
            
            # Add coordinates if present
            if row['latitude'] and row['longitude']:
                species['coordinates'] = {
                    'lat': float(row['latitude']),
                    'lng': float(row['longitude'])
                }
            else:
                species['coordinates'] = None
            
            species['ncbiData'] = ncbi_data if ncbi_data else []
            species['notes'] = row['notes'] or None
            species['researchPlans'] = row['researchPlans'] or None
            
            species_list.append(species)
    
    return species_list


def write_js_file(species_list, output_file):
    """Write species list to JavaScript file."""
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write("// Species Data for Uzbekistan Herpetofauna\n")
        f.write("// Generated from CSV using csv_to_js.py\n\n")
        f.write("const speciesData = ")
        
        # Use json.dumps with indentation for readability
        json_str = json.dumps(species_list, indent=4, ensure_ascii=False)
        f.write(json_str)
        f.write(";\n\n")
        
        # Add placeholder for literature data
        f.write("// Literature Data\n")
        f.write("const literatureData = [\n")
        f.write("    // Add your literature entries here\n")
        f.write("];\n\n")
        
        # Add placeholder for research plans
        f.write("// Research Plans\n")
        f.write("const researchPlans = [\n")
        f.write("    // Add your research plans here\n")
        f.write("];\n")


def main():
    if len(sys.argv) != 3:
        print("Usage: python csv_to_js.py input.csv output.js")
        print("\nExample:")
        print("  python csv_to_js.py data/species_template.csv js/data_new.js")
        sys.exit(1)
    
    input_file = sys.argv[1]
    output_file = sys.argv[2]
    
    if not Path(input_file).exists():
        print(f"Error: Input file '{input_file}' not found.")
        sys.exit(1)
    
    print(f"Reading species data from {input_file}...")
    species_list = csv_to_species_dict(input_file)
    
    print(f"Found {len(species_list)} species.")
    print(f"Writing JavaScript to {output_file}...")
    write_js_file(species_list, output_file)
    
    print("Done! Remember to:")
    print("1. Review the generated JavaScript file")
    print("2. Add literature data and research plans to the file")
    print("3. Replace js/data.js with your new file (or merge the content)")


if __name__ == "__main__":
    main()
