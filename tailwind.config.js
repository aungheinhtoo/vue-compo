/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      body: ['"Open Sans"'],
    },
    colors: {
      primary: "#f7ba50",
    },
  },
  plugins: [],
};
