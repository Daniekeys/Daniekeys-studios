/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pfp/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Neue Montreal", "system-ui", "sans-serif"],
      "neue-montreal": ["Neue Montreal", "system-ui", "sans-serif"],
      // 01-DESIGN-SYSTEM.md pairing, loaded via next/font in layout.tsx.
      // Not yet applied anywhere live — components opt in as they're
      // rebuilt per the revamp batches.
      heading: ["var(--font-heading)", "Plus Jakarta Sans", "sans-serif"],
      body: ["var(--font-body)", "Inter", "sans-serif"],
    },
    extend: {
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
        // 01-DESIGN-SYSTEM.md token-name aliases (same values as above,
        // exposed under the doc's own names for direct reference)
        "light-dark": "#818181",
        "dk-blue-1": "#2B6BFF",
        "dk-blue-2": "#5F8EFB",
        "dk-blue-3": "#9DBAFF",
        // Standard colors
        white: "#FFFFFF",
        black: "#000000",
        transparent: "transparent",
        current: "currentColor",
        // Shadcn colors
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        // 01-DESIGN-SYSTEM.md radius scale (`rounded-radius-*`), kept
        // distinct from the shadcn sm/md/lg above so existing components
        // don't reshape. New components adopt these per their batch spec.
        "radius-sm": "6px",
        "radius-md": "10px",
        "radius-lg": "16px",
        "radius-xl": "24px",
        "radius-full": "999px",
      },
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
        // 01-DESIGN-SYSTEM.md type scale (`ds-*`, kept separate from the
        // legacy hero/section-title keys above so existing pages don't
        // shift). Hero/H2 use clamp() per the doc's mobile→desktop ranges;
        // h3 down to micro "hold roughly steady" per the doc, so each is a
        // single value picked from the middle of its documented range.
        "ds-hero": [
          "clamp(2.125rem, 1.6rem + 2.6vw, 4rem)",
          { lineHeight: "1.05", fontWeight: "800" },
        ],
        "ds-h2": [
          "clamp(1.75rem, 1.45rem + 1.5vw, 3rem)",
          { lineHeight: "1.1", fontWeight: "700" },
        ],
        "ds-h3": ["26px", { lineHeight: "1.2", fontWeight: "700" }],
        "ds-h4": ["19px", { lineHeight: "1.3", fontWeight: "600" }],
        "ds-body-lg": ["17px", { lineHeight: "1.6", fontWeight: "400" }],
        "ds-body": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "ds-small": ["14px", { lineHeight: "1.4", fontWeight: "500" }],
        "ds-micro": ["12px", { lineHeight: "1.3", fontWeight: "600" }],
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
        128: "32rem",
        160: "40rem",
        // 01-DESIGN-SYSTEM.md spacing scale, exposed under its own names
        // (e.g. p-space-6) for direct reference. Note the same values are
        // already reachable via Tailwind's default numeric scale:
        // space-1..10 = p-1, p-2, p-3, p-4, p-6, p-8, p-12, p-16, p-24, p-32.
        "space-1": "4px",
        "space-2": "8px",
        "space-3": "12px",
        "space-4": "16px",
        "space-5": "24px",
        "space-6": "32px",
        "space-7": "48px",
        "space-8": "64px",
        "space-9": "96px",
        "space-10": "128px",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out",
        "fade-in": "fadeIn 0.8s ease-out",
        "slow-zoom": "slowZoom 0.3s ease-out",
      },
      transformStyle: {
        "preserve-3d": "preserve-3d",
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
