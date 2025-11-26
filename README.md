LSX Studio - Hero starter bundle
=================================

Files included:
- src/components/Navbar.tsx
- src/components/Hero.tsx
- src/components/LogoCarousel.tsx
- src/App.tsx
- src/index.css

Instructions:
1. Put your images into src/assets with these names:
   cone.png, cube.png, star-large.png, star-small.png, cursor.png
   logo-ordem.png, logo-care.png, logo-esposende.png, logo-eugreen.png, logo-t.png, logo-evora.png, logo-uporto.png

2. If you're using Vite + React + Tailwind, ensure tailwind is configured (tailwind.config.js and @tailwind directives present).
3. Copy files into your project (or replace existing App.tsx and index.css).
4. Run: npm run dev
5. Open http://localhost:5173

Notes:
- The bundle uses static paths for images (/src/assets/...). If you prefer imports (recommended in TS), update the components to import images:
  import cone from "../assets/cone.png";
  then use <img src={cone} ... />
