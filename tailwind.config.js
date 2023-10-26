/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        error: {
          100: "#FFF1F2",
        },
        text: {
          1: "#FAFAFA",
          2: "#000000",
        },
        secondary: "#F5F5F5",
      },
      fontFamily: {
        poppins: "poppins",
        inter: "inter",
      },
      container: {
        center: true,
        screens: {
          // DEFAULT: "81.5rem",
          // sm: "41.5rem",
          // md: "51.5rem",
          // lg: "61.5rem",
          // xl: "71.5rem",
          "2xl": "77.5rem",
        },
        padding: {
          DEFAULT: "2rem",
          sm: "2rem",
          md: "2rem",
          lg: "2rem",
          xl: "2rem",
          "2xl": "2rem",
        },
      },
    },
  },
  plugins: [],
};
