/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
      },
    },
    extend: {
      fontFamily: {
        sans: ['FixelDisplay'],
        serif: ['NyghtSerif-Dark'],
      },
      fontSize: {
        xxs: '10px',
        xs: '14px',
        sm: '24px',
        md: '32px',
        '2md': '42px',
        lg: '64px',
        xl: '96px',
      },
      padding: {
        sm: '20px',
        md: '32px',
        l: '60px',
        xl: '92px',
      },
      margin: {
        sm: '20px',
        md: '32px',
        l: '60px',
        xl: '92px',
      },
      gap: {
        xs: '14px',
        sm: '20px',
        md: '32px',
        l: '60px',
        xl: '92px',
      },
      borderRadius: {
        sm: '2px',
      },
      colors: {
        dark: {
          200: '#CCCCCC',
          700: '#1E1E1E',
          800: '#121212',
          950: '#101010',
        },
        success: {
          500: '#6DFF49',
        },
      },
    },
  },
  plugins: [],
};
