import {ChakraProvider} from "@chakra-ui/react";
import React from "react";
import {chakraCustomTheme} from "./chakra.custom-theme";

export const ChakraUIProvider = (props: { children: React.ReactNode }) => (
    <ChakraProvider theme={chakraCustomTheme}>{props.children}</ChakraProvider>
);
