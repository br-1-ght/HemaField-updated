/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0c1a10',
        forest: '#1a3a22',
        'forest-mid': '#255230',
        'forest-light': '#2d6b3c',
        cream: '#f9f3e8',
        'cream-warm': '#f2e9d4',
        'cream-pure': '#fffdf7',
        rose: '#c4606a',
        'rose-light': '#d4848c',
        gold: '#c9a84c',
        'gold-light': '#e0c36a',
        muted: '#6b7c6e',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Jost', 'sans-serif'],
      },
      transitionTimingFunction: {
        ease: 'cubic-bezier(.4,0,.2,1)',
      },
      animation: {
        ticker: 'ticker 30s linear infinite',
        fadeIn: 'fadeIn .3s ease',
      },
      keyframes: {
        ticker: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        fadeIn: { '0%': { opacity: '0', transform: 'translateY(16px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
      },
    },
  },
  plugins: [],
};
