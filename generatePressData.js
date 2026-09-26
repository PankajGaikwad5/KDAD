const fs = require('fs');
const path = require('path');

const baseDir = './public/press-coverages';
const outputFile = './src/components/pressData.json';

function generateData() {
  const data = [];

  if (!fs.existsSync(baseDir)) return;

  const years = fs.readdirSync(baseDir);
  
  for (const year of years) {
    const yearPath = path.join(baseDir, year);
    if (!fs.statSync(yearPath).isDirectory()) continue;
    
    const months = fs.readdirSync(yearPath);
    
    for (const month of months) {
      const monthPath = path.join(yearPath, month);
      if (!fs.statSync(monthPath).isDirectory()) continue;
      
      const types = fs.readdirSync(monthPath);
      
      for (const type of types) {
        const typePath = path.join(monthPath, type);
        if (!fs.statSync(typePath).isDirectory()) continue;
        
        const publications = fs.readdirSync(typePath);
        
        for (const publication of publications) {
           const pubPath = path.join(typePath, publication);
           if (fs.statSync(pubPath).isDirectory()) {
              const images = fs.readdirSync(pubPath).filter(img => img.endsWith('.webp')).map(img => `/press-coverages/${encodeURIComponent(year)}/${encodeURIComponent(month)}/${encodeURIComponent(type)}/${encodeURIComponent(publication)}/${encodeURIComponent(img)}`);
              if (images.length > 0) {
                 data.push({
                   year,
                   month,
                   type,
                   publication,
                   images
                 });
              }
           } else if (publication.endsWith('.webp')) {
              // It's a file, we should group it under the 'type' directly
              // Let's see if we already have an entry for this year/month/type with no publication
              let entry = data.find(e => e.year === year && e.month === month && e.type === type && e.publication === null);
              if (!entry) {
                 entry = {
                    year,
                    month,
                    type,
                    publication: null,
                    images: []
                 };
                 data.push(entry);
              }
              entry.images.push(`/press-coverages/${encodeURIComponent(year)}/${encodeURIComponent(month)}/${encodeURIComponent(type)}/${encodeURIComponent(publication)}`);
           }
        }
      }
    }
  }

  fs.writeFileSync(outputFile, JSON.stringify(data, null, 2));
  console.log(`✅ Press data generated at ${outputFile}`);
}

generateData();
