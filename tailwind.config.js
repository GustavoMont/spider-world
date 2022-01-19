module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    colors: {
      'red': 'rgb(223, 31, 45)',
      'dark-red': 'rgb(177, 19, 19)',
      'blue': 'rgb(43, 55, 132)',
      'white': '#fff',
      'white-80': 'rgba(256, 256, 256, 0.8)',
      black: {
        100: '#050505',
        80: 'rgba(0, 0, 0, 0.8)',
        70: 'rgba(0, 0, 0, 0.7)',
        50: 'rgba(0, 0, 0, 0.5)'
      },
      gray: 'rgb(80, 80, 80)',
      green: 'rgb(20, 160, 115)',
      transparent: 'transparent'
    },
    extend: {
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
