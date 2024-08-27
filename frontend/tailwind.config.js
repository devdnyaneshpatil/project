/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // keyframes :{
      //   slideIn:{
      //     '0%': { transform: 'translateX(100%)', opacity: 0 },
      //     '100%': { transform: 'translateX(0)', opacity: 1 },
      //   },
      // },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Applying Poppins as the default sans font
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
    },
    screens: {
      'sm': '300px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
  },
  plugins: [],
}

