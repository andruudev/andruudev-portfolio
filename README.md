# andruudev portfolio

Static portfolio and personal links site built with Astro and TypeScript.

## Development

```sh
npm ci
npm run dev
npm run verify
```

`verify` runs language preference tests and Astro diagnostics, builds the site, and checks generated internal links, assets, bilingual articles/case studies, initial English markup, translation keys and the robots sitemap URL. Use `npm run preview` to inspect the production build.

## Source map

- `src/pages/index.astro`: personal links page.
- `src/pages/portfolio/`: portfolio and detail pages.
- `src/content/projects/`: project data and descriptions; the portfolio list uses this collection directly.
- `src/content/blog/`: Spanish article sources; add their English counterparts under `src/content/blog-translations/`.
- `src/i18n/translations.js`: interface translations. Interface text uses `data-t` or the bilingual `Copy.astro` component. Blog articles and project case studies include both languages.
- `src/scripts/portfolio.js`: visual effects, navigation and page lifecycle cleanup.
- `src/scripts/preferences.js`: shared theme and language controls.
- `src/scripts/contact.js`: contact submission, status and request cancellation.
- `src/components/ContactForm.astro`: shared Formspree form.
- `src/styles/global.css`: typography, content, effects and responsive styles.
- `src/styles/portfolio.css`: cloud lab cards, case studies, community, article and footer styles.
- `src/styles/navigation.css`: desktop/mobile controls and navigation dialog.

Each project needs an architecture `image` under `public/`. The shared PNG is used for social previews when a project illustration is SVG. Avoid adding project links separately from the collection.

## Hosting

The canonical site is `https://www.andruudev.com`, configured in `astro.config.mjs`. Update `public/robots.txt` when changing that domain. Astro owns the Vite configuration; configure any future `base` inside `astro.config.mjs` and adapt public paths if hosting under a subdirectory.

The production output is `dist/`. Existing deployment options are Vercel (`vercel.json`), Cloudflare static assets (`wrangler.toml`), and GitHub Pages (`npm run deploy`). The GitHub Pages command builds and publishes `dist`; it is intended for root/custom-domain hosting with the current absolute URLs. No deployment runs during verification.

The contact form uses Formspree ID `mgodjnpp`. Verify delivery in the Formspree account when changing that integration; local verification does not send messages.

## Cloud & DevOps content

`src/data/profile.ts` is the shared source for education, leadership, events and the lab stack. `Copy.astro` renders bilingual text and `preferences.js` switches the interface and article bodies together.

The five project case studies are fictional architecture designs, not deployed customer work. English bodies live in `src/content/projects/`; each must have a matching Spanish body under `src/content/project-translations/`. Project illustrations are lightweight SVG diagrams under `public/projects/`. Design targets are explicitly distinguished from measured outcomes. Add real repositories and validation evidence when available.

Legacy project and article URLs redirect through `astro.config.mjs`. Blog articles include English and Spanish versions and source references where applicable. New articles use their actual publication date.

Fonts are served from `public/fonts/` with `font-display: swap`; license and upstream URLs are included there. The noise canvas uses a static 128 × 128 texture, and the operational panel is an explicitly identified simulation.

Browser libraries are versioned local copies under `public/vendor/`, with upstream source links and licenses. Rendering the pages does not require a third-party CDN response.

Blog illustrations imported from `src/assets/blog/` are optimized by Astro at build time. Legacy public image URLs are retained for compatibility. Use `updated` in article frontmatter for revisions; the original publication date is preserved in the article and structured data.

## Language experience

Every initial page and blog article is rendered in English. No browser-language detection is used. Clicking **Español** selects Spanish; the button then offers **English**. The explicit preference is saved under `portfolio.language`, survives navigation/reloads and continues to work in memory if browser storage is blocked. The old `lang` key is ignored.

Spanish articles live in `src/content/blog/`; matching English versions and translated titles/descriptions live in `src/content/blog-translations/`. Projects use matching Spanish bodies in `src/content/project-translations/`. Production verification requires matching counterparts. During development, a temporarily missing translation uses the original article rather than crashing the page. Product names and official credential titles retain their names. Dates, accessible labels, form feedback, image descriptions and project diagrams follow the chosen language.

Use `data-i18n-aria` for labels from the shared dictionary, `LocalizedDate.astro` for visible dates, and `Copy.astro` for new bilingual UI text. Localized page titles/descriptions are defined in `src/i18n/page-metadata.ts` or passed through `titleEs` / `descriptionEs` for content pages.

Bilingual pages are paired from Vite Markdown imports in `src/data/content.ts`, so source metadata and renderable translations come from the same file snapshot. They do not rely on independent `getEntry()` lookups into translation collections. Deleted files therefore cannot remain as phantom posts in the listing. `tests/content.test.mjs` covers missing, added and removed translations.
