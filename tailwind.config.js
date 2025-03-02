// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#2359FF',
        'secondary-blue': '#6195ED',
        'glass-bg': 'rgba(220, 230, 255, 0.2)',
        'question-bg': 'rgba(235, 240, 180, 0.95)',
      },
      animation: {
        'pulse-glow': 'pulseGlow 8s infinite alternate ease-in-out',
        'button-shine': 'buttonShine 4s infinite',
        'pulse': 'pulse 3s infinite',
      },
      boxShadow: {
        'glass': '0 10px 40px rgba(255, 255, 255, 0.2), inset 0 0 30px rgba(255, 255, 255, 0.2)',
        'button': 'inset 19px 19px 38px rgba(190, 190, 190, 0.3), inset -19px -19px 38px rgba(255, 255, 255, 0.3)',
      },
    },
  },
  plugins: [],
}
