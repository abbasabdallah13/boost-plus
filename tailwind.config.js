/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue':'#132AD6',
        'pink':'#DF4C73'
      },
      screens: {
        'sm': '388px',
        'md': '600px'
      }
    },
    plugins: [],
}
}