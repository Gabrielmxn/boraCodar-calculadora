/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          '900': '#6B6B6B'
        },
        clear: '#975DFA',
        blue: {
          '500': '#7F45E2',
          '900': '#462878',
          
        },
        background: {
          'total': '#807ECE',
          'app': '#2D2A37'
        },
      }
    },
  },
  plugins: [],
}