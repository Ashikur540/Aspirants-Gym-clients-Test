/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    // colors: {
    //   primary: '#edfb13',
    //   shadow: '#505505',
    //   more: '#575615',
    //   more2: '#0f020b',
    // },
  },
  //! Plugins...
  plugins: [require('daisyui')],
};
