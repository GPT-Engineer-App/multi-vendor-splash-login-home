import React, { useEffect } from 'react';
import { Box, Text, Spinner, Center } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/onboarding');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Center height="100vh">
      <Box textAlign="center">
        <Text fontSize="4xl" mb={4}>Multi Vendor App</Text>
        <Spinner size="xl" />
      </Box>
    </Center>
  );
};

export default Splash;