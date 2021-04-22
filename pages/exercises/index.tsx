import {
  Box,
  Center,
  Flex,
  Heading,
  ListItem,
  Spinner,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

interface Exercise {
  _id: string
  title: string
  description: string
  musclesUsed: string[]
  category: string
}

const Exercises: React.FC = () => {
  const [exercises, setExercises] = useState<Exercise[]>([])
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL

  const getExercises = async () => {
    try {
      const response = await axios.get(`${baseUrl}/exercises`)

      setExercises(response.data.exercises as Exercise[])
      return response
    } catch (err) {
      throw new Error(err.message)
    }
  }

  useEffect(() => {
    getExercises()
  }, [])

  return (
    <Center as="section" w="100%" flexDirection="column" p={8}>
      <Heading as="h4" fontSize="xl">
        List of Exercises
      </Heading>
      <Wrap spacing="30px" py={4}>
        {exercises.length !== 0 ? (
          exercises.map((exercise: Exercise) => {
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
            )
          })
        ) : (
          <Spinner fontSize="72px" color="purple.500" />
        )}
      </Wrap>
    </Center>
  )
}

export default Exercises
