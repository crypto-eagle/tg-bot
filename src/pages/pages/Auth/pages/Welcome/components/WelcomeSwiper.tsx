import "swiper/css";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Heading, Stack, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { Dispatch, SetStateAction } from "react";

interface WelcomeSwiperProps {
  setSwiper: Dispatch<SetStateAction<SwiperClass | undefined>>;
  setIndex?: (value: ((prevState: number) => number) | number) => void;
}

const slides = [
  {
    heading: "slides.slide1.heading",
    text: "slides.slide1.content",
  },
  {
    heading: "slides.slide2.heading",
    text: "slides.slide2.content",
  },
  {
    heading: "slides.slide3.heading",
    text: "slides.slide3.content",
  },
];

export const WelcomeSwiper = (props: WelcomeSwiperProps) => {
  const { t } = useTranslation();

  return (
    <Swiper onSwiper={props.setSwiper}>
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <Stack textAlign="center">
            <Heading> {t(slide.heading)} </Heading>
            <Text> {t(slide.text)} </Text>
          </Stack>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
