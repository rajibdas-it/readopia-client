/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#8db3ec",

          secondary: "#e5caf6",

          accent: "#2269d3",

          neutral: "#221b22",

          "base-100": "#dfe8f1",

          info: "#6182db",

          success: "#35d49a",

          warning: "#b07e07",

          error: "#df436a",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
