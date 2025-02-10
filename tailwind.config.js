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
        "primary-hover": "var(--color-primary-hover)",
        'primary-variant': "var(--color-primary-variant)",
        secondary: "var(--color-secondary)",
        tertiary: "var(--color-tertiary)",
        'tertiary-variant': "var(--color-tertiary-variant)",
        bgPrimary: "var(--color-bg-primary)",
        tBase: "var(--color-text-base)",
        'color-border': "var(--color-border)",
        'color-red': "var(--color-danger)",
        'color-red-variant': "var(--color-danger-variant)",
        'color-orange': "var(--color-warning)",
        'color-orange-variant': "var(--color-warning-variant)",
        'color-yellow': "var(--color-yellow)",
        'color-blue': "var(--color-normal)",
        'color-blue-variant': "var(--color-normal-variant)",
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        albert: ['"Albert Sans"', 'sans-serif'],
      },
      animation: {
        'spin-ai': 'spinWithDelay 8s linear infinite',
        'tilte-bell': 'tiltWithDelay 2s ease-in-out infinite',
        'shake-ai': 'shakeWithDelay 2s ease-in-out infinite',
        'bubble': 'float 5s infinite',
        'blink': "blink 2s infinite",
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
        tiltWithDelay: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '10%': { transform: 'rotate(40deg)' }, /* 1/6 of 6s = 1s spin */
          '15%': { transform: 'rotate(-40deg)' }, /* 1/6 of 6s = 1s spin */
          '25%': { transform: 'rotate(40deg)' }, /* 1/6 of 6s = 1s spin */
          '30%': { transform: 'rotate(-40deg)' }, /* 1/6 of 6s = 1s spin */
          '40%': { transform: 'rotate(0deg)' }, /* 1/6 of 6s = 1s spin */
          '100%': { transform: 'rotate(0deg)' }, /* Pause for remaining 5s */
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '50%': { transform: 'translateY(5px) translateX(-5px)' },
        },
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
  darkMode: 'selector',
}
