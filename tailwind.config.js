/** @type {import('tailwindcss').Config} */
module.exports = {
<<<<<<< HEAD
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
=======
  content: ["./build/*.html", "./build/js/*.js"],
  theme: {
    extend: {
      colors: {
        papayawhip: {
          light: '#fef4e4',
          DEFAULT: '#ffefd5',
          dark: '#fee5bc',
        }
      },
      screens: {
        'widescreen': { 'raw': '(min-aspect-ratio: 3/2)' },
        'tallscreen': { 'raw': '(max-aspect-ratio: 13/20)' },
      },
      keyframes: {
        'open-menu': {
          '0%': { transform: 'scaleY(0)' },
          '80%': { transform: 'scaleY(1.2)' },
          '100%': { transform: 'scaleY(1)' },
        },
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
      }
    },
  },
  plugins: [],
}
>>>>>>> bd993f9dfe1964ccc3ef7ea552fec1e06ef22d24
