import { Flex, Heading } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import Main from '../components/Main'

const Home: React.FC = () => {
  return (
    <Main>
      <Head>
        <title>Home</title>
      </Head>
      <Flex h="100%" align="center" justify="center">
        <Heading fontSize="78px" color="light.text">BRAV</Heading>
      </Flex>
    </Main>
  );
};

export default Home;
