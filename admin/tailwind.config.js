/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#E6E6E6',
        'custom-blue': '#B8B7CF',
        'custom-light-blue': '#DCE9F9',
      },
    },
  },
  plugins: [],
}