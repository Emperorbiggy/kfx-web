/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--primary)",
          blueLight: "var(--primary-blue-light)",
          black: "var(--primary-black)",
          blackLight: "var(--primary-black-light)",
          yellow: "var(--primary-yellow)",
          red: "var(--primary-red)",
          green: "var(--primary-green)",
          greenLight: "var(--primary-green-light)",
          blue: "var(--secondary-blue)",
        }
      },
      backgroundColor: {
        'gradient-main': "var(--gradient-main)",
      },
      backgroundImage: {
        'gradient-main': "var(--gradient-main)"
      },

    },
  },
  plugins: [],
};

