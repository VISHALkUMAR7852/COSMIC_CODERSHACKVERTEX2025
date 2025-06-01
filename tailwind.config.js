/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0D6EFD',
          50: '#E6F0FF',
          100: '#CCE0FF',
          200: '#99C2FF',
          300: '#66A3FF',
          400: '#3385FF',
          500: '#0D6EFD',
          600: '#0058CC',
          700: '#004299',
          800: '#002B66',
          900: '#001533',
        },
        secondary: {
          DEFAULT: '#20C997',
          50: '#E3F9F1',
          100: '#C7F2E3',
          200: '#8FE5C7',
          300: '#57D8AB',
          400: '#20C997',
          500: '#1AA179',
          600: '#14785A',
          700: '#0F503C',
          800: '#09281E',
          900: '#021007',
        },
        accent: {
          DEFAULT: '#6F42C1',
          50: '#EFE8F9',
          100: '#DFD0F2',
          200: '#BFA1E5',
          300: '#9F72D8',
          400: '#6F42C1',
          500: '#59359A',
          600: '#432873',
          700: '#2D1B4C',
          800: '#160E26',
          900: '#0A060F',
        },
      },
      animation: {
        'slideDown': 'slideDown 0.3s ease-out forwards',
        'pulse': 'pulse 1.5s ease-in-out infinite',
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};