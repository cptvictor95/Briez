import { Center, Heading } from '@chakra-ui/react';
import React, { useContext } from 'react';
import ExerciseList from '../../components/exercises/ExerciseList';
import { ExerciseActionsProvider } from '../../context/exerciseActionsCtx';
import { ExerciseProvider } from '../../context/exerciseContext';
import Main from '../../layouts/Main';

const Exercises: React.FC = () => {
  return (
    <ExerciseActionsProvider>
      <ExerciseProvider>
        <Main title="Catalog">
          <Center as="article" w="100%" flexDirection="column" p={8}>
            <Heading as="h4" fontSize="xl" alignSelf="flex-start" p={4}>
              List of Exercises
            </Heading>
            <ExerciseList />
          </Center>
        </Main>
      </ExerciseProvider>
    </ExerciseActionsProvider>
  );
};

export default Exercises;
