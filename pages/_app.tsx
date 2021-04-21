import App from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

class MyApp extends App {
  render(): JSX.Element {
    const { Component, pageProps } = this.props

    return (
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    )
  }
}

export default MyApp
