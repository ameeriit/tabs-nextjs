import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      base: "1rem", // 16px
      md: "1.125rem", // 18px
      lg: "1.25rem", // 20px
      xl: "1.5rem", // 24px
      "2xl": "2rem", // 32px
      "3xl": "2.5rem", // 40px
      "4xl": "3rem", // 48px
    },
    extend: {
      colors: {
        primary: {
          50: "#FFE58C",
          100: "#FFD540",
        },
        secondary: "#F15A29",
        tertiary: "#EBECF5",
        shadow: "#3C479D",
        gray: "#CCCCCC",
        lightGray: "#f7f7f7f7",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
export default config;
