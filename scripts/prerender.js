// Renders the app to static HTML after `vite build`, so the page paints
// before any JavaScript runs. React then hydrates it in the browser.
// The stylesheet (a few KB) is inlined too, saving a render-blocking request.
import { readFile, rm, writeFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

const dist = resolve('dist');
const ssrDir = resolve('dist-ssr');

const { render } = await import(pathToFileURL(resolve(ssrDir, 'entry-server.js')).href);
const template = await readFile(resolve(dist, 'index.html'), 'utf8');

if (!template.includes('<!--app-->')) throw new Error('index.html is missing the <!--app--> placeholder');

let html = template.replace('<!--app-->', render());
const cssLink = /<link rel="stylesheet" crossorigin href="\/(assets\/[^"]+\.css)">/;
const match = html.match(cssLink);
if (match) {
  const css = await readFile(resolve(dist, match[1]), 'utf8');
  html = html.replace(match[0], () => `<style>${css}</style>`);
}

await writeFile(resolve(dist, 'index.html'), html);
await rm(ssrDir, { recursive: true, force: true });
console.log('Prerendered dist/index.html');
