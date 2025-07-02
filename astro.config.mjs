// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://tumbesfc-media.s3.us-east-2.amazonaws.com/meta/maya.jpeg', // Reemplaza esto con la URL de tu sitio
  integrations: [tailwindcss(), react()]
});
