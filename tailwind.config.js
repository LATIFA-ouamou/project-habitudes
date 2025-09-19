/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        light :"#D6E5F0",
        bliu:"#380A8E",
         pro:"#215EE0",
        orange:"#D78A1E",
         rouge:"#D52326",
         font:"#5B7BBE",
      }
    },
  },
  plugins: [],
}

