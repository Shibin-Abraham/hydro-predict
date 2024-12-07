/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        bgPrimary: "var(--color-bg-primary)",
        tBase: "var(--color-text-base)",
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        albert: ['"Albert Sans"', 'sans-serif'],
      },
      animation: {
        'spin-ai': 'spinWithDelay 12s linear infinite',
        'shake-ai': 'shakeWithDelay 2s ease-in-out infinite',
      },
      keyframes: {
        spinWithDelay: {
          '0%': { transform: 'rotate(0deg)' },
          '10.67%': { transform: 'rotate(360deg)' }, /* 1/6 of 6s = 1s spin */
          '100%': { transform: 'rotate(360deg)' }, /* Pause for remaining 5s */
        },
        shakeWithDelay: {
          '0%, 100%': { transform: 'translateX(0)' }, // Initial and end state
          '10%': { transform: 'translateX(-5px)' },
          '15%': { transform: 'translateX(5px)' },
          '25%': { transform: 'translateX(-5px)' },
          '30%': { transform: 'translateX(5px)' },
          '40%': { transform: 'translateX(0)' }, // Shake finishes
          '100%': { transform: 'translateX(0)' }, // Remain still for 4 seconds
        },
      },
    },
  },
  plugins: [],
  darkMode: 'selector',
}