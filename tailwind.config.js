/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      'sm': '640px',
      'md':'768px',
      'lg': '1024px',
      'xl':'1280px',
      '2xl': '1436px'
    },
    extend: {
      colors: {
        veryLightGreen: '#f3fcf4',
        lightGreen : '#1a8060',
        darkGreen: '#0a4c3f',
        cream: '#fbf7ed',
      },
    },
  },
  plugins: [],
}
