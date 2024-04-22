import React from "react";

import { Box } from "@chakra-ui/react";
import { PrefersColorSchemeBanner } from "./PrefersColorSchemeBanner";
import { CurrentColorModeBanner } from "./CurrentColorModeBanner";

export function DebugBar() {
  return (
    <Box position="fixed" bottom="0" left="0" right="0">
      <PrefersColorSchemeBanner />
      <CurrentColorModeBanner />
    </Box>
  );
}
