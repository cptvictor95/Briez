import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { FormErrorMessage, Input } from '@chakra-ui/react';
import React from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

const FormInput: React.FC<{
  id: string;
  label: string;
  error: boolean;
  register: UseFormRegister<FieldValues>;
  required: boolean;
}> = ({ id, label, error, register, required }) => {
  return (
    <FormControl isInvalid={error} maxW="300px">
      {error ? (
        <>
          <FormErrorMessage display="inline-block" m={0}>
            <FormLabel htmlFor={id}>{label} is required</FormLabel>
          </FormErrorMessage>
        </>
      ) : (
        <FormLabel htmlFor={id}>{label}</FormLabel>
      )}
      <Input id={id} {...register(id, { required })} />
    </FormControl>
  );
};

export default FormInput;
