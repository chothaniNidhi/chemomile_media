/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        botanical: {
          teal: '#398DA5',
          'teal-dark': '#245E6F',
          'teal-light': '#52A7C0',
          'teal-glow': '#78C4DC',
          sand: '#E6D2B3',
          'sand-light': '#F5ECE0',
          'sand-dark': '#C9B08F',
          yellow: '#F7B638',
          'yellow-light': '#FDD072',
          'yellow-dark': '#D89619',
          ivory: '#FAF9F5',
          'ivory-card': '#FFFFFF',
          charcoal: '#20272A',
          'charcoal-light': '#2C353A',
          'charcoal-dark': '#151A1C',
          sage: '#A9BBA5',
          'sage-light': '#C4D4C0',
          'sage-dark': '#7F967B'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        serif: ['Playfair Display', 'Cormorant Garamond', 'serif'],
        display: ['Syne', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'botanical-glow': '0 0 35px -5px rgba(57, 141, 165, 0.25)',
        'gold-glow': '0 0 30px -5px rgba(247, 182, 56, 0.35)',
        'premium': '0 20px 40px -15px rgba(32, 39, 42, 0.08)',
        'premium-hover': '0 25px 50px -12px rgba(57, 141, 165, 0.18)',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-gentle': 'pulseGentle 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGentle: {
          '0%, 100%': { opacity: '0.8', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.03)' },
        }
      }
    },
  },
  plugins: [],
}
