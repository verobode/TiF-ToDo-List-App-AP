import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box bg="red.500" color="white" p={4}>
      <Text fontSize="2xl" fontWeight="bold" textAlign='center'>
        Grupo J: To do List
      </Text>
    </Box>
  );
};

export default Header;
