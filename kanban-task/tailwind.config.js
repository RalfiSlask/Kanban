/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        purpleColor: "rgba(99, 95, 199, 1)",
        darkBG: "#20212C",
        lightBG: "#F4F7FD",
        mediumGray: "var(--medium-grey, #828FA3)",
        darkGrey: "rgba(43, 44, 55, 1)",
        linesLight: "rgba(228, 235, 250, 1)",
        linesDark: "rgba(62, 63, 78, 1)",
        purpleHover: "rgba(168, 164, 255, 1)",
        veryDarkGray: "rgba(32, 33, 44, 1)",
        lightGray: "Light Grey (Light BG)",
      }
    },
    boxShadow: {
      darkShadow: "0px 10px 20px 0px rgba(54, 78, 126, 0.25)",
    }
  },
  plugins: [
    require("tailwindcss"), 
    require("autoprefixer"),
  ],
};