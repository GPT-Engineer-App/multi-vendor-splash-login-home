import React from 'react';
import { Box, Button, Center, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
  const navigate = useNavigate();

  const handleReset = () => {
    navigate('/login');
  };

  return (
    <Center height="100vh">
      <Box width="sm" p={6} boxShadow="lg" borderRadius="md">
        <VStack spacing={4}>
          <FormControl id="password">
            <FormLabel>New Password</FormLabel>
            <Input type="password" />
          </FormControl>
          <FormControl id="confirm-password">
            <FormLabel>Confirm Password</FormLabel>
            <Input type="password" />
          </FormControl>
          <Button colorScheme="blue" width="full" onClick={handleReset}>Reset Password</Button>
        </VStack>
      </Box>
    </Center>
  );
};

export default ResetPassword;