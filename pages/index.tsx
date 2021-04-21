import { Center, Heading } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Center h="100vh" w="100%" flexDirection="column">
        <Heading as="h1">Hello! Welcome to BRAV</Heading>
        <Heading as="h4">List of Exercises</Heading>
      </Center>
    </>
  )
}

export default Home
