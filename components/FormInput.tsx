import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/react'
import React from 'react'

const FormInput = ({ register, error, label, id, name, type, isInvalid }) => {
  return (
    <FormControl isInvalid={isInvalid}>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <Input id={id} name={name} type={type} ref={register} />
      <FormErrorMessage>{error && error.message}</FormErrorMessage>
    </FormControl>
  )
}

export default FormInput
