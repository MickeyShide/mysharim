/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'page-black': '#07050d',
        'page-off': '#0d0a18',
        'page-white': '#E0BFFF',
        'acid': '#E0BFFF',
        'acid2': '#C89FFF',
        'dim':  'rgba(224,191,255,0.06)',
        'dim2': 'rgba(224,191,255,0.12)',
        'dim3': 'rgba(224,191,255,0.40)',
        'dim4': 'rgba(224,191,255,0.70)',
      },
      fontFamily: {
        bebas:   ['"Bebas Neue"', 'sans-serif'],
        mono:    ['"Space Mono"', 'monospace'],
        manrope: ['Manrope', 'sans-serif'],
      },
      keyframes: {
        'badge-blink': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        'orb-drift': {
          'from': { transform: 'translate(0,0) scale(1)' },
          'to':   { transform: 'translate(-4%,6%) scale(1.08)' },
        },
        'orb-drift-rev': {
          'from': { transform: 'translate(0,0) scale(1)' },
          'to':   { transform: 'translate(4%,-6%) scale(1.08)' },
        },
        'float-idle': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':       { transform: 'translateY(-8px)' },
        },
        'hero-in': {
          'from': { opacity: '0', transform: 'translateY(28px)' },
          'to':   { opacity: '1', transform: 'translateY(0)' },
        },
        'scroll-pulse': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        'ticker-move': {
          'from': { transform: 'translateX(0)' },
          'to':   { transform: 'translateX(-50%)' },
        },
        'mq-move': {
          'from': { transform: 'translateX(0)' },
          'to':   { transform: 'translateX(-50%)' },
        },
        'grid-shift': {
          'from': { transform: 'translate(0,0)' },
          'to':   { transform: 'translate(32px,32px)' },
        },
        'thumb-pulse': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        'cta-pulse': {
          '0%, 100%': { transform: 'translate(-50%,-50%) scale(1)' },
          '50%':       { transform: 'translate(-50%,-50%) scale(1.1)' },
        },
        'scan': {
          '0%':   { top: '-100%' },
          '100%': { top: '200%' },
        },
        'glitch1': {
          '0%, 90%, 100%': { clipPath: 'polygon(0 0,0 0,0 0,0 0)', opacity: '0' },
          '91%': { clipPath: 'polygon(0 15%,100% 15%,100% 30%,0 30%)', opacity: '0.7', transform: 'translate(3px,0)' },
          '93%': { clipPath: 'polygon(0 55%,100% 55%,100% 65%,0 65%)', opacity: '0.6', transform: 'translate(-2px,0)' },
          '95%': { clipPath: 'polygon(0 0,0 0,0 0,0 0)', opacity: '0' },
        },
        'glitch2': {
          '0%, 92%, 100%': { clipPath: 'polygon(0 0,0 0,0 0,0 0)', opacity: '0' },
          '93%': { clipPath: 'polygon(0 70%,100% 70%,100% 80%,0 80%)', opacity: '0.6', transform: 'translate(-3px,0)' },
          '95%': { clipPath: 'polygon(0 0,0 0,0 0,0 0)', opacity: '0' },
        },
      },
      animation: {
        'badge-blink':  'badge-blink 3s ease-in-out infinite',
        'orb-drift':    'orb-drift 8s ease-in-out infinite alternate',
        'orb-drift-rev':'orb-drift-rev 11s ease-in-out infinite alternate-reverse',
        'float-idle':   'float-idle 6s ease-in-out infinite',
        'hero-in':      'hero-in .9s ease forwards',
        'scroll-pulse': 'scroll-pulse 2s ease-in-out infinite',
        'ticker-move':  'ticker-move 22s linear infinite',
        'mq-move':      'mq-move 20s linear infinite',
        'grid-shift':   'grid-shift 12s linear infinite',
        'thumb-pulse':  'thumb-pulse 4s ease-in-out infinite',
        'cta-pulse':    'cta-pulse 5s ease-in-out infinite',
        'scan':         'scan 8s linear infinite',
        'glitch1':      'glitch1 7s infinite',
        'glitch2':      'glitch2 7s infinite',
      },
    },
  },
  plugins: [],
}
