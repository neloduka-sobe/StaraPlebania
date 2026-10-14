// Renders the app to static HTML after `vite build`, so the page paints
// before any JavaScript runs. React then hydrates it in the browser.
// Each language gets its own page (Polish at /, the rest at /en/ …) with
// translated <head> tags, so search engines can index every language.
// The stylesheet (a few KB) is inlined too, saving a render-blocking request.
import { mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

const dist = resolve('dist');
const ssrDir = resolve('dist-ssr');

const { render, languages } = await import(pathToFileURL(resolve(ssrDir, 'entry-server.js')).href);
let template = await readFile(resolve(dist, 'index.html'), 'utf8');

if (!template.includes('<!--app-->')) throw new Error('index.html is missing the <!--app--> placeholder');
const seoBlock = /<!--seo:[^]*?<!--\/seo-->/;
if (!seoBlock.test(template)) throw new Error('index.html is missing the <!--seo--> … <!--/seo--> block');

const cssLink = /<link rel="stylesheet" crossorigin href="\/(assets\/[^"]+\.css)">/;
const match = template.match(cssLink);
if (match) {
  const css = await readFile(resolve(dist, match[1]), 'utf8');
  template = template.replace(match[0], () => `<style>${css}</style>`);
}

const assets = await readdir(resolve(dist, 'assets'));

for (const { code } of languages) {
  const { html, head } = await render(code);
  // Non-Polish pages fetch their translations before hydrating; start that download right away.
  const chunk = code !== 'pl' && assets.find((f) => new RegExp(`^${code}-[\\w-]+\\.js$`).test(f));
  const preload = chunk ? `\n    <link rel="modulepreload" crossorigin href="/assets/${chunk}">` : '';

  const page = template
    .replace('<html lang="pl">', `<html lang="${code}">`)
    .replace(seoBlock, () => head + preload)
    .replace('<!--app-->', () => html);

  const dir = code === 'pl' ? dist : resolve(dist, code);
  await mkdir(dir, { recursive: true });
  await writeFile(resolve(dir, 'index.html'), page);
  console.log(`Prerendered ${code === 'pl' ? '' : code + '/'}index.html`);
}

await rm(ssrDir, { recursive: true, force: true });
