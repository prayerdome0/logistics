import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#070d18",
          900: "#0a1628",
          800: "#10203a",
          700: "#163056",
          600: "#1e4274",
        },
        gold: {
          300: "#f0d78a",
          400: "#e4c25a",
          500: "#c9a227",
          600: "#a7841a",
        },
        cream: "#f6f1e7",
        sand: "#e8dfcc",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        gold: "0 18px 50px rgba(201, 162, 39, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
