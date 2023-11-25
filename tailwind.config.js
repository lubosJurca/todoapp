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
        "bgMobileDark" : "url(./src/assets/images/bg-mobile-dark.jpg)",
        "bgMobileLight" : "url(./src/assets/images/bg-mobile-light.jpg)",
        "bgDesktopDark" : "url(./src/assets/images/bg-desktop-dark.jpg)",
        "bgDesktopLight" : "url(./src/assets/images/bg-desktop-light.jpg)",
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