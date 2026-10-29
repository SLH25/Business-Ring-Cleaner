/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0B5FE0',
          light: '#3B9BFF',
          dark: '#0847A8',
          navy: '#0A2A6B',
        },
        cream: '#F5F8FF',
        mist: '#E8F1FF',
        ink: '#1F2937',
        whatsapp: '#25D366',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Segoe UI', 'sans-serif'],
        display: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
        script: ['Caveat', 'Segoe Script', 'cursive'],
      },
      boxShadow: {
        soft: '0 12px 32px -14px rgba(11, 95, 224, 0.22)',
        card: '0 20px 48px -22px rgba(10, 42, 107, 0.28)',
        lift: '0 28px 64px -24px rgba(11, 95, 224, 0.38)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      transitionTimingFunction: {
        soft: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        'pulse-ring': {
          '0%': { transform: 'scale(0.92)', opacity: '0.65' },
          '70%': { transform: 'scale(1.55)', opacity: '0' },
          '100%': { transform: 'scale(1.55)', opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-120%) rotate(12deg)' },
          '100%': { transform: 'translateX(220%) rotate(12deg)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'pulse-ring': 'pulse-ring 2.6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        float: 'float 7s ease-in-out infinite',
        shimmer: 'shimmer 3.4s linear infinite',
        'fade-in': 'fade-in 0.6s ease-soft both',
      },
    },
  },
  plugins: [],
}
