/** @type {import('tailwindcss').Config} */
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
  plugins: [],
};
