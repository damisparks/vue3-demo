/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      //  extend theme here 🎨
    },
  },

  // https://github.com/tailwindlabs/tailwindcss-aspect-ratio
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    // Tailwind forms plugin
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
