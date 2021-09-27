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
          "Merriweather",
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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
