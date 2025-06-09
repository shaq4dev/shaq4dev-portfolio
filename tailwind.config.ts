import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: '#1e3a8a',         // Deep Sapphire Blue (luxurious, elegant, masculine)
        main_hover: '#1e40af',   // Stronger Royal Blue
        main_overlay: '#0f172a', // Almost black-navy for overlays or backgrounds
        mainlow: '#3b82f6',      // Bright Blue Accent (for subtle highlights)
        mainlow_hover: '#2563eb', // Smooth hover state for lighter elements
        golden: '#eab308',         // Golden Yellow (attention-grabbing, vibrant)
        golden_hover: '#ca8a04',   // Deeper golden tone for hover state
        // main_overlay: '#78350f', // Rich amber/brown overlay for depth
        golden_bright: '#facc15',      // Softer highlight for borders/buttons
        goldenlow_hover: '#d97706',
        light: {
          primary: '#FFF8F0',
          secondary: '#0D160B',
          hover: '#f3e8ff',
        },
        dark: {
          primary: '#0D160B',
          secondary: '#FFF8F0',
          hover: '#292F36'
        }
      },
    },
  },
  plugins: [],
} satisfies Config;

  // main: '#ca8a08',
  // main_hover: '#a16207',
  // main_overlay: "#713f12",
  // mainlow: "#854d0e",
  // mainlow_hover: "#a16207",