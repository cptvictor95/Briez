import { Wrap } from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react';
import { ExerciseActionsCtx } from '../../context/exerciseActionsCtx';
import { ExerciseCtx } from '../../context/exerciseContext';
import { Exercise } from '../../interface/Exercise';
import Spinner from '../generic/Spinner';
import ExerciseCard from './ExerciseCard';

const ExerciseList: React.FC = () => {
  const { state } = useContext(ExerciseCtx);

  return (
    <Wrap as="section" spacing="30px" py={4} justify="center">
      {state.exercises && state.exercises ? (
        state.exercises.length === 0 ? (
          'No exercises registered.'
        ) : (
          state.exercises.map((exercise: Exercise) => {
            return <ExerciseCard key={exercise.id} exercise={exercise} />;
          })
        )
      ) : (
        <Spinner size="xl" />
      )}
    </Wrap>
  );
};

export default ExerciseList;
