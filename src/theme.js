import { theme } from '@chakra-ui/core'

const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    mmblue: {
      '900': '#4CA1FF',
      '800': '#4CA1FF',
      '700': '#4CA1FF',
      '600': '#4CA1FF',
      '500': '#4CA1FF',
      '400': '#4CA1FF',
      '300': '#4CA1FF',
      '200': '#4CA1FF',
      '100': '#4CA1FF'
    },
    mmorange: '#FF914C',
    mmgray: {
      '900': '#D6D6D6',
      '800': '#D6D6D6',
      '700': '#D6D6D6',
      '600': '#D6D6D6',
      '500': '#D6D6D6',
      '400': '#D6D6D6',
      '300': '#D6D6D6',
      '200': '#D6D6D6',
      '100': '#D6D6D6'
    },
    mmheading: '#6F6C6C19'
  },
  fonts: {
    ...theme.fonts,
    heading: 'Avenir',
    body: 'Avenir'
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
