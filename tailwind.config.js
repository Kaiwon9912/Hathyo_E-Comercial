/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgba(var(--primary))",
        primaryHover: "rgba(var(--primary-hover))",
        secondary: "rgba(var(--secondary))",
        textSecondary: "rgba(var(--textSecondary))",
        textPrimary: "rgba(var(--textPrimary))",
        bgPrimary: "rgba(var(--bgPrimary))",
      },
    },
  },
  plugins: [],
}

