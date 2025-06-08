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
        main: '#0d9488',         // Teal 600
        main_hover: '#0f766e',   // Teal 700
        main_overlay: '#134e4a', // Teal 900
        mainlow: '#14b8a6',      // Teal 500
        mainlow_hover: '#0f766e', // Teal 700
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