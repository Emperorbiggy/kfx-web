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
          grey: "var(--primary-grey)",
          "grey-100": "var(--primary-grey-100)",
        },
        secondary: {
          // Blue
          "blue-50": "var(--secondary-blue-50)",
          "blue-100": "var(--secondary-blue-100)",
          "blue-200": "var(--secondary-blue-200)",
          "blue-300": "var(--secondary-blue-300)",
          "blue-400": "var(--secondary-blue-400)",
          "blue-500": "var(--secondary-blue-500)",
          "blue-600": "var(--secondary-blue-600)",
          "blue-700": "var(--secondary-blue-700)",
          "blue-800": "var(--secondary-blue-800)",
          "blue-900": "var(--secondary-blue-900)",
          "blue-950": "var(--secondary-blue-950)",

          // Green
          "green-50": "var(--secondary-green-50)",
          "green-100": "var(--secondary-green-100)",
          "green-200": "var(--secondary-green-200)",
          "green-300": "var(--secondary-green-300)",
          "green-400": "var(--secondary-green-400)",
          "green-500": "var(--secondary-green-500)",
          "green-600": "var(--secondary-green-600)",
          "green-700": "var(--secondary-green-700)",
          "green-800": "var(--secondary-green-800)",
          "green-900": "var(--secondary-green-900)",
          "green-950": "var(--secondary-green-950)",

          // Red
          "red-50": "var(--secondary-red-50)",
          "red-100": "var(--secondary-red-100)",
          "red-200": "var(--secondary-red-200)",
          "red-300": "var(--secondary-red-300)",
          "red-400": "var(--secondary-red-400)",
          "red-500": "var(--secondary-red-500)",
          "red-600": "var(--secondary-red-600)",
          "red-700": "var(--secondary-red-700)",
          "red-800": "var(--secondary-red-800)",
          "red-900": "var(--secondary-red-900)",
          "red-950": "var(--secondary-red-950)",

          // Grey
          "grey-50": "var(--secondary-grey-50)",
          "grey-100": "var(--secondary-grey-100)",
          "grey-200": "var(--secondary-grey-200)",
          "grey-300": "var(--secondary-grey-300)",
          "grey-400": "var(--secondary-grey-400)",
          "grey-500": "var(--secondary-grey-500)",
          "grey-600": "var(--secondary-grey-600)",
          "grey-700": "var(--secondary-grey-700)",
          "grey-800": "var(--secondary-grey-800)",
          "grey-900": "var(--secondary-grey-900)",
          "grey-950": "var(--secondary-grey-950)",
        },
      },
      backgroundImage: {
        "gradient-main": "var(--gradient-main)",
        "gradient-auth": "var(--gradient-auth)",
      },
    },
  },
  plugins: [],
};

