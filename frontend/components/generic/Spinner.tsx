import { Center, Spinner as ChakraSpinner } from '@chakra-ui/react'
import React from 'react'

const Spinner: React.FC<{ size: string }> = ({ size }) => {
  return (
    <Center w="100%" minH="100%">
      <ChakraSpinner size={size} thickness="3px" color="purple.500" />
    </Center>
  )
}

export default Spinner
