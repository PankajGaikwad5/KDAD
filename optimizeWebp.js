const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dir = './public/extras/kiahmoi';

async function optimizeLargeWebp() {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file.endsWith('.webp') && !file.includes('_opt')) {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);
      // Only process files larger than 100KB to avoid re-compressing small ones
      if (stat.size > 100000) {
        console.log(`Optimizing ${file} (${(stat.size / 1024 / 1024).toFixed(2)} MB)...`);
        const newFileName = file.replace('.webp', '_opt.webp');
        const newPath = path.join(dir, newFileName);
        try {
          await sharp(fullPath)
            .resize({ width: 1600, withoutEnlargement: true })
            .webp({ quality: 75 })
            .toFile(newPath);
          console.log(`✅ Compressed ${file} to ${newFileName}`);
        } catch (e) {
          console.error(`❌ Error on ${file}:`, e);
        }
      }
    }
  }
}

optimizeLargeWebp();
