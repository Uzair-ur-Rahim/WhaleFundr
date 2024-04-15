module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        blue: { 800: "#2176b9", "800_19": "#2176b919", "800_33": "#2176b933", "800_26": "#2176b926" },
        indigo: { 900: "#150578", "900_19": "#15057819" },
        white: { A700_01: "#ffffff", A700: "#fefefe", A700_19: "#fefefe19" },
        black: { 600: "#656d76", 900: "#000000", A700_01: "#000000" },
        gray: {
          200: "#f0f0f0",
          900: "#1e1b1b",
          "900_01": "#121212",
          "900_02": "#2b2222",
          "900_03": "#382727",
          "900_26": "#38272726",
          "900_7f": "#2b22227f",
        },
        blue_gray: { 900: "#442929" },
      },
      boxShadow: {
        xs: "0px 0px 13px 5px #00000029",
        bs: "inset 0px -4px 20px 0px #1505783f",
        bs1: "inset 0px -4px 20px 0px #0202023f",
      },
      backgroundImage: {
        gradient: "linear-gradient(140deg, #121212,#2176b9)",
        gradient1: "linear-gradient(137deg, #121212,#2176b9)",
        gradient2: "linear-gradient(180deg, #000000bf,#ffffffbf)",
        gradient3: "linear-gradient(160deg, #2176b9,#121212)",
      },
      fontFamily: { montserrat: "Montserrat", roboto: "Roboto", opensans: "Open Sans" },
      opacity: { 0.5: 0.5, 0.4: 0.4 },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
