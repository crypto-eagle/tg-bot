import { Outlet, Link as ReactRouterLink } from "react-router-dom";
import React from "react";
import { Link as ChakraLink, VStack } from "@chakra-ui/react";

export function TestPage() {
  return (
    <>
      This the TESTs section
      <VStack>
        <ChakraLink as={ReactRouterLink} to="/test/days-back">
          Days back
        </ChakraLink>
        <ChakraLink as={ReactRouterLink} to="/">
          Home
        </ChakraLink>
      </VStack>
      <Outlet />
    </>
  );
}
