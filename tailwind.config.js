/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
          "sppl-blue": "#003366",
        'sppl-light-blue': '#3b82f6',
        'sppl-dark-blue': '#1e3a8a',
      },
      animation: {
        'slide-down': 'slideDown 0.8s ease-out',
        'fade-in': 'fadeIn 1s ease-out',
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
