/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ram:
        {
          50: '#ffe3f3',
          100: '#ffb5d6',
          200: '#fa86ba',
          300: '#f6569e',
          400: '#f22782',
          500: '#d80d69',
          600: '#a90652',
          700: '#7a023a',
          800: '#4b0023',
          900: '#1e000e',
        },

        navCol:

        {
          50: '#f2f2f8',
          100: '#d8d9da',
          200: '#2B3148',
          300: '#a6a6a6',
          400: '#8c8c8c',
          500: '#737373',
          600: '#595959',
          700: '#404040',
          800: '#252627',
          900: '#040f0f',
        }

      }
    },
  },
  plugins: [],
}

