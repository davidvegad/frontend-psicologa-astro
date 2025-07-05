// tailwind.config.mjs

import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}",
    "./pages/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': 'rgb(238, 122, 107)', // Salmón/Coral
        'brand-primary-dark': 'rgb(238, 122, 107)', // Salmón/Coral (using same for dark)
        'brand-secondary': '#2F4858', // Dark Slate Blue for headings (kept existing)
        'brand-light': '#FFF9F0', // Crema/Beige
        'brand-text': '#333333', // Negro/Gris oscuro
        'brand-accent': '#DDE7F2', // Azul Sereno
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Lora', 'serif'],
        abigate: ['Abigate Desgo', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [
    typography,
  ],
};

export default config;