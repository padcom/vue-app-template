import type { ThemeConfig } from 'tailwindcss/types/config'
// import defaultTheme from 'tailwindcss/defaultTheme'

const theme: Partial<ThemeConfig & { extend: Partial<ThemeConfig> }> = {
  // Add overrides to the default theme here
  // https://tailwindcss.com/docs/theme#overriding-the-default-theme

  // Add additional theme configuration here
  // https://tailwindcss.com/docs/theme#extending-the-default-theme
  extend: {
    // Example color definition
    colors: {
      primary: {
        100: 'hsl(90, 100%, 90%)',
        200: 'hsl(90, 100%, 80%)',
        300: 'hsl(90, 100%, 70%)',
        400: 'hsl(90, 100%, 60%)',
        500: 'hsl(90, 100%, 50%)',
        600: 'hsl(90, 100%, 40%)',
        700: 'hsl(90, 100%, 30%)',
        800: 'hsl(90, 100%, 20%)',
        900: 'hsl(90, 100%, 10%)',
      },
    },
  },
}

export default theme
