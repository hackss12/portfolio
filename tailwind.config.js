/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: {
          50: "#eff6ff",
          100: "#dbeafe",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8"
        }
      },
      boxShadow: {
        glass: "0 10px 30px rgba(2, 6, 23, 0.15)"
      },
      backdropBlur: {
        xs: "2px"
      }
    }
  },
  plugins: []
};
