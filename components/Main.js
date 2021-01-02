import { Flex } from '@chakra-ui/react'
import React from 'react'

const Main = ({children}) => {
  return (
    <>
      <Flex h="100vh" w="100%" as="main" justifyContent="center" flexDirection="column" px={8}>
        {children}
      </Flex>
    </>
  )
}

export default Main