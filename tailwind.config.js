/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  './public/index.html',
      // add FlowBite classes here
      './node_modules/flowbite/**/*.js',],

  plugins: [require("daisyui")],
};
