/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  './public/index.html',
      // this is flowbite tailwind css
      './node_modules/flowbite/**/*.js',],

  plugins: [require("daisyui")],
};
