/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // when the dark mode is clicked or toggled important
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        spinReverse: {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
      animation: {
        spinSlow: 'spinSlow 60s linear infinite',
        spinReverse: 'spinReverse 60s linear infinite',
      },
    },
  },
  plugins: [],
}
