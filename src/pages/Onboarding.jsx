import React from 'react';
import { Box, Button, Center, Text, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Onboarding = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/login');
  };

  return (
    <Center height="100vh">
      <Box textAlign="center">
        <VStack spacing={4}>
          <Text fontSize="4xl">Welcome to Multi Vendor App</Text>
          <Text>Discover and shop from multiple vendors in one place.</Text>
          <Button colorScheme="blue" onClick={handleGetStarted}>Get Started</Button>
        </VStack>
      </Box>
    </Center>
  );
};

export default Onboarding;