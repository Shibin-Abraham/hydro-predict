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
      }
    },
  },
  plugins: [],
  darkMode: 'selector',
}