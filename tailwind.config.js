/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('../assets/backgroundmanage.jpg')",
      },
    },
  },
  plugins: [],
};
