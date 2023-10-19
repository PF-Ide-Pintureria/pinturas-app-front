/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      colors: {
        primary: '#662c7b',
        turquoise: '#00A491',
        orange: '#E96827',
        secondary: '#535353',
        tertiary: 'rgba(231, 231, 231, 0.40)',
        quaternary: '#F0CF5D',
        formBg: '#D9D9D9',
        warning: '#ff0f0f',
      }
    },
    fontFamily: {
      abc: ['Urbanist', 'sans-serif'],
      primary: 'Gill Sans'
    },
    padding: {
      // Debe ser usado en cada component "main" para dar espacio al header principal.
      whiteSpaceTop: '9rem 0 0 0'
    }
  },
  plugins: []
}
