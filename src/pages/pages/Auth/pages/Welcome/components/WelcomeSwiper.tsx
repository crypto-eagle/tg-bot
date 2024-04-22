/* eslint-disable react/require-default-props, react/no-array-index-key */

import "swiper/css";
import React, { Dispatch, SetStateAction } from "react";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Heading, Stack, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

interface WelcomeSwiperProps {
  setSwiper: Dispatch<SetStateAction<SwiperClass | undefined>>;
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

export default function WelcomeSwiper(props: WelcomeSwiperProps) {
  const { t } = useTranslation();
  const { setSwiper } = props;

  return (
    <Swiper onSwiper={setSwiper}>
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
}
