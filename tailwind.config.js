/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

const backfaceVisibility = plugin(function ({ addUtilities }) {
  addUtilities({
    ".backface-visible": {
      "backface-visibility": "visible",
      "-moz-backface-visibility": "visible",
      "-webkit-backface-visibility": "visible",
      "-ms-backface-visibility": "visible",
    },
    ".backface-hidden": {
      "backface-visibility": "hidden",
      "-moz-backface-visibility": "hidden",
      "-webkit-backface-visibility": "hidden",
      "-ms-backface-visibility": "hidden",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".rotate-y-180": {
      transform: "rotateY(180deg)",
    },
  });
});

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      gilroy: ["Gilroy", "sans-serif"],
      lc_mogi: ["LC Mogi", "serif"],
    },
    extend: {
      backgroundImage: {
        "overlay-light": "url('src/assets/overlay_light.png')",
        "overlay-dark": "url('src/assets/overlay_dark.png')",
      },
      colors: {
        black: "#282828",
        darkbg: "#051a25",
        lightbg: "#faffe7",
        pink: "#fb2a9b",
        white: "#fdf6f8",
        yellow: "#ecf016",
      },
    },
  },
  plugins: [backfaceVisibility],
};
