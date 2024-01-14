/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  variants: {
    display: ['responsive', 'group-hover', 'group-focus', 'menu-active'],
   },
}

