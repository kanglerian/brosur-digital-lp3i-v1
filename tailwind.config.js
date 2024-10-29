/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'android': '320px'
    },
    extend: {
      colors: {
        brosurone: "#006DB6",
        brosurtwo: "#0BA7E2",
        brosurthree: "#F29622",
        brosurfour: "#FDD10A",
        brosurfive: "#9D3EFA",
        brosursix: "#301CBB",
        whatsapp: "#60D568",
        mp: "#162678",
        mkp: "#C98500",
        to: "#6B220E",
        ti: "#007455",
      },
      backgroundImage: {
        gradientone: "linear-gradient(to bottom left, #0BA7E2, #006DB6)",
        gradienttwo: "linear-gradient(to bottom left, #FDD10A, #F29622)",
        gradientthree: "linear-gradient(to bottom left, #09BAEA, #6A20E6)",
        gradientfour: "linear-gradient(to bottom left, #9D3EFA, #301CBB)",
        gradientfive: "linear-gradient(to bottom left, #FE5863, #5040BC)",
        gradientsix: "linear-gradient(to bottom left, #19B0EC, #0036D0)",
        gradientseven: "linear-gradient(to bottom left, #36D1DC, #5B86E5)",
        gradienteight: "linear-gradient(to bottom left, #7C91F3, #0241FD)",
        gradientnine: "linear-gradient(to bottom left, #EC6EAD, #3494E6)",
        gradientpractice: "linear-gradient(to bottom left, #A5FECB, #20BDFF, #5433FF)",
        gradienteducation: "linear-gradient(to bottom left, #6FB1FC, #4364F7, #0052D4)",
        gradientmp: "linear-gradient(to bottom left, #2D44B4, #010C42)",
        gradientmkp: "linear-gradient(to bottom left, #FFC553, #D18B00)",
        gradientto: "linear-gradient(to bottom left, #C7401B, #581A09)",
        gradientti: "linear-gradient(to bottom left, #00BA8A, #006C51)",
        gradientvokasi: "linear-gradient(to bottom left, #2BC34C, #D1394E)",
        "background-one": "url('./assets/background-one.svg')",
        "background-two": "url('./assets/background-two.svg')",
        "background-three": "url('./assets/background-three.svg')",
        "background-four": "url('./assets/background-four.svg')",
        "background-five": "url('./assets/background-five.svg')",
        "background-six": "url('./assets/background-six.svg')",
        "background-seven": "url('./assets/background-seven.svg')",
        "background-eight": "url('./assets/background-eight.svg')",
        "background-nine": "url('./assets/background-nine.svg')",
        "background-education": "url('./assets/background-education.svg')",
        "background-mp": "url('./assets/background-mp.svg')",
        "background-mkp": "url('./assets/background-mkp.svg')",
        "background-to": "url('./assets/background-to.svg')",
        "background-ti": "url('./assets/background-ti.svg')",
        "background-vokasi": "url('./assets/background-vokasi.svg')",
      }
    },
  },
  plugins: [],
}

