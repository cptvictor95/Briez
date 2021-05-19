import { extendTheme } from '@chakra-ui/react'

export const bravTheme = extendTheme({
  styles: {
    global: {
      body: {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        color: 'purple.900',
      },
    },
  },
  fonts: {
    body: 'Lato',
  },
  colors: {
    purple: {
      50: '#F1F0FA',
      100: '#E3E0F5',
      500: '#6857DB',
      700: '#251877',
      900: '#0F0C29',
    },
    yellow: {
      500: '#FFE66D',
      700: '#FFDA1F',
    },
    white: {
      50: '#F7FFF7',
    },
    black: {
      800: '#1c1924',
      900: '#1B1B1F',
    },
  },
  components: {
    Button: {
      baseStyle: {
        letterSpacing: '1.5px',
      },
      variants: {
        solid: {
          bgColor: 'purple.400',
          color: 'white.50',
          textTransform: 'uppercase',
          _hover: {
            bgColor: 'purple.700',
            color: 'white.50',
          },
          _active: {
            bgColor: 'purple.900',
            color: 'white.50',
          },
        },
      },
    },
    Input: {
      baseStyle: {
        borderColor: 'purple.500',
      },
    },
  },
})
