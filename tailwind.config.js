/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'text': '#050905',
        'background': '#f5faf6',
        'primary': '#62ae72',
        'secondary': '#27e84d',
        'accent': '#7ba9bb',
       },

      fontSize: {
        sm: '0.750rem',
        base: '1rem',
        xl: '1.333rem',
        '2xl': '1.777rem',
        '3xl': '2.369rem',
        '4xl': '3.158rem',
        '5xl': '4.210rem',
      },

      fontFamily: {
        heading: 'undefined',
        body: 'Sarabun',
      },
      
      fontWeight: {
        normal: '400',
        bold: '700',
      },

      screens: {
        '2sm': '550px'
      }
    },
  },
  plugins: [],
}

