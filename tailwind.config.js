/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      colors: {
        primary: '#662c7b',
        turquoise: '#00A491',
        orange: '#E96827',
        orangeAlt: '#E7976F',
        secondary: '#535353',
        tertiary: 'rgba(231, 231, 231, 0.40)',
        quaternary: '#F0CF5D',
        formBg: '#D9D9D9',
        warning: '#ff0f0f',
      },
      padding: {
        // Debe ser usado en cada component "main" para dar espacio al header principal.
        whiteSpaceTop: '7rem 0 0 0'
      },
      boxShadow: {
        credentialsMenu: "2px 2px 2px #662c7b75;"
      }
    },
    fontFamily: {
      abc: ['Urbanist', 'sans-serif'],
      primary: 'Gill Sans'
    },
  },
  plugins: []
}
