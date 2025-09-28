// tailwind.config.ts — listo para Tailwind v4
import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  darkMode: "class",

  // (opcional) Si quieres ser explícito:
  // content: ["./src/**/*.{ts,tsx,js,jsx,mdx}"],

  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#04b974",
          50:  "#e6fbf3",
          100: "#c9f5e5",
          200: "#94eacc",
          300: "#5fdeaf",
          400: "#2fd092",
          500: "#04b974",
          600: "#039b62",
          700: "#047a50",
          800: "#075f41",
          900: "#084e37",
        },
        surface: {
          DEFAULT: "#0b0f14",
          700: "#1a2230",
          800: "#141b26",
        },
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
      },
      boxShadow: {
        soft: "0 8px 30px rgba(0,0,0,.08)",
      },
    },
  },

  plugins: [typography],
};

export default config;
