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
        "bgMobileDark" : "url(./public/images/bg-mobile-dark.jpg)",
        "bgMobileLight" : "url(./public/images/bg-mobile-light.jpg)",
        "bgDesktopDark" : "url(./public/images/bg-desktop-dark.jpg)",
        "bgDesktopLight" : "url(./public/images/bg-desktop-light.jpg)",
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