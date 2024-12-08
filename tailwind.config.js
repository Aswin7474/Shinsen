/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'shinsenwhite': '#FAF3F3', 
        'shinsenpink': '#f5b7b1', 
      },
    },
  },
  plugins: [],
}
