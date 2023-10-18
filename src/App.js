// App.js
import React from 'react';
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react';

import Game from './Components/Game';

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Game/>
    </ChakraProvider>
  );
}

export default App;

