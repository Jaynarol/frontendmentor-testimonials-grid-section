/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["Barlow Semi Condensed", "sans-sarif"],
      },
      colors: {
        box_violet: "hsl(263, 55%, 52%)",
        box_grayish_blue: "hsl(217, 19%, 35%)",
        box_blackish_blue: "hsl(219, 29%, 14%)",
        neutral_gray: "hsl(0, 0%, 81%)",
        neutral_grayish_blue: "hsl(210, 46%, 95%)",
      },
    },
  },
  plugins: [],
};
