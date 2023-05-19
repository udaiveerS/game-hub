import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ChakraProvider>
      <Button colorScheme={"blue"}>Test</Button>
    </ChakraProvider>
  );
}

export default App;
