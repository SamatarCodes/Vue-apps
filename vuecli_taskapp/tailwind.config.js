module.exports = {
  purge: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        jetBrains: ['JetBrains Mono', 'monospace'],
        padauk: ['Padauk', 'sans-serif'],
        abel: ['Padauk', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        darkBackground: '#222429',
        inputColor: '#191B1F',
        hoverColor: '#2A2D33',
        sidebarColor: '#0F0F13',
      },
      borderWidth: {
        1: '.4px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
