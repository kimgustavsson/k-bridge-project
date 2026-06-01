import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#1B2A4E",
          "navy-dark": "#152038",
          "navy-deep": "#0F1729",
          yellow: "#F5C518",
          "yellow-dark": "#E0B015",
          slate: "#3A4B6B",
          emerald: "#10B981",
          "emerald-dark": "#059669",
          "emerald-light": "#D1FAE5",
        },
        neutral: {
          bg: "#FCFCFC",
          card: "#FFFFFF",
          text: "#1B2A4E",
          muted: "#6B7280",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "serif"],
      },
      boxShadow: {
        card: "0 4px 20px rgba(27, 42, 78, 0.08)",
        "card-hover": "0 8px 30px rgba(27, 42, 78, 0.15)",
      },
      maxWidth: {
        container: "1200px",
      },
      keyframes: {
        "float-slow": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(5deg)" },
        },
        "float-medium": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-15px) rotate(-8deg)" },
        },
        "float-fast": {
          "0%, 100%": { transform: "translateY(0) translateX(0) rotate(0deg)" },
          "50%": {
            transform: "translateY(-10px) translateX(5px) rotate(10deg)",
          },
        },
      },
      animation: {
        "float-slow": "float-slow 7s ease-in-out infinite",
        "float-medium": "float-medium 5s ease-in-out infinite",
        "float-fast": "float-fast 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
