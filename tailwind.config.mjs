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
        'brand-primary': '#7FB2B2', // Muted Teal/Blue
        'brand-primary-dark': '#5C8C8C', // Darker Teal/Blue
        'brand-secondary': '#2F4858', // Dark Slate Blue for headings
        'brand-light': '#F8FAFC', // Off-white background
        'brand-text': '#1E293B', // Dark text
        'brand-accent': '#F5DEB3', // Light Peach/Gold accent
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Lora', 'serif'],
      },
    },
  },
  plugins: [
    typography,
  ],
};

export default config;