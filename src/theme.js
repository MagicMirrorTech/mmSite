import { theme } from '@chakra-ui/core'

const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    mm: {
      orange: '#FF914C',
      blue: {
        900: '#4CA1FF',
        800: '#4CA1FF',
        700: '#4CA1FF',
        600: '#4CA1FF',
        500: '#4CA1FF',
        400: '#4CA1FF',
        300: '#4CA1FF',
        200: '#4CA1FF',
        100: '#4CA1FF'
      }
    }
  },
  fonts: {
    ...theme.fonts,
    heading: 'Avenir'
  }
}

export default customTheme
