/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'tv-xs': '24px',
        'tv-sm': '32px',
        'tv-base': '40px',
        'tv-lg': '48px',
        'tv-xl': '56px',
        'tv-2xl': '64px',
        'tv-3xl': '72px',
      },
    },
  },
  plugins: [],
}