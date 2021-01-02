import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import React from 'react';

import { AppProps } from 'next/app'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  light: {
    bg: '#EDF6F9',
    text: '#006D77',
    accent: '#83C5BE',
    warn: '#E29578'
  },
};
const theme = extendTheme({ colors, styles: {
  global: {
    'html, body': {
      boxSizing: 'border-box',
      width: '100vw'
    }
  }
} });

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;
