import App from 'next/app'
import '@fontsource/lato/400.css'
import { ChakraProvider } from '@chakra-ui/react'
import { bravTheme } from '../theme'

class MyApp extends App {
  render(): JSX.Element {
    const { Component, pageProps } = this.props

    return (
      <ChakraProvider theme={bravTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    )
  }
}

export default MyApp
