/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bgMobileDark" : "url(/bg-mobile-dark.jpg)",
        "bgMobileLight" : "url(/bg-mobile-light.jpg)",
        "bgDesktopDark" : "url(/bg-desktop-dark.jpg)",
        "bgDesktopLight" : "url(/bg-desktop-light.jpg)",
      },
      fontFamily: {
        "Josefin": ["Josefin Sans", "sans-serif"],
      },
      backgroundColor: {
        "dark" : "#25273D"
      }
    },
  },
  plugins: [],
}