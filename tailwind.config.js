module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        serif: [
          "Merriweather",
          "ui-serif",
          "Georgia",
          "Cambria",
          "Times New Roman",
          "Times",
          "serif",
        ],
        playfair: [
          "Playfair Display",
          "ui-serif",
          "Georgia",
          "Cambria",
          "Times New Roman",
          "Times",
          "serif",
        ],
        cinzel: ["Cinzel", "ui-serif", "serif"],
      },
      backgroundImage: {
        typing: "url('/typing.gif')",
      },
      colors: {
        "prim-2": "#eae5e4",
        "prim-4": "#dfd3cf",
        "prim-6": "#693c20",
        "gray-1": "#F1F1F1",
      },
      maxHeight: {
        "1/2-screen": "50vh",
        "1/2-screen-2rem": "calc(50vh + 2rem)",
        "3/4-screen": "75vh",
        "3/4-screen-2rem": "calc(75vh + 2rem)",
      },
      transitionDuration: {
        0: "0ms",
      },
      width: {
        "fixed-panel": "320px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
