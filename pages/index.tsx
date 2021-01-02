import { Container, Flex, Heading } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';

const Home: React.FC = () => {
  return (
    <Container height="100vh" p={0} maxW="100%" bg="light.bg">
      <Head>
        <title>Home</title>
      </Head>
      <Flex h="100%" align="center" justify="center">
        <Heading fontSize="78px" color="light.text">BRAV</Heading>
      </Flex>
    </Container>
  );
};

export default Home;
