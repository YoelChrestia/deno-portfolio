/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./routes/**/*.{tsx,ts}",
    "./islands/**/*.{tsx,ts}",
    "./components/**/*.{tsx,ts}",
  ],
  theme: {
    colors: {
      primary: "#2b2d42",
      secundary: "#8d99ae",
      accent: "#ef233c",
      almostwhite: "#edf2f4",
    },
  },
  plugins: [],
};
