/* eslint-disable react/require-default-props, react/no-array-index-key */
import React from "react";

import { Box } from "@chakra-ui/react";
import { useColors } from "@hooks/useColors";

interface WelcomeSlidesProps {
  // eslint-disable-next-line react/require-default-props
  slides?: HTMLElement[];
  index?: number;
}

export default function WelcomeSlides(props: WelcomeSlidesProps) {
  const colors = useColors();
  const { slides } = props;

  return (
    <div>
      {slides?.map((_, i) => (
        <Box
          bg={props?.index === i ? colors.cyan : colors.gray}
          w="8px"
          h="8px"
          rounded="full"
          key={i}
        />
      ))}
    </div>
  );
}
