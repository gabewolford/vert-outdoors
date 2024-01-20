/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkbrown: {
          500: "#1B170D",
          hover: "#433936",
        },
        blue: {
          500: "#2655BB",
          hover: "#3D67C3",
        },
        lightblue: {
          500: "#CAD9E0",
        },
        white: {
          500: "#FFFFFF",
        },
        yellow: {
          500: "#E2DBAF",
        },
        darkgreen: {
          500: "#1F2C1E",
        },
        lightgreen: {
          500: "#383E38",
        },
      },
    },
  },
  plugins: [],
};
