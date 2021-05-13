import {
  Flex,
  Button,
  useToast,
  Heading,
  Input,
  FormControl,
  FormErrorMessage,
} from '@chakra-ui/react';
import axios from 'axios';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import Label from '../../components/form/Label';
import { ExerciseDTO } from '../../interface/Exercise';
import Main from '../../layouts/Main';

/**
 * @TODO []
 * @TODO [X] Add ExerciseDTO to exercise interface
 * @TODO [X] Add FormErrorMessage to all fields
 * @TODO [] Add axios createExercise function to Exercise Actions Context
 * @TODO [] Create Custom Input component
 * @TODO [] Change Category Input to Select
 * @TODO [] Change Muscles Used Input to Select
 */

const Create: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const toast = useToast();
  const router = useRouter();

  const onSubmit = (data: ExerciseDTO) => {
    handleCreateExercise(data);
    router.push('/');
  };

  const handleCreateExercise = async (data: ExerciseDTO) => {
    try {
      const exercise: ExerciseDTO = data;
      const response = await axios.post(`${baseUrl}/exercises`, exercise);
      toast({
        title: 'Exercise registered!',
        status: 'success',
        isClosable: true,
      });
      return response.data;
    } catch (err) {
      throw new Error(err.message);
    }
  };

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
          <FormControl isInvalid={errors.title}>
            <Label id="title" label="Name" />
            <Input
              id="title"
              type="text"
              {...register('title', { required: true, minLength: 2 })}
            />
            <FormErrorMessage mt={0}>
              {errors.title && errors.title.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.description}>
            <Label id="description" label="Description" />
            <Input
              id="description"
              type="text"
              {...register('description', { required: true })}
            />
            <FormErrorMessage mt={0}>
              {errors.description && errors.description.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.musclesUsed}>
            <Label id="musclesUsed" label="Muscle groups used" />
            <Input
              id="musclesUsed"
              type="text"
              {...register('musclesUsed', { required: true })}
            />
            <FormErrorMessage mt={0}>
              {errors.musclesUsed && errors.musclesUsed.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.category}>
            <Label id="category" label="Category" />
            <Input
              id="category"
              type="text"
              {...register('category', { required: true })}
            />
            <FormErrorMessage mt={0}>
              {errors.category && errors.category.message}
            </FormErrorMessage>
          </FormControl>
          <Button
            type="submit"
            isLoading={isSubmitting}
            variant="solid"
            my={2}
            alignSelf="flex-end"
          >
            Salvar
          </Button>
        </Flex>
      </Flex>
    </Main>
  );
};

export default Create;
