// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || 'http://localhost:4321', // Lee la URL del entorno o usa localhost para desarrollo
  integrations: [tailwindcss(), react()]
});
