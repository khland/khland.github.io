const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './comps/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    borderColor: theme => ({
      teal: colors.teal,
      gray: colors.trueGray,
      white: colors.white,
    }),
    colors: {
      gray: colors.trueGray,
      red: colors.red,
      teal: colors.teal,
      white: colors.white,
      lime: colors.lime,
      yellow: colors.yellow
    },
    extend: {
      keyframes: {
        slideRgith: {
          '0%': { transform: 'translateX(0)'},
          '100%': { transform: 'translateX(50)' }
        },
        radio: {
          '0%': { transform: 'scale(-40)' },
          '10%': { transform: 'scale(0.1)' },
          '20%': { transform: 'scale(0.2)' },
          '30%': { transform: 'scale(0.3)' },
          '40%': { transform: 'scale(0.4)' },
          '50%': { transform: 'scale(0.5)' },
          '60%': { transform: 'scale(0.6)' },
          '70%': { transform: 'scale(0.7)' },
          '80%': { transform: 'scale(0.8)' },
          '90%': { transform: 'scale(0.9)' },
          '100%': { tranform: 'scale(1)'}
        }
      },
      animation: {
        radio: 'radio 1s ease-in-out infinite',
        slideRight: 'slideRight 2s ease-in-out 1'
      }
    },
  },
  variants: {
    extend: {
      transitionDuration: ['group-hover', 'hover', 'active'],
      textColor: ['group-hover', 'hover', 'active'],
      opacity: ['group-hover', 'hover','active'],
      position: ['group-hover', 'hover', 'focus'],
      translate: ['active', 'group-hover', 'hover'],
      scale: ['hover', 'group-hover'],
      fontSize: ['group-hover', 'hover', 'focus'],
      width: ['group-hover', 'hover', 'focus'],
      height: ['group-hover', 'hover', 'focus'],
      transitionDelay: ['group-hover', 'hover', 'focus'],
      transform: ['group-hover', 'hover', 'focus'],
      transitionProperty: ['group-hover', 'hover', 'focus']
    },
  },
  plugins: [],
}
