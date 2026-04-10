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
        gold: {
          DEFAULT: "#D4A017",
          light: "#F5E6B8",
          dark: "#A07810",
        },
        green: {
          dark: "#1B4332",
          DEFAULT: "#2D6A4F",
          light: "#40916C",
          success: "#16A34A",
        },
        cream: "#FFF8F0",
        "warm-white": "#FFFDF7",
        "dark-text": "#1A1A1A",
        muted: "#6B7280",
        whatsapp: "#25D366",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "warm-gradient":
          "linear-gradient(135deg, #FFF8F0 0%, #F5E6B8 50%, #FFF8F0 100%)",
      },
      boxShadow: {
        warm: "0 4px 24px rgba(212, 160, 23, 0.12)",
        card: "0 2px 16px rgba(0,0,0,0.08)",
        "card-hover": "0 8px 32px rgba(0,0,0,0.12)",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
