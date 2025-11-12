/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#006D77',
          dark: '#005158',
          light: '#2A9D8F',
        },
        secondary: {
          DEFAULT: '#83C5BE',
          light: '#A4C3B2',
        },
        accent: {
          DEFAULT: '#E9C46A',
          dark: '#F4A261',
          light: '#E76F51',
        },
        neutral: {
          50: '#FFFFFF',
          100: '#F7F7F7',
          300: '#555555',
          800: '#333333',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
