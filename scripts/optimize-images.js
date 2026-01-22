
import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');
const resourcesDir = path.join(projectRoot, 'resources');

const MAX_WIDTH = 1200; // Resize large images to this width
const QUALITY = 0.8;    // WebP/JPEG quality

async function optimizeImages() {
    console.log('🚀 Starting image optimization...');

    // Launch browser
    const browser = await puppeteer.launch({
        headless: "new",
        args: ['--no-sandbox']
    });
    const page = await browser.newPage();

    // Get files
    if (!fs.existsSync(resourcesDir)) {
        console.error(`❌ Resources directory not found: ${resourcesDir}`);
        await browser.close();
        return;
    }

    const files = fs.readdirSync(resourcesDir).filter(f => f.toLowerCase().endsWith('.png') || f.toLowerCase().endsWith('.jpg'));

    for (const file of files) {
        const filePath = path.join(resourcesDir, file);
        const stats = fs.statSync(filePath);
        const sizeMB = stats.size / (1024 * 1024);

        if (sizeMB > 0.5) { // Process if > 500KB
            console.log(`\n📸 Processing: ${file} (${sizeMB.toFixed(2)} MB)`);

            try {
                const fileUrl = `file://${filePath.replace(/\\/g, '/')}`;
                await page.goto(fileUrl);

                // Resize and compress via canvas in browser context
                const resultBase64 = await page.evaluate(async (maxWidth, quality) => {
                    const img = document.querySelector('img');
                    if (!img) return null;

                    // Wait for load
                    if (!img.complete) await new Promise(r => img.onload = r);

                    // Calculate new size
                    let width = img.naturalWidth;
                    let height = img.naturalHeight;

                    if (width > maxWidth) {
                        height = Math.round(height * (maxWidth / width));
                        width = maxWidth;
                    }

                    const canvas = document.createElement('canvas');
                    canvas.width = width;
                    canvas.height = height;
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0, width, height);

                    // Return base64 png (better for transparency) but with aggressive settings if possible, 
                    // OR use standard toBlob polyfill. 
                    // Puppeteer can screenshot, but canvas export is more direct for resizing.
                    return canvas.toDataURL('image/png');

                }, MAX_WIDTH, QUALITY);

                if (resultBase64) {
                    const base64Data = resultBase64.replace(/^data:image\/png;base64,/, "");
                    fs.writeFileSync(filePath, base64Data, 'base64');
                    const newStats = fs.statSync(filePath);
                    const newSizeMB = newStats.size / (1024 * 1024);
                    console.log(`✅ Optimized: ${file} -> ${newSizeMB.toFixed(2)} MB (Saved ${(sizeMB - newSizeMB).toFixed(2)} MB)`);
                } else {
                    console.warn(`⚠️ Could not process image content for ${file}`);
                }

            } catch (err) {
                console.error(`❌ Error optimizing ${file}:`, err.message);
            }
        } else {
            console.log(`Skipping ${file} (${sizeMB.toFixed(2)} MB) - already small enough`);
        }
    }

    await browser.close();
    console.log('\n✨ Optimization complete!');
}

optimizeImages();
