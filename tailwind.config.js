/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        'custom': [
          '0px 6px 10px rgba(0, 0, 0, 0.14)',
          '0px 1px 18px rgba(0, 0, 0, 0.12)'
        ]
      }
    },
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
      "info-bg": "#F4FAFF",
      "error-bg": "#FEF5F5",
      "warning-bg": "#FDF3E1",
      "success-bg": "#F8FFF2",
      "primary-hover": "#f5ab2b",
      "secondary-hover": '#b74200',
      "info-hover": '#1866b3',
      "error-hover": '#a4281d',
      "warning-hover": '#c14b00',
      "success-hover": '#007500',
      "black-text": "#0C0D0D",
      gray: "#566271"
    },
  },
  plugins: [],
};
