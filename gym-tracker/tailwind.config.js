/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      display: ["Oswald", "Merriweather"],
    },
    extend: {
      colors: {
        background: "#131516",
      },
    },
  },
  plugins: [],
};
