/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{jsx,js}'],
  theme: {
    extend: {

      fontFamily: {
        jet: ['JetBrains Mono', 'monospace']
      },
      colors: {
        primary: "#A61FD6",
        secondary: "#2617CE",
        dark: "#1E1F24",
        light: "#FAFCFE",
        mix:  {
          200: "#e5e5e6",
          400: "#b0b1b5",
          600: "#7b7d84",
          800: "#4a4b4f",
          DEFAULT: "#8B8D93"
        },
      },
      spacing: {
        'side-spacing': '13rem',
      }


    },
  },
  plugins: [],
}

