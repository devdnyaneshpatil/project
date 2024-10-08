/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        oliveGreen: "rgb(102, 125, 69)", // Define the custom color
        bgColorBrown: "rgb(76, 76, 76)",
        bgColorSearch: "rgb(244,235,222)",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Applying Poppins as the default sans font
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
      screens: {
        sm: "300px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      gridTemplateRows: {
        "custom-rows": "1fr 1fr 0.5fr",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
