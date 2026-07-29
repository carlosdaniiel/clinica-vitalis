/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#12332F',       // verde-petróleo profundo — texto, header
        paper: '#FAFAF8',     // branco quente — fundo base
        primary: '#1F6F6B',   // teal clínico — marca, links, ícones
        accent: '#E85D4E',    // coral quente — CTAs, destaques humanos
        mint: '#E9F3F0',      // verde-menta claro — fundos alternados
        line: '#D8E6E2',      // divisores sutis
        muted: '#5B7370',     // texto secundário
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      keyframes: {
        pulseLine: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
        blip: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        pulseLine: 'pulseLine 2.4s ease-out forwards',
        blip: 'blip 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
