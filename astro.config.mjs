import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.andruudev.com',

  redirects: {
    '/portfolio/blog/creative-development-gsap': '/portfolio/blog/gitops-delivery-contract',
    '/portfolio/project/sales-intelligence': '/portfolio/project/aws-landing-zone',
    '/portfolio/project/retail-analytics': '/portfolio/project/eks-gitops-platform',
  },
  integrations: [sitemap()]
});