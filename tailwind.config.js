/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  
    gridTemplateColumns: {
      "auto-fill": "repeat(auto-fill, minmax(200px, 1fr))",
    },
    extend: {
      height: {
        128: "40rem",
      },
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
       },
    },
    fontFamily: {
      raleway: ["Raleway", "sans-serif"],
    },
    minHeight: {
      128: "40rem",
    },
  },
  plugins: [],
};
