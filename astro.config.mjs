import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  // base: '/andruudev-portfolio', // Removed to serve from root
  site: 'https://andruudev.github.io',

  integrations: [sitemap()],
  adapter: cloudflare()
});