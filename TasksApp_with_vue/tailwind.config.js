module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        jetBrains: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        darkBackground: '#222429',
        inputColor: '#191B1F',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/custom-forms')],
};
