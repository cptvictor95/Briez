import { Container, Flex, Heading } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';

const Home: React.FC = () => {
  return (
    <Container height="100vh" p={0} maxW="100%" bg="light.bg">
      <Head>
        <title>Home</title>
      </Head>
      <Flex flexDir="column" alignItems="center" justify="center">
        <Heading color="light.text">Hello World!</Heading>
      </Flex>
    </Container>
  );
};

export default Home;
