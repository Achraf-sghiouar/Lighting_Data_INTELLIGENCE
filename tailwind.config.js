/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FDFBF7',
          100: '#FAF5EA',
          200: '#F4E7CB',
          300: '#EBD4A4',
          400: '#DCB970',
          500: '#C5A059',
          600: '#A88038',
          700: '#8A6527',
          800: '#6E4E20',
          900: '#4D3616',
        },
        obsidian: {
          900: '#0F172A',
          800: '#1E293B',
          700: '#334155',
        }
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
