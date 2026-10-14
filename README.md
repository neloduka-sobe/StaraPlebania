# Stara Plebania

Website for Stara Plebania — https://stplebania.pl

React + Vite + Tailwind CSS v4. The page is prerendered to static HTML at build
time (`scripts/prerender.js`, which also inlines the CSS) and hydrated in the browser.
Production builds swap React for Preact via aliases in `vite.config.ts` (~35 KB of
JS instead of ~85 KB); `npm run dev` still uses real React. If something behaves
differently after `npm run build`, test with `npm run preview`.

```sh
npm install
npm run dev      # local dev server
npm run build    # type-check, build, prerender into dist/
npm run deploy   # publish dist/ to GitHub Pages
```

- Static files (photos, favicons, `CNAME`, `404.html`) live in `public/`.
- Translations are in `src/i18n/locales/`; Polish is bundled, the others load on demand.
- Each language is prerendered to its own URL (`/`, `/en/`, `/de/`, `/es/`, `/ru/`) with translated `<title>`,
  description, hreflang links and schema.org data (`src/entry-server.tsx`). Page titles and descriptions are the
  `meta` keys in each locale. If you add a language, add it to `public/sitemap.xml` too.
- Contact details and the Booking.com link are in `src/site.ts`.
- The rooms section (`src/components/Apartments.tsx`) is currently hidden — see `src/App.tsx`.
- The Google map only loads when scrolled near (`src/components/LazyMap.tsx`) — it pulls ~500 KB of scripts.
- `hero-{800,1280,1920,2560}.webp` and `historia{2,3,4}-360.webp` are resized copies of the originals for responsive loading.
  Regenerate them if the hero photo changes, e.g. `cwebp -q 72 -resize 1280 0 hero.webp -o hero-1280.webp`.

### Favicon
This favicon was generated using the following graphics from Twitter Twemoji:

- Graphics Title: 1f3de.svg
- Graphics Author: Copyright 2020 Twitter, Inc and other contributors (https://github.com/twitter/twemoji)
- Graphics Source: https://github.com/twitter/twemoji/blob/master/assets/svg/1f3de.svg
- Graphics License: CC-BY 4.0 (https://creativecommons.org/licenses/by/4.0/)
