const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Sora', 'sans-serif'],
    },
    colors: {
      primary: '#5061FC',
      secondary: '#E0E3FF',
    },
  },
  plugins: [],
};
