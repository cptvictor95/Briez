import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import React from 'react';

import App from 'next/app'
import { FirebaseProvider } from '../config/context';

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
      width: '100vw',
      height: '100vh',
      backgroundColor: 'light.bg'
    }
  }
} });

class MyApp extends App {
  render(): JSX.Element {
    const { Component, pageProps } = this.props;
    return (
      <FirebaseProvider>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </FirebaseProvider>
    );
  }
};

export default MyApp;
