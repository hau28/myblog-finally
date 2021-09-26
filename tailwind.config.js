module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      serif: ["Merriweather"],
      merri: ["Merriweather", "ui-serif", "serif"],
      cinzel: ["Cinzel", "ui-serif", "serif"],
    },
    extend: {},
    colors: {
      "prim-2": "#EAE9E4",
      "prim-4": "#DFDCCF",
      "prim-6": "#6a5921",
      "gray-1": "#F1F1F1",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
