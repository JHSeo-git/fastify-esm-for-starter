/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    //
    './pages/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
    './theme.config.tsx',
  ],
  darkMode: 'class',
  theme: {
    future: {
      hoverOnlyWhenSupported: true,
    },
    extend: {
      container: {
        center: true,
        padding: '1.5rem',
        screens: {
          '2xl': '90rem',
        },
      },
    },
  },
  plugins: [],
};
