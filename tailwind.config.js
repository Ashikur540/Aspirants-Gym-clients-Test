/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        yellow: '#edfb13',
        inputBg: 'rgba(255, 255, 255, 0.10)',
        cardBg: '#262525',
        black: '#191919',
        border_dark: '#5E5E5E',

      },
    },

  },
  //! Plugins...
  plugins: [require('daisyui')],
};
