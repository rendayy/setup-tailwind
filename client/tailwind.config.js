/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e3a8a', // biru gelap
        accent: '#38bdf8',  // biru terang
      },
    },
  },
  plugins: [],
}
