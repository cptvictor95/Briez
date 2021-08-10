import { Heading, Text, WrapItem } from '@chakra-ui/layout';
import { Flex } from '@chakra-ui/react';
import React from 'react';
import { Exercise } from '../../interface/Exercise';

interface Category {
  id: number;
  name: string;
  created_at: any;
  published_at: any;
  updated_at: any;
}

const ExerciseCard: React.FC<{ exercise: Exercise }> = ({ exercise }) => {
  return (
    <WrapItem
      key={exercise.id}
      borderWidth="1px"
      borderRadius="5px"
      borderColor="purple.500"
      bgColor="purple.50"
      flexDirection="column"
      w="100%"
      minH="300px"
      p={6}
    >
      <Flex w="100%" justify="space-between" align="center">
        <Heading as="h5" fontSize="md">
          {exercise.name}
        </Heading>
        {exercise.categories.map((category: Category) => (
          <Text key={category.id} fontSize="sm">
            {category.name}
          </Text>
        ))}
      </Flex>
      <Text maxW="100%">{exercise.description}</Text>
    </WrapItem>
  );
};

export default ExerciseCard;
