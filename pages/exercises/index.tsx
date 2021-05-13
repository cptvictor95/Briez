import { Center, Heading } from '@chakra-ui/react';
import React from 'react';
import ExerciseList from '../../components/exercises/ExerciseList';
import Header from '../../components/Header';
import Main from '../../layouts/Main';

const Exercises: React.FC = () => {
  return (
    <Main title="Catalog">
      <Center as="article" w="100%" flexDirection="column" p={8}>
        <Heading as="h4" fontSize="xl" alignSelf="flex-start" p={4}>
          List of Exercises
        </Heading>
        <ExerciseList />
      </Center>
    </Main>
  );
};

export default Exercises;
