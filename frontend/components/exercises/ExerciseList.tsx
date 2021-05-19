import { Wrap, Spinner } from '@chakra-ui/react';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { ExerciseCtx } from '../../context/exerciseContext';
import { Exercise } from '../../interface/Exercise';
import ExerciseCard from './ExerciseCard';

const ExerciseList = () => {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const { state } = useContext(ExerciseCtx);
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  const getExercises = async () => {
    try {
      const response = await axios.get(`${baseUrl}/exercises`);

      setExercises(response.data.exercises as Exercise[]);
      return response;
    } catch (err) {
      throw new Error(err.message);
    }
  };

  useEffect(() => {
    getExercises();
  }, []);

  return (
    <Wrap as="section" spacing="30px" py={4} justify="center">
      {exercises && exercises.length !== 0 ? (
        exercises.map((exercise: Exercise) => {
          return <ExerciseCard key={exercise._id} exercise={exercise} />;
        })
      ) : (
        <Spinner size="xl" />
      )}
    </Wrap>
  );
};

export default ExerciseList;
