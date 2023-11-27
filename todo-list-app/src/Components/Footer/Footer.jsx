import { Box, IconButton, Text } from "@chakra-ui/react";
import { PhoneIcon, EmailIcon } from '@chakra-ui/icons';
import React from "react";

const Footer = () => {
  return (
    <Box
      display="flex"
      justifyContent='space-between'
      position="absolute"
      bottom="0"
      right="0"
      bg="blue.800"
      width="100%"
      px={4}
      py={2}
    >
      <Box 
        display="flex"
        alignItems="center"
        gap={1}
      >
        <Text color="white" fontWeight="bold" mr={2}>Contáctanos:</Text>
        <IconButton
          colorScheme='teal'
          aria-label='Call us'
          size='sm'
          icon={<PhoneIcon />}
        />
        <IconButton
          colorScheme='teal'
          aria-label='Send email'
          size='sm'
          icon={<EmailIcon />}
        />
      </Box>
    </Box>
  );
};

export default Footer;
