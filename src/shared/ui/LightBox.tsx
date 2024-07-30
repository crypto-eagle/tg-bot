import React from "react";

import { Box } from "@chakra-ui/react";
import { useColors } from "@hooks/useColors";

interface Props {
  children: React.ReactNode;
}

export function LightBox({ children }: Props) {
  const colors = useColors();

  return (
    <Box
      px="6"
      py="4"
      w="100%"
      fontWeight="bold"
      borderRadius="3xl"
      bg="whiteAlpha.400"
      border={`3px solid ${colors.turquoise}`}
    >
      {children}
    </Box>
  );
}
