const { nextui } = require("@nextui-org/react");
const Animations = require("@midudev/tailwind-animations")

/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'flowers': "url('/img.webp')"
      },
      fontFamily: {
        'pinyon': ['Pinyon Script', 'cursive'],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui(), Animations]
}

