/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-dark": "#111318",
        "secondary-dark": "#161b27",
      },
      fontFamily: {
        "dancing-script": "'Dancing Script', cursive",
        Roboto: "'Roboto', sans-serif",
      },
      boxShadow: {
        "primary-shadow-light": "0px 10px 15px rgb(150,150,150,0.1)",
        "primary-shadow-dark": "0px 10px 10px rgb(0,0,0,0.3)",
      },
    },
  },
  plugins: [],
};