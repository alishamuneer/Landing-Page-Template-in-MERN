/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      '3xl': { 'max': '1488px' },
      '2xl': { 'max': '1024px' },
      'xl': { 'max': '991px' },
      'lg': { 'max': '768px' },
      'md': { 'max': '425px' },
      'sm': { 'max': '375px' },
      'xsm': { 'max': '320px' },
    },
  },
  plugins: [],
}
