/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pfp/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      // Daniekeys Studios Brand Colors
      primary: "#111111",
      secondary: "#818181",
      "primary-white": "#F9F9F9",
      "off-white": "#F0F0F0",
      // Accent Blues
      "accent-blue": "#2B6BFF",
      "accent-blue-light": "#5F8EFB",
      "accent-blue-lighter": "#9DBAFF",
      // Standard colors
      white: "#FFFFFF",
      black: "#000000",
      transparent: "transparent",
      current: "currentColor",
    },
    fontFamily: {
      sans: ["Neue Montreal", "system-ui", "sans-serif"],
      "neue-montreal": ["Neue Montreal", "system-ui", "sans-serif"],
    },
    extend: {
      fontWeight: {
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
      },
      fontSize: {
        hero: "80px",
        "hero-sm": "60px",
        "section-title": "48px",
        "section-title-sm": "36px",
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
        128: "32rem",
        160: "40rem",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out",
        "fade-in": "fadeIn 0.8s ease-out",
        "slow-zoom": "slowZoom 0.3s ease-out",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slowZoom: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.05)" },
        },
      },
    },
  },
  plugins: [],
};
