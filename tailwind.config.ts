import type { Config } from "tailwindcss";

const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      title: ["Bebas Neue"],
      text: ["Josefin_Slab"],
    },
    extend: {
      keyframes: {
        slide: {
          "0%": { transform: "translateX(-100%); opacity:0" },
          "100%": { transform: "translateX(0); opacity: 100%" },
        },
        bounce: {
          "0%": {
            transform: "translateY(0%);",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1);",
          },
          "50%": {
            transform: "translateY(-10%);",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1);",
          },
          "100%": {
            transform: "translateY(0%);",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1);",
          },
        },
      },
      animation: {
        slide: "slide 2s 1",
        bounce: "bounce .5s 1",
      },
      gridTemplateColumns: {
        "13": "repeat(13, minmax(0, 1fr))",
      },
      colors: {
        primary: colors.slate,
        blue: {
          400: "#2589FE",
          500: "#0070F3",
          600: "#2F6FEB",
        },
      },
    },
    keyframes: {
      shimmer: {
        "100%": {
          transform: "translateX(100%)",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
