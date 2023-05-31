/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        night: '#202329',
        error: '#f31700',
        info: '#0058e9',
        success: '#28C76F',
        main: '#548970',
        easy: {
          50: '#E9F1ED',
          100: '#D2E4DB',
          200: '#BCD6CA',
          300: '#A5C8B8',
          400: '#8FBAA6',
          500: '#79AD94',
          600: '#629F82',
        },
      },
    },
  },

  // https://github.com/tailwindlabs/tailwindcss-aspect-ratio
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    /** @type {import('tailwindcss/types/config').PluginCreator} */
    ({ addComponents }) => {
      addComponents({
        '.btn-main': {
          '@apply text-base leading-5 rounded p-2 bg-main text-white': {},
        },
        '.btn-outline-main': {
          '@apply text-base leading-5 rounded p-2 border border-main text-main':
            {},
        },
      })
    },

    // Tailwind forms plugin
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
