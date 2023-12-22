import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Geist Mono", ...defaultTheme.fontFamily.mono],
        sans: ["Geist Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
