import React from 'react';
import { Box, Button, Center, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/home');
  };

  return (
    <Center height="100vh">
      <Box width="sm" p={6} boxShadow="lg" borderRadius="md">
        <VStack spacing={4}>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>
          <Button colorScheme="blue" width="full" onClick={handleLogin}>Login</Button>
        </VStack>
      </Box>
    </Center>
  );
};

export default Login;