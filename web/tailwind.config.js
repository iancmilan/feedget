module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        // brand é o nome que damos para a cor, 500 é o tom
        brand: {
          500: '#8257e6',
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'), 
    require('tailwind-scrollbar'),
  ],
}
