/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      color: {
        N1: "#FFFFFF",
        N2: "#858993",
        N3: "#151F3F",
        N4: "#0E1835",
        N5: "#06102B",
        N6: "#000000",
        P1: "#9DA4FF",
        P2: "#DCDEFF",
        P3: "#6E77E9",
        G1: "#55FFAD",
        Y1: "#FFE34E",
        Y2: "#FFF385",
      },
      dropShadow: {
        white: "0px 0px 10px rgba(255, 255, 255, 0.6);",
        green: "0px 0px 10px rgba(85, 255, 173, 0.6);",
        purple: "0px 0px 10px rgba(157, 164, 255, 0.6);",
        yellow: "0px 0px 10px rgba(255, 243, 133, 0.6);",
      },
      fontSize: {
        h1: ["48px", "72px"],
        h2: ["40px", "60px"],
        h3: ["32px", "48px"],
        h4: ["24px", "36px"],
        h5: ["20px", "28px"],
        titile: ["16px", "20px"],
        subtitle: ["14px", "18px"],
        p1: ["24px", "36px"],
        p2: ["20px", "28px"],
        p3: ["16px", "20px"],
        p4: ["14px", "18px"],
        caption: ["12px", "16px"],
      },
      borderRadius: {
        card: "32px",
        button: "100%",
      },
      fontFamily: {
        Monument: ["Monument Extended", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
        notoTC: ["Noto Sans TC", "sans-serif"],
      },
    },
  },
  plugins: [],
};
