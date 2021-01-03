import { Button, Flex, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react';
import React from 'react'
import Main from '../components/Main';
import Link from 'next/link'

const Login: React.FC = () => {
  return (
    <Main>
      <Link href="/">
        <Button color="light.bg" bg="light.text">Home</Button>
      </Link>
      <Flex flexDirection="column" alignItems="center" justifyContent="center">
        <Heading my={8}>Login Page</Heading>

        <FormControl my={2}>
          <FormLabel>Email</FormLabel>
          <Input></Input>
        </FormControl>
        <FormControl my={2}>
          <FormLabel>Password</FormLabel>
          <Input></Input>
        </FormControl>
        <Button>Login</Button>
      </Flex>
    </Main>
  )
}

export default Login