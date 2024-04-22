import "./index.scss";

import React from "react";
import { Box, HStack, VStack } from "@chakra-ui/react";
import { useSwiperState } from "@hooks/useSwiperState";
import WelcomeSwiper from "./components/WelcomeSwiper";
import WelcomeSlides from "./components/WelcomeSlides";
import NextButton from "./components/NextButton";

export default function Welcome() {
  const { state, setSwiper } = useSwiperState();

  return (
    <VStack
      w="full"
      alignItems="center"
      justifyContent="space-between"
      spacing="15dvh"
    >
      <Box w="full">
        <WelcomeSwiper setSwiper={setSwiper} />
      </Box>
      <HStack>
        <WelcomeSlides slides={state?.slides} index={state?.index} />
      </HStack>

      <NextButton
        w="200px"
        isEnd={state?.isEnd}
        next={state?.next}
        first={state?.first}
      />
    </VStack>
  );
}
