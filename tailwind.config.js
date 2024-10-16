/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brosurone: "#006DB6",
        brosurtwo: "#0BA7E2",
        brosurthree: "#F29622",
        brosurfour: "#FDD10A",
        brosurfive: "#9D3EFA",
        brosursix: "#301CBB",
      },
      backgroundImage: {
        gradientone: "linear-gradient(to bottom left, #0BA7E2, #006DB6)",
        gradienttwo: "linear-gradient(to bottom left, #FDD10A, #F29622)",
        gradientthree: "linear-gradient(to bottom left, #09BAEA, #6A20E6)",
        gradientfour: "linear-gradient(to bottom left, #9D3EFA, #301CBB)",
        gradientpractice: "linear-gradient(to bottom left, #A5FECB, #20BDFF, #5433FF)",
        "background-one": "url('./assets/background-one.svg')",
        "background-two": "url('./assets/background-two.svg')",
        "background-three": "url('./assets/background-three.svg')",
        "background-four": "url('./assets/background-four.svg')",
      }
    },
  },
  plugins: [],
}

