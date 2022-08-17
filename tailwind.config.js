const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize:{
      'xs':'.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    extend: {colors: {
      primary: '#333366',
      secondary: '#D8D0FF',
      alternative: '#00E6D9',
      error: '#FF3636',
      black: '#131318',
      active: '#D0FFEE',
      activeText:'#06C0B7',
     
    },
    backgroundImage: {
      specialofer : "url('/src/assets/special-ofer-bg.svg)",
      
    }
  
  },
  },
  plugins: [require("daisyui")],
  daisyui: {

    themes: false,

  },
}