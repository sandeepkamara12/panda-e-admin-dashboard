/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    fontFamily: {
      'sans': ["Open Sans", "serif"],
      'serif': ["Oswald", 'serif'],
    },
    extend: {
      boxShadow: {
        'dashboard':'0 4px 24px 2px rgba(20,25,38,.05)',
        'sidebar':'0 0 24px 2px rgba(20,25,38,.05)',
        'normal':'0 4px 24px 2px rgba(20,25,38,.05)',
      },
      colors:{
        'tiny':'#575864'
      }
    },
  },
  plugins: [
    require('preline/plugin'),
    require('@tailwindcss/forms'),
  ],
}

