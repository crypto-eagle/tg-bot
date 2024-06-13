import { useColorModeValue, useColorMode } from "@chakra-ui/react";
import { fixColorModeInLocalStorage } from "@core/providers/chakra-ui/chakra.custom-theme";

export function useColors() {
  fixColorModeInLocalStorage(useColorMode());

  return {
    black: useColorModeValue("whiteAlpha.900", "blackAlpha.900"),
    lightblack: useColorModeValue("whiteAlpha.900", "#1A181B"),
    white: useColorModeValue("blackAlpha.900", "whiteAlpha.900"),
    cyan: useColorModeValue("red.500", "cyan.400"),
    pink: useColorModeValue("green.500", "pink.400"),
    gray: useColorModeValue("blackAlpha.200", "whiteAlpha.400"),
    green: useColorModeValue("rgb(22, 240, 201)", "rgb(22, 240, 201)"),
    darkgreen: useColorModeValue("rgb(56, 161, 105)", "rgb(56, 161, 105)"),
    blue: useColorModeValue("#0098EA", "#0098EA"),
    turquoise: useColorModeValue("rgb(9, 221, 250)", "rgb(9, 221, 250)"),
    notActivated: useColorModeValue("#F56565", "#F56565"),
    lightred: useColorModeValue("#FC8181", "#FC8181"),
    lightorange: useColorModeValue("#F6AD55", "#F6AD55"),
    orange: useColorModeValue("#ED8936", "#ED8936")
  };
}
