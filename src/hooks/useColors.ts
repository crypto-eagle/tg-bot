import { useColorModeValue, useColorMode } from "@chakra-ui/react";
import { fixColorModeInLocalStorage } from "@core/providers/chakra-ui/chakra.custom-theme";

export function useColors() {
  fixColorModeInLocalStorage(useColorMode());

  return {
    black: useColorModeValue("whiteAlpha.900", "blackAlpha.900"),
    white: useColorModeValue("blackAlpha.900", "whiteAlpha.900"),
    cyan: useColorModeValue("red.500", "cyan.400"),
    pink: useColorModeValue("green.500", "pink.400"),
    gray: useColorModeValue("blackAlpha.200", "whiteAlpha.400"),
  };
}
