import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3B5A75",
          light: "#88AFB4",
        },
        secondary: "#889AA7",
        accent: "#C49D74",
        bg: {
          DEFAULT: "#FFFFFF",
          light: "#F5F7F8",
        },
        text: {
          DEFAULT: "#1A1A1A",
          light: "#4A4A4A",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};

export default config;
