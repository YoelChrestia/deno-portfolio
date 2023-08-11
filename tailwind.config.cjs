/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./routes/**/*.{tsx,ts}",
    "./islands/**/*.{tsx,ts}",
    "./components/**/*.{tsx,ts}",
  ],
  theme: {
    colors: {
      primary: "#02181E",
      secundary: "#1F7F8C",
      emphasis: "#98C0C6",
      almostwhite: "#edf2f4",
    },
    extend: {
      gridTemplateColumns: {
        desktop: "min-content auto",
      },
    },
  },
  gridTemplateColumns: {
    desktop: "min-content auto",
  },
  plugins: [],
};
