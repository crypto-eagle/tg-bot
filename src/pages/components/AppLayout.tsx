import React from "react";
import { useColors } from "@hooks/useColors";
import { Box, Stack } from "@chakra-ui/react";

export function AppLayout(props: { children: React.ReactNode }) {
  const colors = useColors();
  const { children } = props;

  return (
    <>
      <Stack bg={colors.black} color={colors.white} w="100vw" minH="100vh"  py={8} px={4}>
        <Box
          bg={colors.cyan}
          w="65%"
          h="50%"
          rounded="full"
          filter="blur(100px)"
          pos="absolute"
        />
        <Box
          bg={colors.pink}
          w="65%"
          h="50%"
          rounded="full"
          filter="blur(100px)"
          pos="absolute"
          bottom="0"
          right="0"
        />

        {children}
      </Stack>

      {/* <DebugBar /> */}
    </>
  );
}
