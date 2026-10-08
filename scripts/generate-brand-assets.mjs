import sharp from 'sharp';
import { readFileSync } from 'node:fs';

const pub = 'public';
const faviconSvg = readFileSync(`${pub}/favicon.svg`);

const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0b0f19"/>
      <stop offset="55%" stop-color="#132047"/>
      <stop offset="100%" stop-color="#1d4ed8"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect x="0" y="0" width="1200" height="10" fill="#f59e0b"/>

  <g transform="translate(88 168) scale(4.2)" fill="none" stroke="#ffffff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 34a2 2 0 0 0 2 2h32a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2z"/>
    <path d="M13 18v-6a9 9 0 0 1 18 0v6"/>
    <path d="M22 12V9"/>
  </g>
  <rect x="88" y="360" width="180" height="10" rx="5" fill="#f59e0b"/>

  <text x="88" y="470" font-family="Helvetica, Arial, sans-serif" font-size="76" font-weight="bold" fill="#ffffff">Constru Construcciones</text>
  <text x="88" y="534" font-family="Helvetica, Arial, sans-serif" font-size="34" fill="#93c5fd">Construcción · Obra civil · Suministro de materiales</text>
  <text x="1112" y="534" text-anchor="end" font-family="Helvetica, Arial, sans-serif" font-size="30" font-weight="bold" fill="#f59e0b">Fuerza que construye</text>
</svg>`;

const tasks = [
  sharp(faviconSvg).resize(192, 192).png().toFile(`${pub}/icon-192.png`),
  sharp(faviconSvg).resize(512, 512).png().toFile(`${pub}/icon-512.png`),
  sharp(faviconSvg).resize(32, 32).png().toFile(`${pub}/favicon-32.png`),
  sharp(faviconSvg).resize(180, 180).png().toFile(`${pub}/apple-touch-icon.png`),
  sharp(Buffer.from(ogSvg)).png().toFile(`${pub}/og-image.png`),
];

await Promise.all(tasks);
console.log('imagenes generadas');
