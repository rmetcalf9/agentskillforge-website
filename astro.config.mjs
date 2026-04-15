import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: process.env.SITE_URL || 'https://agentskillforge.com',
  // For GitHub Pages under a subpath, set PUBLIC_PATH to e.g. "/<repo>/"
  base: process.env.PUBLIC_PATH || '/',
});
