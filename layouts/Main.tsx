import { Flex } from '@chakra-ui/react'
import React from 'react'
import Header from '../components/header'

const Main: React.FC = ({ children }) => {
  return (
    <Flex as="main" h="100vh" w="100vw" direction="column">
      <Header />
      {children}
    </Flex>
  )
}

export default Main
