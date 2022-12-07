/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      opacity: ({ after }) => after(['disabled']),
      backgroundColor: ({ after }) => after(['disabled'])
    },
  },
  plugins: [],
}