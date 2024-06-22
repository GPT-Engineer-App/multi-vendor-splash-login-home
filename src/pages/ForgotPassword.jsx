import React from 'react';
import { Box, Button, Center, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleReset = () => {
    navigate('/reset-password');
  };

  return (
    <Center height="100vh">
      <Box width="sm" p={6} boxShadow="lg" borderRadius="md">
        <VStack spacing={4}>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>
          <Button colorScheme="blue" width="full" onClick={handleReset}>Reset Password</Button>
        </VStack>
      </Box>
    </Center>
  );
};

export default ForgotPassword;