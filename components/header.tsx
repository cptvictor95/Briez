import React from 'react'
import Button from './Button'
import { Flex, Heading } from '@chakra-ui/layout'

const Header = () => {
  return (
    <Flex
      as="header"
      w="100%"
      position="relative"
      top="0"
      left="0"
      justify="space-between"
      align="center"
      p={4}
    >
      <Heading as="h2" fontSize="3xl">
        BRAV
      </Heading>
      <Flex as="nav">
        <Button toRoute={'/'}>Home</Button>
        <Button toRoute={'/exercises/create'}>Create</Button>
      </Flex>
    </Flex>
  )
}

export default Header
