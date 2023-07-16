/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        purpleColor: "rgba(99, 95, 199, 1)",
        darkBG: "#20212C",
        lightBG: "#F4F7FD",
      }
    },
  },
  plugins: [
    require("tailwindcss"), 
    require("autoprefixer"),
  ],
};