/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontSize: {
        '2xs': '0.533rem', // 9px
        xs: '0.667rem', // 10px
        sm: '0.867rem', // 13px
        base: '1rem', // 15px
        lg: '1.13rem', // 17px
        xl: '1.667rem', // 25px
        '2xl': '2.667rem', // 40px
        // '4xl': '3.2rem',
        hero: '3.33rem', // 50px,
        '4xl': '4.14rem', // 62px
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
