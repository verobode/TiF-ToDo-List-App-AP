import { Box, IconButton, Text, Icon } from "@chakra-ui/react";
import { PhoneIcon } from '@chakra-ui/icons';
import React from "react";
import { FaReact } from "react-icons/fa6";
import { SiChakraui } from "react-icons/si";
import { FaCopyright } from "react-icons/fa";


const Footer = () => {
    return (

        <Box
            display="flex"
            justifyContent='space-between'
            position="absolute"
            bottom="0"
            right="0"
            bg="Gray"
            width="100%"
            marginLeft="3rem"
            px={4}
            py={2}
        >
            <Box 
               display="flex"
               alignItems="center"
               gap={1}>
            {<FaCopyright color="white"/>}   
            <Text color="white" fontWeight="bold" >Copyright 2023</Text>
            {/* <Text color="blak" fontWeight="bold" href="">About Us</Text> */}
            </Box>
            
            <Box 
                 display= "flex"
                 gap={4}
                  >
                    
                <IconButton
                    colorScheme='teal'
                    aria-label='Call Segun'
                    size='lg'
                    icon={<FaReact />}
                />
                <IconButton
                    
                    colorScheme='teal'
                    aria-label='Call Segun'
                    size='lg'
                    icon={<SiChakraui />}
                />
            </Box> 
            </Box>


    )


}

export { Footer }