import React from "react";

import { Box, Text, useColorMode } from "@chakra-ui/react";

export function CurrentColorModeBanner() {
  const { colorMode } = useColorMode();
  return (
    <Box w="100%" bg="white" color="black">
      <Text textAlign="center" fontSize="xs" fontWeight="bold">
        Current Color Mode: {colorMode}
      </Text>
    </Box>
  );
}
