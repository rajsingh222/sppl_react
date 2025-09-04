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
        'marquee': 'marquee 25s linear infinite',
        'marquee-slow': 'marquee 40s linear infinite',
        'pop-fade': 'popFade 3s ease-in-out infinite',
        'pop-in': 'popIn 600ms ease-out both',
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
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        popFade: {
          '0%': { transform: 'scale(0.98)', opacity: '0.85' },
          '20%': { transform: 'scale(1.02)', opacity: '1' },
          '40%': { transform: 'scale(1)', opacity: '0.95' },
          '100%': { transform: 'scale(0.98)', opacity: '0.85' },
        },
        popIn: {
          '0%': { transform: 'scale(0.97) translateY(8px)', opacity: '0' },
          '60%': { transform: 'scale(1.02) translateY(0)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
