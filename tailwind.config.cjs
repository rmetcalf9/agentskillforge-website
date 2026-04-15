/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}'],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
    },
    extend: {
      colors: {
        brand: {
          primary: '#2DD4BF',
          secondary: '#1E293B',
          accent: '#FB7185',
          background: '#F7FAFC',
        },
      },
    },
  },
  plugins: [],
};
