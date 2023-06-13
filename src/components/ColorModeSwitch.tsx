import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import React from "react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch onChange={toggleColorMode}></Switch>
      <Text>Toggle Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
