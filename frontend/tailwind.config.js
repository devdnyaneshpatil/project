/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        oliveGreen: 'rgb(102, 125, 69)', // Define the custom color
        bgColorBrown :'rgb(76, 76, 76)',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Applying Poppins as the default sans font
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      screens: {
        'sm': '300px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
    },
  },
  plugins: [],
};
