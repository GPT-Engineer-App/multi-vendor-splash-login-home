import React from 'react';
import { Box, Button, Center, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate('/home');
  };

  return (
    <Center height="100vh">
      <Box width="sm" p={6} boxShadow="lg" borderRadius="md">
        <VStack spacing={4}>
          <FormControl id="name">
            <FormLabel>Name</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>
          <Button colorScheme="blue" width="full" onClick={handleRegister}>Register</Button>
        </VStack>
      </Box>
    </Center>
  );
};

export default Register;