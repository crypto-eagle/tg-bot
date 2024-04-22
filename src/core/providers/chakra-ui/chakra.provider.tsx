import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { chakraCustomTheme } from "./chakra.custom-theme";

export function ChakraUIProvider(props: { children: React.ReactNode }) {
  const { children } = props;

  return <ChakraProvider theme={chakraCustomTheme}>{children}</ChakraProvider>;
}
