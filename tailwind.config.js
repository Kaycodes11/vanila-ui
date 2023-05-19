/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./dist/**/*.{html,css,js}"],
  theme: {
    extend: {
      // headline, mainColor will be accssible like font-headline, bg-mainColor (on whichever css property (s) that takes font, color)

      fontFamily: {
        headline: ["Oswald"],
      },
      colors: {
        mainColor: "#212f49",
      },
    },
    debugScreens: { position: ["top", "left"] },
  },
  plugins: [
    require("tailwindcss-debug-screens"),
    ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
  ],
};

/* https://www.youtube.com/watch?v=yyxbuZCaoxU&ab_channel=Peter.in */

/* darkMode: "media" is depenedant on local computer whether it's on dark or light mode */
