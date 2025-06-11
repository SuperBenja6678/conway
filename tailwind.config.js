/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0E0E0E',
          light: '#2a2a2a',
          dark: '#000000',
        },
        accent: {
          DEFAULT: '#D61C23',
          light: '#e94348',
          dark: '#b01419',
        },
        blue: {
          DEFAULT: '#001B8B',
          light: '#1a3ba3',
          dark: '#001565',
        },
        gray: {
          50: '#FAFAFA',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};