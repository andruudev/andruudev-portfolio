import assert from 'node:assert/strict';
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { translations } from '../src/i18n/translations.js';

function files(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) =>
    entry.isDirectory() ? files(join(directory, entry.name)) : [join(directory, entry.name)],
  );
}

assert(existsSync('dist/index.html'), 'Run npm run build before verifying the site.');
const problems = [];
const pages = files('dist').filter((file) => file.endsWith('.html'));
for (const file of pages) {
  const html = readFileSync(file, 'utf8');
  if (html.includes('id="app"') && !/<html[^>]*lang="en"/.test(html)) problems.push(`${file}: initial language must be English`);
  if (html.includes('id="app"') && [...html.matchAll(/<h1(?:\s|>)/g)].length !== 1) problems.push(`${file}: expected one main heading`);
  for (const [, attribute, value] of html.matchAll(/\b(href|src)="([^"]+)"/g)) {
    if (!value.startsWith('/') || value.startsWith('//')) continue;
    const pathname = decodeURIComponent(value.split(/[?#]/)[0]);
    const target = resolve('dist', '.' + pathname);
    if (!(existsSync(target) && statSync(target).isFile()) && !existsSync(join(target, 'index.html'))) {
      problems.push(`${file}: broken ${attribute} ${value}`);
    }
  }
}

for (const [collection, translationDirectory, route, language] of [
  ['projects', 'project-translations', 'project', 'Spanish'],
  ['blog', 'blog-translations', 'blog', 'English'],
]) {
  for (const file of files(`src/content/${collection}`).filter(file => file.endsWith('.md'))) {
    const name = file.split('/').at(-1);
    if (!existsSync(join(`src/content/${translationDirectory}`, name))) problems.push(`Missing ${language} translation: ${name}`);
    const id = name.replace(/\.md$/, '');
    const page = readFileSync(`dist/portfolio/${route}/${id}/index.html`, 'utf8');
    for (const lang of ['en', 'es']) {
      if (!page.includes(`data-language-content="${lang}"`)) problems.push(`Missing ${lang} body: ${route}/${id}`);
    }
  }
}
for (const file of files('dist').filter(file => file.endsWith('.css'))) {
  for (const [, path] of readFileSync(file, 'utf8').matchAll(/url\(["']?(\/[^)"']+)["']?\)/g)) {
    if (!existsSync(resolve('dist', '.' + path))) problems.push(`${file}: missing CSS resource ${path}`);
  }
}

const keys = new Set(files('src').filter((file) => file.endsWith('.astro')).flatMap((file) =>
  [...readFileSync(file, 'utf8').matchAll(/(?:data-t|data-i18n-aria)="([^"]+)"/g)].map((match) => match[1]),
));
for (const lang of ['en', 'es']) {
  for (const key of keys) {
    if (!translations[lang][key]) problems.push(`Missing ${lang} translation: ${key}`);
  }
}
const config = readFileSync('astro.config.mjs', 'utf8');
const site = config.match(/site:\s*['"]([^'"]+)['"]/)[1];
assert(readFileSync('dist/robots.txt', 'utf8').includes(`${site}/sitemap-index.xml`), 'robots.txt must use the configured site domain.');
assert.equal(problems.length, 0, problems.join('\n'));
console.log(`Verified ${pages.length} HTML files, internal links/assets, and ${keys.size} translation keys in both languages.`);
