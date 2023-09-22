/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      colors: {
        primary: '#6B17CD',
        secondary: '#535353',
        tertiary: 'rgba(231, 231, 231, 0.40)',
        quaternary: '#F0CF5D',
        formBg: '#D9D9D9',
        warning: '#ff0f0f'
      }
    }
  },
  plugins: []
}
