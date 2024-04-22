import { useEffect, useState } from "react";
import { SwiperClass } from "swiper/react";

interface SliderState {
  slides?: HTMLElement[];
  isEnd: boolean;
  index: number;
  first: () => void;
  next: () => void;
}

export function useSwiperState() {
  const [index, setIndex] = useState(0);
  const [swiper, setSwiper] = useState<SwiperClass>();

  const [state, setState] = useState<SliderState>();

  useEffect(() => {
    setState(() => ({
      slides: swiper?.slides,
      isEnd: index === (swiper?.slides?.length || 1) - 1,
      index,
      setIndex,
      first: () => {
        if (!swiper) {
          return;
        }

        swiper.slideTo(0);
        setIndex(swiper.activeIndex);
      },
      next: () => {
        if (!swiper) {
          return;
        }

        swiper.slideNext();
        setIndex(swiper.activeIndex);
      },
    }));
  }, [swiper, index]);

  return {
    state,
    setSwiper,
  };
}
