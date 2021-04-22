import {
  Center,
  Heading,
  List,
  ListItem,
  Spinner,
  Text,
} from '@chakra-ui/react'
import axios from 'axios'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import Main from '../layouts/Main'

interface Exercise {
  id: string
  title: string
  description: string
  musclesUsed: string[]
  category: string
}

const Home: React.FC = () => {
  const [exercises, setExercises] = useState<Exercise[]>([])
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
  console.info(baseUrl)

  const getExercises = async () => {
    try {
      const response = await axios.get(`${baseUrl}/exercises`)

      console.info('axios data', response.data)
      setExercises(response.data.exercises as Exercise[])
      return response
    } catch (err) {
      throw new Error(err.message)
    }
  }

  useEffect(() => {
    getExercises()
    console.info('exercises on state:', exercises)
  }, [])

  return (
    <Main>
      <Head>
        <title>Brav</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Center h="100vh" w="100%" flexDirection="column">
        <Heading as="h1">Hello! Welcome to BRAV</Heading>
        <Heading as="h4">List of Exercises</Heading>

        <List>
          {exercises.length !== 0 ? (
            exercises.map((exercise: Exercise) => {
              return (
                <ListItem key={exercise.id}>
                  <Text>{exercise.title}</Text>
                </ListItem>
              )
            })
          ) : (
            <Spinner size="2xl" />
          )}
        </List>
      </Center>
    </Main>
  )
}

export default Home
