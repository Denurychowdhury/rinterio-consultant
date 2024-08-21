/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        clifford: '#da373d',
        'btn-bg': '#ABEF5F',
        fontColor: '#212121',
        iconBg: '#1C1C1C',
        paraColor: '#737373',
        titleBg: '#ABEF5F',
        iconColor: '#737373',
      },
      backgroundImage: {
        bgimg: "URL('./assets/banner.png')",
      },
    },
  },
  plugins: [],
}