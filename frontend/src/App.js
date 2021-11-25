import React from "react";
import { ChakraProvider } from "@chakra-ui/react"

import Rutas from "./routers/Rutas";

function App() {

  
 
  return (
    <>
    <ChakraProvider>
      <Rutas/>
      </ChakraProvider>
    </>
  );
}

export default App;