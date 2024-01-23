/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      figtree: ["Figtree"],
    },
    colors: {
      white: {
        10: "rgb(250, 250, 251)",
        20: "rgba(255, 255, 255, 1)",
        30: "rgb(245, 245, 245)",
      },
      blue: {
        10: "rgba(96, 91, 255, 1)",
        20: "rgba(91, 147, 255, 1)",
      },
      gray: {
        text: "rgba(154, 154, 169, 1)",
        lighttext: "rgba(153, 156, 160, 1)",
      },
      remove: {
        remove: "rgba(211, 48, 48, 1)",
      },
      navbar: {
        background: 'linear-gradient(90deg, #ACA9FF 0%, rgba(172, 169, 255, 0.00) 91.25%)',
      }
    },
    extend: {
      screens: {
        tablet: "960px",
        desktop: "1248px",
      },
    },
  },
  plugins: [],
};
