/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'credi-green': '#7AB94D',
        'credi-blue': '#254C97',
      },
    },
  },
  plugins: [],
};
