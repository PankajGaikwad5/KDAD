const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Accept input and output directory from CLI arguments, or use defaults
const inputDir = process.argv[2] || './images'; // folder with raw images
const outputDir = process.argv[3] || './optimized'; // folder for optimized webp images

const formats = ['jpg', 'jpeg', 'png'];

function getAllFiles(dirPath, arrayOfFiles = [], baseDir = dirPath) {
  if (!fs.existsSync(dirPath)) return arrayOfFiles;
  const files = fs.readdirSync(dirPath);

  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getAllFiles(fullPath, arrayOfFiles, baseDir);
    } else {
      const ext = path.extname(file).toLowerCase().slice(1);
      if (formats.includes(ext)) {
        const relativePath = path.relative(baseDir, fullPath);
        arrayOfFiles.push({ fullPath, relativePath, fileName: file });
      }
    }
  }
  return arrayOfFiles;
}

async function optimizeImages() {
  if (!fs.existsSync(inputDir)) {
    console.error(`❌ Input directory "${inputDir}" does not exist.`);
    return;
  }

  const images = getAllFiles(inputDir);
  console.log(`🔍 Found ${images.length} image(s) to optimize in "${inputDir}"...\n`);

  let totalProcessed = 0;
  let totalErrors = 0;

  for (const item of images) {
    const relDir = path.dirname(item.relativePath);
    const targetDir = path.join(outputDir, relDir);

    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    const outputFileName = path.parse(item.fileName).name + '.webp';
    const outputPath = path.join(targetDir, outputFileName);

    try {
      await sharp(item.fullPath)
        .resize({ width: 1600, withoutEnlargement: true })
        .webp({ quality: 75 })
        .toFile(outputPath);

      console.log(`✅ ${item.relativePath} → ${outputPath}`);
      totalProcessed++;
    } catch (err) {
      console.error(`❌ Error optimizing ${item.relativePath}:`, err);
      totalErrors++;
    }
  }

  console.log(`\n🎉 Optimization complete! Successfully processed: ${totalProcessed}, Errors: ${totalErrors}`);
}

optimizeImages();
