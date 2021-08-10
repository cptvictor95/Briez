import {
  Flex,
  Heading,
  FormControl,
  Button,
  useToast,
  Select,
  FormLabel,
  Checkbox,
  CheckboxGroup,
} from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import React, { useContext } from 'react';
import { FieldErrors, useForm } from 'react-hook-form';
import { ExerciseActionsCtx } from '../../context/exerciseActionsCtx';
import { ExerciseDTO } from '../../interface/Exercise';
import FormInput from '../form/FormInput';

const ExerciseForm = () => {
  const { actions } = useContext(ExerciseActionsCtx);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ExerciseDTO | FieldErrors>();

  const toast = useToast();
  const router = useRouter();

  const onSubmit = (data: ExerciseDTO) => {
    handleCreateExercise(data);
    router.push('/');
  };

  const handleCreateExercise = async (data: ExerciseDTO) => {
    try {
      const exercise: ExerciseDTO = data;

      console.info('form data', exercise);
      actions.create(exercise);

      toast({
        title: 'Exercise registered!',
        status: 'success',
        isClosable: true,
      });
    } catch (err) {
      throw new Error(err.message);
    }
  };

  return (
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
        error={errors.title}
        id="title"
        label="Name"
        register={register}
        required
      />
      <FormInput
        error={errors.description}
        id="description"
        label="Description"
        register={register}
        required
      />
      <FormControl isInvalid={errors.muscleGroups}>
        <FormLabel htmlFor="muscleGroups">Muscles Groups Targeted</FormLabel>
        <CheckboxGroup {...register('muscleGroups', { required: true })}>
          <Checkbox value="Shoulders">Shoulders</Checkbox>
          <Checkbox value="Chest">Chest</Checkbox>
          <Checkbox value="Back">Back</Checkbox>
          <Checkbox value="Abs">Abs</Checkbox>
          <Checkbox value="Legs">Legs</Checkbox>
          <Checkbox value="Arms">Arms</Checkbox>
        </CheckboxGroup>
      </FormControl>
      <FormControl isInvalid={errors.category}>
        <FormLabel htmlFor="category">Category</FormLabel>
        <Select
          id="category"
          placeholder="Choose a category"
          {...register('category', { required: true })}
        >
          <option value="Calisthenics">Calisthenics</option>
          <option value="Yoga">Yoga</option>
        </Select>
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
  );
};

export default ExerciseForm;
