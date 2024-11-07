/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure you include all your template files
  ],
  theme: {
    extend: {
      keyframes: {
        bigcubemotion: {
          '0%, 5%': { transform: 'rotate(0turn)' },
          '40%, 100%': { transform: 'rotate(0.5turn)' },
        },
        littlecubemotion: {
          '0%, 5%': { transform: 'rotate(0turn)' },
          '40%': { transform: 'rotate(0.5turn)' },
          '66%': { transform: 'rotate(0.5turn) scale(2.07)' },
          '97%, 100%': { transform: 'rotate(0.5turn) scale(2)' },
        },
        secretcubemotion: {
          '0%, 5%, 40%': { transform: 'scale(0)' },
          '67%': { transform: 'scale(1.13)' },
          '95%, 100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        bigcubemotion: 'bigcubemotion 2s ease-in-out infinite',
        littlecubemotion: 'littlecubemotion 2s ease-in-out infinite',
        secretcubemotion: 'secretcubemotion 2s cubic infinite',
      },
    },
  },
  plugins: [],
}
