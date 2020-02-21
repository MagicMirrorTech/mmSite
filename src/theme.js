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
      },
      heading: '#6F6C6C19'
    }
  },
  fonts: {
    ...theme.fonts,
    heading: 'Avenir'
  },
  fontSizes: {
    ...theme.fontSizes,
    heading: '9rem',
    hmd: '5rem'
  },
  space: {
    ...theme.space,
    '7': '1.7rem',
    '14': '3.5rem'
  }
}

export default customTheme
