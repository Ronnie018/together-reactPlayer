/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        white: '#ffffff',
        'purple-btn': '#72009A',
        'purple-btn-hover': '#a800e3',
        'wine-dark': '#150014',
        'pink-category': '#BD32EE',
        'purple-category': '#9A00D0',
        'green-online': '#24B08F',
        'wine-tag-container': '#230030',
      },
    },
  },
  plugins: [],
};
