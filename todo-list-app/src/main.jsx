import React from 'react'
import ReactDOM from 'react-dom/client';
import {App} from './App'
import { ChakraProvider, extendTheme } from "@chakra-ui/react";


const theme = extendTheme({
  styles: {
    global: {
      html: {
        height: "100%",
      },
      body: {
        height: "100%",
        margin: 0,
        bg: "gray.400",
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
)
