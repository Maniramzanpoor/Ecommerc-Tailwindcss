module.exports = {
  important: true,
  content: ["./partials/**/*.{html,js}", "./index.html", "./pages/**/*.{html,js}"],
  theme: {
    backgroundSize: { "100%": "100%" },
    extend: {
      height: {
        114: "38rem",
        128: "44rem",

      },
      width: {
        128: "44rem",
        132: "52rem",
        "80rem": "80rem",
      },
      colors: {
        Black: "#000000",
        // secondry: "#FF0029",
        Primary: "#35d62c",
        White: "#FFFFFF",
        Gray: "#E5E5E5",
        darkgray: "#222222",
        solidBlack: "#1B1B1B",
        bgGray: "#333333",
        bgblack: "#18191A",
        ngray: "#828282",
      },
      boxShadow: {
        lgshadow: "inset 0 0 180px 180px #000000",
        smhadow: "inset 0 0 100px 100px #000000",
        boxm: "inset 2px 2px 40px 40px #000000",
      },
      backgroundImage: {
        mainimg: "url('../content/img/razerlaptop.jpg')",
        footer: "url('../content/img/footer-bg.jpg')",
        rog_bg_patern: "url('../content/img/rog_bg_pattern.jpg')",
        headset: "url('../content/img/newHed.jpg')",
        chairbg: "url('../content/img/ChairBg.jpg')",
        keyboard: "url('../content/img/razer-hunstman-bg.jpg')",
      },
      fontSize: {
        "16xl": "16rem"
      },
    },
  },
  plugins: [
  ],
};
