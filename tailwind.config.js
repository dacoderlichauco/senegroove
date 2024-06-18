module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        lightblue: {
          500: '#add8e6',
        },
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        ripple: {
          '0%': { transform: 'scale(0)', opacity: '1' },

          '100%': { transform: 'scale(4)', opacity: '0' },
        },
      },
      animation: {
        'fade-in': 'fade-in 2s ease-in-out',
        ripple: 'ripple 0.6s linear',
      },
    },
  },
  plugins: [],
}
