import "./Welcome.scss";
import { Box, HStack, VStack } from "@chakra-ui/react";
import { useSwiperState } from "@hooks/useSwiperState";
import { WelcomeSwiper } from "./components/WelcomeSwiper";
import { WelcomeSlides } from "./components/WelcomeSlides";
import { NextButton } from "./components/NextButton";

export const Welcome = () => {
  const { state, setSwiper } = useSwiperState();

  return (
    <VStack
      w="full"
      alignItems="center"
      justifyContent="space-between"
      spacing="15dvh"
    >
      <div></div>
      <Box w={"full"}>
        <WelcomeSwiper setSwiper={setSwiper} setIndex={state?.setIndex} />
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
};
