/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Основные цвета
        silver: {
          50: '#f9f9fa',
          100: '#f3f3f5',
          200: '#ececf0',
          300: '#dcdce3',
          400: '#cfcfd6',
          500: '#b8bcc3',
          600: '#9a9fa8',
          700: '#7d828b',
          800: '#63656d',
          900: '#4a4c53',
          950: '#2c2e33',
        },
        // Фиолетовый градиент
        violet: {
          400: '#a78bfa',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7c3aed',
          800: '#6d28d9',
          900: '#5b21b6',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'glow-radial': 'radial-gradient(circle, rgba(168, 85, 247, 0.2) 0%, transparent 70%)',
      },
      animation: {
        'glow-pulse': 'glow-pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 8s infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(168, 85, 247, 0.3)',
        'glow-lg': '0 0 40px rgba(168, 85, 247, 0.4)',
        'glow-violet': '0 0 30px rgba(124, 58, 237, 0.3)',
      },
    },
  },
  plugins: [],
};
