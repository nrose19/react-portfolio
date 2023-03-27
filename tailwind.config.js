/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: '#192231',
        darkGreen: '#404a42',
        lightGreen: '#c0b283',
        peach: '#eddbcd',
        white2: '#f4f4f4'
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px #192231',
      }
    },
  },
  plugins: [],
}
