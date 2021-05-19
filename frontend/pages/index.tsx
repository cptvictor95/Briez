import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import Main from '../layouts/Main';

const Home: React.FC = () => {
  return (
    <Main title="Home">
      <Flex as="article" h="100vh" w="100%" direction="column">
        <Text>Home page</Text>
      </Flex>
    </Main>
  );
};

export default Home;
