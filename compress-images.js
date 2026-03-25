import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, 'public');

async function compressImage(inputPath, outputPath, quality = 80) {
  try {
    const metadata = await sharp(inputPath).metadata();
    
    await sharp(inputPath)
      .resize({
        width: Math.min(metadata.width, 1200),
        height: Math.min(metadata.height, 1200),
        fit: 'inside',
        withoutEnlargement: true
      })
      .jpeg({ quality: quality, mozjpeg: true })
      .toFile(outputPath + '.tmp');
    
    // Replace original with compressed version
    fs.renameSync(outputPath + '.tmp', outputPath);
    
    const originalSize = fs.statSync(inputPath).size;
    const compressedSize = fs.statSync(outputPath).size;
    const savings = ((1 - compressedSize / originalSize) * 100).toFixed(1);
    
    console.log(`✓ ${path.basename(inputPath)}: ${(originalSize / 1024).toFixed(0)}KB → ${(compressedSize / 1024).toFixed(0)}KB (${savings}% smaller)`);
  } catch (error) {
    console.error(`✗ Error compressing ${path.basename(inputPath)}:`, error.message);
  }
}

async function compressAllImages() {
  console.log('Starting image compression...\n');
  
  const images = [
    '1brightgrass.jpg',
    '1grass.jpg',
    '1grassii.jpg',
    '1grassIII.jpg',
    '1landscape.jpg',
    '1parking.jpg',
    '1sky.jpg',
    '1skygrass.jpg',
    '1tondeuse.jpg',
    'plants homepage.jpg',
    'ignartonosbg-leaves-9244714.jpg'
  ];
  
  for (const image of images) {
    const inputPath = path.join(inputDir, image);
    if (fs.existsSync(inputPath)) {
      await compressImage(inputPath, inputPath, 75);
    }
  }
  
  console.log('\n✓ All images compressed!');
}

compressAllImages();
