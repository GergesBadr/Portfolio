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
      keyframes: {
        customPing: {
          "0%": { transform: "scale(1)", opacity: "1" },
          "75%, 100%": { transform: "scale(2)", opacity: "0" },
        },
      },
      animation: {
        customPing: "customPing 1.5s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
    },
  },
  plugins: [],
};
