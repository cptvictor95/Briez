import { Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import Main from '../layouts/Main'
import Exercises from './exercises/index'

const Home: React.FC = () => {
  return (
    <Main title="Home">
      <Flex as="article" h="100vh" w="100%" direction="column">
        <Exercises />
      </Flex>
    </Main>
  )
}

export default Home
