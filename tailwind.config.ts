import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          pink: '#ff2bd6',
          cyan: '#00eaff',
          lime: '#b6ff00',
          purple: '#6f00ff',
        },
      },
      backgroundImage: {
        'radial-fade': 'radial-gradient(ellipse at center, rgba(255,43,214,0.25), rgba(0,0,0,0) 60%)',
        'cyber-grid': 'linear-gradient(rgba(0,234,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0,234,255,0.2) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '48px 48px',
      },
      boxShadow: {
        neon: '0 0 10px rgba(0,234,255,0.8), 0 0 30px rgba(255,43,214,0.5)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        glow: {
          '0%, 100%': { filter: 'drop-shadow(0 0 8px rgba(0,234,255,0.8))' },
          '50%': { filter: 'drop-shadow(0 0 18px rgba(255,43,214,0.8))' },
        },
        scroll: {
          '0%': { backgroundPosition: '0px 0px, 0px 0px' },
          '100%': { backgroundPosition: '0px 48px, 48px 0px' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        glow: 'glow 4s ease-in-out infinite',
        grid: 'scroll 8s linear infinite',
      },
    },
  },
  plugins: [],
} satisfies Config
