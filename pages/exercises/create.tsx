import { Flex, Button, useToast, Heading } from '@chakra-ui/react'
import axios from 'axios'
import { Router, useRouter } from 'next/dist/client/router'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import FormInput from '../../components/FormInput'
import Main from '../../layouts/Main'

interface IExercise {
  title: string
  description: string
  musclesUsed: string[]
  category: string
}

const Create: React.FC = () => {
  const { register, handleSubmit, formState, errors } = useForm()
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
  const toast = useToast()
  const router = useRouter()

  const onSubmit = (data) => {
    console.info('form data', data)
    handleCreateExercise(data)
    router.push('/')
  }

  const handleCreateExercise = async (data: IExercise) => {
    try {
      const exercise: IExercise = data
      const response = await axios.post(`${baseUrl}/exercises`, exercise)
      console.info('axios data', response)
      toast({
        title: 'Exercise registered!',
        status: 'success',
        isClosable: true,
      })
      return response.data
    } catch (err) {
      throw new Error(err.message)
    }
  }

  return (
    <Main title="Create Exercise">
      <Flex as="section" w="100%" h="100%" justify="center" align="center">
        <Flex
          as="form"
          onSubmit={handleSubmit(onSubmit)}
          direction="column"
          justify="center"
        >
          <Heading as="h2" fontSize="2xl" p={4}>
            Create your exercise
          </Heading>
          <FormInput
            label="Name"
            id="title"
            name="title"
            type="text"
            error={errors.title}
            isInvalid={errors.title}
            register={register({ required: true, minLength: 2 })}
          />
          <FormInput
            label="Description"
            id="description"
            name="description"
            type="text"
            error={errors.description}
            isInvalid={errors.description}
            register={register({ required: true })}
          />
          <FormInput
            label="Muscle groups used"
            id="musclesUsed"
            name="musclesUsed"
            type="text"
            error={errors.musclesUsed}
            isInvalid={errors.musclesUsed}
            register={register({ required: true })}
          />
          <FormInput
            label="Category"
            id="category"
            name="category"
            type="text"
            error={errors.category}
            isInvalid={errors.category}
            register={register({ required: true })}
          />
          <Button
            type="submit"
            isLoading={formState.isSubmitting}
            variant="solid"
            my={2}
            alignSelf="flex-end"
          >
            Salvar
          </Button>
        </Flex>
      </Flex>
    </Main>
  )
}

export default Create
