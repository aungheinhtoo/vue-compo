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
      secondary: "#C75100",
      info: "#2C75DD",
      error: "#CC3123",
      warning: "#DC5A00",
      success: "#008700",
      white: "#FFFFFF",
      "primary-hover": "#f5ab2b",
      "black-text": "#0C0D0D",
    },
  },
  plugins: [],
};
