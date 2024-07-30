import "./index.scss";

import React from "react";
import { Box, VStack } from "@chakra-ui/react";
import { useSwiperState } from "@hooks/useSwiperState";
import WelcomeSwiper from "./components/WelcomeSwiper";
import WelcomeSlides from "./components/WelcomeSlides";
import NextButton from "./components/NextButton";
import { LangChooser } from "../../../../components/LangChooser";

export default function Welcome() {
  const { state, setSwiper } = useSwiperState();

  return (
    <VStack
      w="full"
      alignItems="center"
      justifyContent="space-between"
      spacing="15dvh"
    >
      <Box w="full" pt="50px">
        <WelcomeSwiper setSwiper={setSwiper} />
      </Box>
      <Box>
        <WelcomeSlides slides={state?.slides} index={state?.index} />
      </Box>

      <NextButton
        w="200px"
        isEnd={state?.isEnd}
        next={state?.next}
        first={state?.first}
      />

      <LangChooser />
    </VStack>
  );
}
