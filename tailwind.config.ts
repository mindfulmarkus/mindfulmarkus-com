import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Warm earthy palette
        forest: {
          DEFAULT: '#125442',
          deep: '#0D3B2E',
          500: '#125442',
        },
        sage: {
          DEFAULT: '#909E86',
          light: '#B7C0A9',
          dark: '#6F7D63',
        },
        clay: {
          DEFAULT: '#B36A5E',
          light: '#CB897E',
          dark: '#8F4F45',
        },
        ochre: {
          DEFAULT: '#C2843E',
          light: '#D8A35F',
          dark: '#9A6526',
        },
        sand: {
          DEFAULT: '#E7D9C2',
          light: '#F1E8D8',
        },
        cream: '#F7F1E6',
        parchment: '#F2E9D8',
        bark: '#3A2E26',
        ink: '#2B241E',
      },
      fontFamily: {
        // font-serif now actually resolves to the Cormorant variable loaded in layout.tsx
        serif: ['var(--font-serif)', 'Cormorant', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
      },
      maxWidth: {
        content: '72rem',
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.4rem' }],
        base: ['1rem', { lineHeight: '1.65rem' }],
        lg: ['1.125rem', { lineHeight: '1.8rem' }],
        xl: ['1.25rem', { lineHeight: '1.8rem' }],
        '2xl': ['1.6rem', { lineHeight: '1.3' }],
        '3xl': ['2rem', { lineHeight: '1.2' }],
        '4xl': ['2.6rem', { lineHeight: '1.12' }],
        '5xl': ['3.4rem', { lineHeight: '1.05' }],
        '6xl': ['4.4rem', { lineHeight: '1.0' }],
        '7xl': ['5.4rem', { lineHeight: '0.98' }],
      },
      borderRadius: {
        xl2: '1.75rem',
      },
      boxShadow: {
        soft: '0 18px 50px -20px rgba(43, 36, 30, 0.35)',
        card: '0 12px 40px -22px rgba(43, 36, 30, 0.45)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.9s ease-out both',
      },
    },
  },
  plugins: [],
}
export default config
