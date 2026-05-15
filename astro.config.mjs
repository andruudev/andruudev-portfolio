import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // base: '/andruudev-portfolio', // Removed to serve from root
  site: 'https://andruudev.github.io',

  integrations: [sitemap()]
});