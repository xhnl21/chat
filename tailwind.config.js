/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: true, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'bold': ['source sans pro bolds'],
        'regulars': ['source sans pro regulars'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui')
  ],
}

