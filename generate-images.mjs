import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const assetsDir = 'public/assets';

if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir, { recursive: true });
}

const svgs = {
    'cone.png': `<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="coneGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#a855f7;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#6d28d9;stop-opacity:1" />
      </linearGradient>
    </defs>
    <path d="M 100 20 L 170 180 L 30 180 Z" fill="url(#coneGradient)" stroke="#7c3aed" stroke-width="2"/>
    <circle cx="100" cy="50" r="8" fill="#e0d5ff" opacity="0.6"/>
  </svg>`,

    'cube.png': `<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="cubeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#06b6d4;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#0891b2;stop-opacity:1" />
      </linearGradient>
    </defs>
    <rect x="40" y="40" width="120" height="120" fill="url(#cubeGradient)" stroke="#0ea5e9" stroke-width="2"/>
    <line x1="40" y1="40" x2="20" y2="20" stroke="#0ea5e9" stroke-width="2"/>
    <line x1="160" y1="40" x2="180" y2="20" stroke="#0ea5e9" stroke-width="2"/>
    <line x1="40" y1="160" x2="20" y2="180" stroke="#0ea5e9" stroke-width="2"/>
    <line x1="160" y1="160" x2="180" y2="180" stroke="#0ea5e9" stroke-width="2"/>
  </svg>`,

    'star-large.png': `<svg width="240" height="240" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#fbbf24;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#f59e0b;stop-opacity:1" />
      </linearGradient>
    </defs>
    <polygon points="120,20 145,100 230,100 170,150 195,230 120,180 45,230 70,150 10,100 95,100" fill="url(#starGradient)" stroke="#f97316" stroke-width="2"/>
    <circle cx="120" cy="80" r="6" fill="#fef3c7" opacity="0.8"/>
  </svg>`,

    'star-small.png': `<svg width="160" height="160" viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="smallStarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#ec4899;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#be185d;stop-opacity:1" />
      </linearGradient>
    </defs>
    <polygon points="80,15 98,65 152,65 110,100 128,150 80,115 32,150 50,100 8,65 62,65" fill="url(#smallStarGradient)" stroke="#db2777" stroke-width="1.5"/>
  </svg>`,

    'cursor.png': `<svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="cursorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#10b981;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#059669;stop-opacity:1" />
      </linearGradient>
    </defs>
    <path d="M 20 10 L 20 100 L 40 80 L 60 110 L 80 100 L 60 70 L 100 70 Z" fill="url(#cursorGradient)" stroke="#047857" stroke-width="1.5"/>
    <circle cx="30" cy="25" r="4" fill="#d1fae5" opacity="0.8"/>
  </svg>`,
};

// Logo templates
const logoSvgs = {
    'logo-ordem.png': `<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" fill="white"/>
    <text x="50" y="60" font-size="24" font-weight="bold" text-anchor="middle" fill="#a855f7">ORDEM</text>
  </svg>`,
    'logo-care.png': `<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" fill="white"/>
    <circle cx="50" cy="50" r="35" fill="none" stroke="#06b6d4" stroke-width="2"/>
    <path d="M 35 40 Q 50 55 65 40" fill="none" stroke="#06b6d4" stroke-width="2" stroke-linecap="round"/>
  </svg>`,
    'logo-esposende.png': `<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" fill="white"/>
    <rect x="25" y="25" width="50" height="50" fill="none" stroke="#ec4899" stroke-width="2"/>
    <line x1="25" y1="50" x2="75" y2="50" stroke="#ec4899" stroke-width="2"/>
  </svg>`,
    'logo-eugreen.png': `<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" fill="white"/>
    <circle cx="50" cy="50" r="30" fill="none" stroke="#10b981" stroke-width="2"/>
    <path d="M 40 50 L 48 58 L 60 40" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round"/>
  </svg>`,
    'logo-t.png': `<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" fill="white"/>
    <line x1="30" y1="30" x2="70" y2="30" stroke="#fbbf24" stroke-width="3" stroke-linecap="round"/>
    <line x1="50" y1="30" x2="50" y2="70" stroke="#fbbf24" stroke-width="3" stroke-linecap="round"/>
  </svg>`,
    'logo-evora.png': `<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" fill="white"/>
    <polygon points="50,30 70,70 30,70" fill="none" stroke="#8b5cf6" stroke-width="2" stroke-linejoin="round"/>
  </svg>`,
    'logo-uporto.png': `<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" fill="white"/>
    <circle cx="50" cy="50" r="25" fill="none" stroke="#f97316" stroke-width="2"/>
    <circle cx="50" cy="50" r="15" fill="none" stroke="#f97316" stroke-width="2"/>
  </svg>`,
};

// Generate all images
async function generateImages() {
    console.log('Generating shape images...');

    for (const [filename, svg] of Object.entries(svgs)) {
        try {
            await sharp(Buffer.from(svg))
                .png()
                .toFile(path.join(assetsDir, filename));
            console.log(`✓ Generated ${filename}`);
        } catch (err) {
            console.error(`✗ Error generating ${filename}:`, err.message);
        }
    }

    // Service card images
    const serviceSvgs = {
        'service-motion.png': `<svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="300" fill="#1a1a1a" rx="20"/>
            <rect x="30" y="40" width="340" height="220" fill="#2d2d2d" rx="15"/>
            <text x="200" y="150" font-family="Arial" font-size="48" fill="#a855f7" text-anchor="middle">{ }</text>
            <circle cx="80" cy="80" r="20" fill="#a855f7" opacity="0.3"/>
            <circle cx="320" cy="220" r="30" fill="#a855f7" opacity="0.2"/>
            <line x1="100" y1="200" x2="300" y2="200" stroke="#a855f7" stroke-width="3" opacity="0.4"/>
        </svg>`,

        'service-web.png': `<svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="300" fill="#7c3aed" rx="20"/>
            <rect x="50" y="50" width="300" height="200" fill="white" rx="10"/>
            <rect x="50" y="50" width="300" height="40" fill="#e0e0e0" rx="10 10 0 0"/>
            <circle cx="70" cy="70" r="6" fill="#ff5f56"/>
            <circle cx="90" cy="70" r="6" fill="#ffbd2e"/>
            <circle cx="110" cy="70" r="6" fill="#27c93f"/>
            <rect x="80" y="120" width="80" height="80" fill="#7c3aed" rx="8"/>
            <circle cx="250" cy="140" r="30" fill="#06b6d4" opacity="0.7"/>
            <rect x="200" y="190" width="120" height="10" fill="#e0e0e0" rx="5"/>
            <rect x="200" y="210" width="80" height="10" fill="#e0e0e0" rx="5"/>
        </svg>`,

        'service-video.png': `<svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="300" fill="#f0a8a8" rx="20"/>
            <rect x="60" y="60" width="280" height="180" fill="#ff6b6b" rx="15"/>
            <polygon points="180,120 180,180 230,150" fill="white"/>
            <rect x="80" y="220" width="50" height="6" fill="#ff9999" rx="3"/>
            <rect x="140" y="220" width="30" height="6" fill="#ff9999" rx="3"/>
            <circle cx="300" cy="100" r="15" fill="#fff" opacity="0.3"/>
            <path d="M 250 200 Q 260 190 270 200" stroke="white" fill="none" stroke-width="3" opacity="0.4"/>
        </svg>`,

        'service-app.png': `<svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="300" fill="#ffc2c2" rx="20"/>
            <rect x="80" y="40" width="240" height="220" fill="#ff6b6b" rx="12"/>
            <rect x="100" y="70" width="80" height="80" fill="#fbbf24" rx="12"/>
            <rect x="200" y="70" width="80" height="80" fill="#06b6d4" rx="12"/>
            <rect x="100" y="160" width="80" height="80" fill="#a855f7" rx="12"/>
            <rect x="200" y="160" width="80" height="80" fill="#10b981" rx="12"/>
            <circle cx="140" cy="110" r="20" fill="white" opacity="0.8"/>
            <circle cx="240" cy="200" r="20" fill="white" opacity="0.8"/>
        </svg>`
    };

    console.log('Generating logo images...');

    for (const [filename, svg] of Object.entries(logoSvgs)) {
        try {
            await sharp(Buffer.from(svg))
                .png()
                .toFile(path.join(assetsDir, filename));
            console.log(`✓ Generated ${filename}`);
        } catch (err) {
            console.error(`✗ Error generating ${filename}:`, err.message);
        }
    }

    console.log('Generating service card images...');

    for (const [filename, svg] of Object.entries(serviceSvgs)) {
        try {
            await sharp(Buffer.from(svg))
                .png()
                .toFile(path.join(assetsDir, filename));
            console.log(`✓ Generated ${filename}`);
        } catch (err) {
            console.error(`✗ Error generating ${filename}:`, err.message);
        }
    }

    console.log('Done! All images generated.');
}

generateImages();
