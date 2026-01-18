import fs from 'fs';
import puppeteer from 'puppeteer';

const url = process.argv[2];
if (!url) {
  console.error('Usage: node stylepack.js <url>');
  process.exit(1);
}

const outDir = 'stylepack_out';
fs.mkdirSync(outDir, { recursive: true });

// Jalankan Chrome headless
const browser = await puppeteer.launch({ headless: 'new' });
const page = await browser.newPage();

// Map untuk menyimpan isi setiap stylesheet
const cssByUrl = new Map();
page.on('response', async (res) => {
  try {
    const req = res.request();
    const ct = (res.headers()['content-type'] || '').toLowerCase();
    const isCss = req.resourceType() === 'stylesheet' || ct.includes('text/css');
    if (isCss) {
      const cssText = await res.text();
      cssByUrl.set(res.url(), cssText);
    }
  } catch (err) {
    // abaikan error kecil
  }
});

await page.goto(url, { waitUntil: 'networkidle0' });

// Interaksi opsional: scroll untuk memuat konten lazy‑load
await page.evaluate(async () => {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  window.scrollTo(0, 0);
  await sleep(300);
  window.scrollTo(0, document.body.scrollHeight);
  await sleep(600);
  window.scrollTo(0, 0);
});

const htmlWithInlinedCss = await page.evaluate((cssEntries) => {
  const cssMap = new Map(cssEntries);
  // Ganti setiap <link rel="stylesheet"> dengan <style>
  document.querySelectorAll('link[rel="stylesheet"]').forEach((link) => {
    const href = link.href;
    const cssText = cssMap.get(href);
    if (cssText) {
      const style = document.createElement('style');
      style.setAttribute('data-inlined-from', href);
      style.textContent = cssText;
      link.replaceWith(style);
    }
  });
  // Tambahkan meta informasi jumlah stylesheet
  const meta = document.createElement('meta');
  meta.name = 'stylepack:css-count';
  meta.content = String(cssMap.size);
  document.head.appendChild(meta);

  return '<!doctype html>\n' + document.documentElement.outerHTML;
}, Array.from(cssByUrl.entries()));

fs.writeFileSync(`${outDir}/snapshot_inlined.html`, htmlWithInlinedCss, 'utf8');
fs.writeFileSync(
  `${outDir}/styles_manifest.json`,
  JSON.stringify({ url, stylesheets: Array.from(cssByUrl.keys()) }, null, 2),
  'utf8'
);

await browser.close();
console.log('Done. Outputs in:', outDir);