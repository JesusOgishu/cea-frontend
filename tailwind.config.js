/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'cea-primary': '#4f35a1',
        'cea-secondary': '#246dec',
        'cea-danger': '#dc3545',
        'cea-bg': '#e6e8ed',
      },
    },
  },
  plugins: [],
}
