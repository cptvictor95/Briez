import { Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import Main from '../layouts/Main'
import Exercises from './exercises/index'

const Home: React.FC = () => {
  return (
    <Main title="Home">
      <Flex h="100vh" w="100%" direction="column">
        <Heading as="h1">Hello! Welcome to BRAV</Heading>

        <Exercises />
      </Flex>
    </Main>
  )
}

export default Home
