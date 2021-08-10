import { Flex } from '@chakra-ui/react';
import React from 'react';
import ExerciseForm from '../../components/exercises/ExerciseForm';
import { ExerciseActionsProvider } from '../../context/exerciseActionsCtx';
import Main from '../../layouts/Main';

/**
 * @TODO [X] Add ExerciseDTO to exercise interface
 * @TODO [X] Add FormErrorMessage to all fields
 * @TODO [X] Add axios createExercise function to Exercise Actions Context
 * @TODO [X] Create Custom Input
 * @TODO [] Change Category Input into Select
 * @TODO [] Change Muscles Groups Used Input into Checkbox
 */

const Create: React.FC = () => {
  return (
    <ExerciseActionsProvider>
      <Main title="Create Exercise">
        <Flex as="section" w="100%" h="100%" justify="center" align="center">
          <ExerciseForm />
        </Flex>
      </Main>
    </ExerciseActionsProvider>
  );
};

export default Create;
