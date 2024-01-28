/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/*.{html,jsx}","./src/**/*.{html,jsx}", "index.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
