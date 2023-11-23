import { useState } from 'react'
import './App.css'
import { Box, ChakraProvider, Flex, Button, Spacer, ButtonGroup, Checkbox, Text } from '@chakra-ui/react'
import { Center, Heading } from '@chakra-ui/react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <ChakraProvider>
      <Box >
        <Heading mb={12}>TP F- Grupo J</Heading>

        <Box>
          {/* Todo - Header */}
          <Flex minWidth='max-content' alignItems='center' gap='2' m={8} p={4} mb={0} bg={'gray'}>
            <Box p='2'>
              <Heading size='md' color={'white'}>Chakra App</Heading>
            </Box>
            <Spacer />
            <ButtonGroup gap='2'>
              <Button colorScheme='teal'>+</Button>
            </ButtonGroup>
          </Flex>
          {/* Todo - Body */}
          <Flex border='1px' borderColor='gray.200' mx={8} p={4}>
            <Checkbox colorScheme='green' py={2} px={4} defaultChecked></Checkbox>
            <Center>
              <Text fontSize='lg'>Throw away my books</Text>
            </Center>
          </Flex>

          <Flex border='1px' borderColor='gray.200' mx={8} p={4}>
            <Checkbox colorScheme='green' py={2} px={4}></Checkbox>
            <Text fontSize='lg'>Love with React</Text>
          </Flex>

          <Flex border='1px' borderColor='gray.200' mx={8} p={4}>
            <Checkbox colorScheme='green' py={2} px={4} ></Checkbox>
            <Text fontSize='lg'>War against Chakra UI</Text>
          </Flex>
        </Box>
      </Box>
    </ChakraProvider>
  )
}

export default App
