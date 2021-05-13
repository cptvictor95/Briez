import { FormLabel } from '@chakra-ui/form-control';
import React from 'react';

const Label: React.FC<{ id: string; label: string }> = ({ id, label }) => {
  return (
    <FormLabel htmlFor={id} mt={2}>
      {label}
    </FormLabel>
  );
};

export default Label;
