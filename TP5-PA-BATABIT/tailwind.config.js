/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'DM-Sans': ['DM Sans', 'sans-serif'],
      },
      colors: {
        'black': '#000',
        'bitcoin-orange': '#F7931A',
        'soft-orange': '#ffe9d4',
        'secondary-blue': '#1a94f7',
        'warm-black':'#201e1c',
        'black': '#282623',
        'grey': '#757575',
        'light-grey': '#808080',
        'off-white':'#faf8f7',
        'just-white': '#fff',
      },
    },
  },
  plugins: [],
}