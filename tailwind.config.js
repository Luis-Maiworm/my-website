/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{jsx,js}'],
  theme: {
    extend: {

      fontFamily: {
        jet: ['JetBrains Mono', 'monospace']
      },
      colors: {
        
      },
      spacing: {
        'side-spacing': '13rem',
      }


    },
  },
  plugins: [],
}

