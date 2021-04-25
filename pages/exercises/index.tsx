import { Center, Heading, Wrap } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ExerciseCard from '../../components/ExerciseCard'
import Spinner from '../../components/Spinner'
import { Exercise } from '../../interface/Exercise'

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
    <Center as="article" w="100%" flexDirection="column" p={8}>
      <Heading as="h4" fontSize="xl" alignSelf="flex-start" p={4}>
        List of Exercises
      </Heading>
      <Wrap as="section" spacing="30px" py={4} justify="center">
        {exercises && exercises.length !== 0 ? (
          exercises.map((exercise: Exercise) => {
            return <ExerciseCard key={exercise._id} exercise={exercise} />
          })
        ) : (
          <Spinner size="xl" />
        )}
      </Wrap>
    </Center>
  )
}

export default Exercises
