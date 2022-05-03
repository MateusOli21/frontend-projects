const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#5061FC',
        secondary: '#E0E3FF',
      },
    },
    fontFamily: {
      sans: ['Sora', 'sans-serif'],
    },
  },
  plugins: [],
};
