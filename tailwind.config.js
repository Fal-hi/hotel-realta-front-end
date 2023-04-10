/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
    "./node_modules/react-tailwindcss-select/dist/index.esm.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins-regular": ["poppins-regular"],
        "poppins-medium": ["poppins-medium"],
        "poppins-semibold": ["poppins-semibold"],
        "poppins-bold": ["poppins-bold"],
        "poppins-light": ["poppins-light"],
      },
      colors: {
        bgPrimary: "#5B33A8",
        bgGray: "#F5F5F5",
        textPrimary: "#1C2434",
        textSecondary: "#3B3D40",
        textPurple: "#5B33A8",
        textGray: "#8A92A6",
      },
    },
  },
  plugins: [],
}
