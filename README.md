# andruudev portfolio

Static portfolio and personal links site built with Astro and TypeScript.

## Development

```sh
npm ci
npm run dev
npm run verify
```

`verify` runs Astro diagnostics, builds the site, and checks generated internal links, assets, translation keys, and the robots sitemap URL. Use `npm run preview` to inspect the production build.

## Source map

- `src/pages/index.astro`: personal links page.
- `src/pages/portfolio/`: portfolio and detail pages.
- `src/content/projects/`: project data and descriptions; the portfolio list uses this collection directly.
- `src/content/blog/`: blog articles. Set `lang` to `en` or `es` in frontmatter.
- `src/i18n/translations.js`: interface translations. Only elements marked with `data-t` are translated; authored articles and other static content keep their original language.
- `src/scripts/portfolio.js`: visual effects, navigation and page lifecycle cleanup.
- `src/scripts/preferences.js`: shared theme and language controls.
- `src/scripts/contact.js`: contact submission, status and request cancellation.
- `src/components/ContactForm.astro`: shared Formspree form.
- `src/styles/global.css`: typography, content, effects and responsive styles.
- `src/styles/navigation.css`: desktop/mobile controls and navigation dialog.

Projects can omit `image` to use the shared Open Graph image. If an image is supplied, its path must exist under `public/`. Avoid adding project links separately from the collection.

## Hosting

The canonical site is `https://www.andruudev.com`, configured in `astro.config.mjs`. Update `public/robots.txt` when changing that domain. Astro owns the Vite configuration; configure any future `base` inside `astro.config.mjs` and adapt public paths if hosting under a subdirectory.

The production output is `dist/`. Existing deployment options are Vercel (`vercel.json`), Cloudflare static assets (`wrangler.toml`), and GitHub Pages (`npm run deploy`). The GitHub Pages command builds and publishes `dist`; it is intended for root/custom-domain hosting with the current absolute URLs. No deployment runs during verification.

The contact form uses Formspree ID `mgodjnpp`. Verify delivery in the Formspree account when changing that integration; local verification does not send messages.
