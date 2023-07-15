/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#3a6ca8",

          secondary: "#f2c041",

          accent: "#38adb7",

          neutral: "#2c2631",

          "base-100": "#fcfcfd",

          info: "#57a0e0",

          success: "#159d47",

          warning: "#f6c25a",

          error: "#e5513e",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
