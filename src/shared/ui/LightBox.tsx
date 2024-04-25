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
      p="6"
      w="100%"
      fontWeight="bold"
      borderRadius="20px"
      bg="whiteAlpha.400"
      border={`3px solid ${colors.turquoise}`}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      {children}
    </Box>
  );
}
