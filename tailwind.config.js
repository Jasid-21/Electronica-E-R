/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'text': '#0e1717',
        'background': '#f9fafa',
        'primary': '#1da178',
        'l_primary': '#97D1BF',
        'secondary': '#b0b3c5',
        'accent': '#81cbcb',
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

