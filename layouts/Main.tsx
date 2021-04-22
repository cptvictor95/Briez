import { Flex } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import Header from '../components/Header'

const Main: React.FC<{ title: string }> = ({ children, title }) => {
  return (
    <Flex as="main" h="100vh" w="100vw" direction="column">
      <Head>
        <title>BRAV - {title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
    </Flex>
  )
}

export default Main
