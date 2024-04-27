import React from "react";

import { Box } from "@chakra-ui/react";
import { useColors } from "@hooks/useColors";

interface Props {
  children: React.ReactNode;
}

export function BlackBox({ children }: Props) {
  const colors = useColors();

  return (
    <Box
      w="100%"
      fontWeight="bold"
      p="6"
      borderRadius="3xl"
      bg={colors.lightblack}
    >
      {children}
    </Box>
  );
}
