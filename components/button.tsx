import { Button as ChakraButton } from '@chakra-ui/button';
import { useRouter } from 'next/dist/client/router';
import React from 'react';

const Button: React.FC<{
  toRoute: string;
}> = ({ children, toRoute }) => {
  const router = useRouter();

  const goToRoute = (route: string) => {
    return router.push(route);
  };
  return (
    <ChakraButton onClick={() => goToRoute(toRoute)} variant="solid" m={2}>
      {children}
    </ChakraButton>
  );
};

export default Button;
