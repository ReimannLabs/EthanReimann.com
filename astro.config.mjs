// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';

// Keystatic only in `astro dev` so production stays static SSG (no adapter).
const isDev =
  process.argv.includes('dev') || process.env.NODE_ENV === 'development';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    markdoc(),
    ...(isDev ? [keystatic()] : []),
  ],
});
