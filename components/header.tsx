import React from 'react'
import Button from '../components/button'
import { Flex } from '@chakra-ui/layout'

const Header = () => {
  return (
    <Flex as="header" w="100%" position="relative" top="0" left="0">
      <Flex as="nav" p={4}>
        <Button toRoute={'/'}>Home</Button>
        <Button toRoute={'/exercises/create'}>Create</Button>
      </Flex>
    </Flex>
  )
}

export default Header
