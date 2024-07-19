/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
       fontFamily: {
        figtree: ['Figtree', 'sans-serif'],
      },
    },
  },
  colors: {
    text: "#060606",
    background: "#f9fafb",
    primary: "#6e95aa",
    secondary: "#9abdd0",
    accent: "#6eabcb",
  },
  plugins: [],
};
