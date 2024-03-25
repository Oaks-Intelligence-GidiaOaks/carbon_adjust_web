/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "280px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      max: "1440px",
    },
    extend: {
      fontFamily: {
        sans: ['"Lato"', "sans-serif"],
        manrope: ['"Manrope"', "sans-serif"],
        poppins: ['"Poppins"', "sans-serif"],
      },
      backgroundImage: {
        "register-image": "url('/assets/graphics/register-graphic.svg')",
        "account-setup-image":
          "url('/assets/graphics/account-setup-graphic.svg')",
      },
      colors: {
        scheme: {
          white: "hsla(0, 1%, 88%, 1)",
        },
        blue: {
          main: "#139EEC",
          secondary: "#3465AF",
        },
        "hover-color": "hsla(202,85%,50%,0.2)",
        glass: "#F1F5F8",
        "grey-swatch": {
          100: "#F8F9FA",
          200: "#F9FAFB",
          300: "#F2F4F7",
          400: "#EAECF0",
          500: "#D0D5DD",
          600: "#9BA3AF",
          700: "#667085",
          800: "#475467",
          900: "#343D54",
          110: "#141518",
        },
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss"), { prefix: "ui" }],
};
