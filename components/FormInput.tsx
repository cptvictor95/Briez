import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/react'
import React from 'react'

const FormInput: React.FC<{
  register
  error
  label: string
  id: string
  name: string
  type: string
  isInvalid: boolean
}> = ({ register, error, label, id, name, type, isInvalid }) => {
  return (
    <FormControl isInvalid={isInvalid}>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <Input
        id={id}
        name={name}
        type={type}
        ref={register}
        borderColor="purple.700"
        _hover={{
          borderColor: 'purple.500',
        }}
        _focus={{
          borderColor: 'purple.500',
        }}
        _active={{
          borderColor: 'purple.500',
        }}
        mb={2}
      />
      <FormErrorMessage>{error && error.message}</FormErrorMessage>
    </FormControl>
  )
}

export default FormInput
