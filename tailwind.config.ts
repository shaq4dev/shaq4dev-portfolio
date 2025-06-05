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
        light: {
          primary: '#FFF8F0',
          secondary: '#0D160B',
          hover: '#f3e8ff'
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
