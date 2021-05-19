import { Heading, Text, WrapItem } from '@chakra-ui/layout';
import React from 'react';
import { Exercise } from '../../interface/Exercise';

const ExerciseCard: React.FC<{ exercise: Exercise }> = ({ exercise }) => {
  return (
    <WrapItem
      key={exercise._id}
      borderWidth="1px"
      borderRadius="5px"
      borderColor="purple.500"
      bgColor="purple.50"
      flexDirection="column"
      w="100%"
      maxW="400px"
      maxH="300px"
      minH="100%"
      p={6}
    >
      <Heading as="h5" fontSize="md">
        {exercise.title}
      </Heading>
      <Text>{exercise.description}</Text>
    </WrapItem>
  );
};

export default ExerciseCard;
