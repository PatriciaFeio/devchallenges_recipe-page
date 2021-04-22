module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
        customForms: theme => ({
      default: {
        input: {
          borderRadius: theme('borderRadius.lg')
        }
      }
    }),
    extend: {
      fontFamily: {
        montserrat: "Montserrat, sans-serif",
        playfair: "Playfair Display, serif"
      },
      fontSize: {
        xxxs: "0.5rem",
        xxs: "0.625rem",
        x24: "1.5rem"
      },
      textColor: {
        "primary": "#333333",
        "secondary": "#bdbdbd",
        "secondaryFooter": "#828282",
        "orange": "#F2994A"
      },
      backgroundColor: {
        orange: "#F2994A"
      }
    }
  },
  variants: {
    extend: {
      textDecoration: ['checked'],
      textDecoration: ['hover'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
