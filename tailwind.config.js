/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "rose-950": "#462320",
        "rose-900": "#68332f",
        "rose-800": "#4f2724"
      },
    },
  },
  plugins: [],
};
