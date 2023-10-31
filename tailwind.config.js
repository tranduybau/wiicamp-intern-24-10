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
        text: {
          1: "#FAFAFA",
          2: "#000000",
          3: "#00FF66",
        },
        second: {
          1: "#FEFAF1",
          2: "#F5F5F5",
          3: "#DB4444",
          4: "#FFAD33",
        },
        button: {
          1: "#00FF66",
          2: "#DB4444",
          3: "#E07575",
          hoverButton: "#A0BCE0",
        },
      },
      fontWeight: {
        1: "400",
        2: "700",
        3: "600",
      },

      fontFamily: {
        poppins: "poppins",
        inter: "inter",
      },
      fontSize: {
        text: "1rem",
        logo: "24px",
      },
      backgroundColor: {
        White: "#FFFFFF",
        Black: "#363738",
        secondary: "#F5F5F5",
        green: "#00FF66",
      },
      boxShadow: {
        sm: "0 2px 4px 0 rgb(0 0 0 / 0.05)",
      },
      container: {
        center: true,
        // screens: "84.5rem",
        screens: {
          DEFAULT: "1155px",
          //   sm: "41.5rem",
          //   md: "48.5rem",
          //   lg: "61.5rem",
          //   xl: "71.5rem",
          "2xl": "1155px",
        },
      },
      margin: {
        icon1: "3.1875rem",
        icon2: "5.0625rem",
        navigator: "40px",
      },
      width: {
        sidle: "55.75rem",
      },
      height: {
        sidle: "21.5rem",
      },
    },
  },
  plugins: [],
};
