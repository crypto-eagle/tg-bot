import './Welcome.scss';
import {
    Box,
    Button,
    HStack,
    Heading,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverContent,
    PopoverTrigger,
    Stack,
    Text,
} from "@chakra-ui/react";
import {useState} from "react";
import {Swiper, SwiperClass, SwiperSlide} from "swiper/react";

export const Welcome = () => {
    const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(
        null
    );
    const [isEnd, setIsEnd] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const onNext = () => {
        if (swiperInstance) {
            swiperInstance.slideNext();
            if (swiperInstance.isEnd) setIsEnd(true);
        }
    };
    return (
        <Stack
            alignItems={"center"}
            w="full"
            bgColor={"#1A181B"}
            color={"white"}
            h={"100dvh"}
            justifyContent={"space-between"}
            p={8}
            overflow={"hidden"}
            pos={"relative"}
        >
            <Box
                bgColor={"#09DDFA"}
                w={"300px"}
                h={"300px"}
                rounded={"full"}
                filter={"blur(100px)"}
                top={0}
                left={0}
                pos={"absolute"}
            />
            <Box
                bgColor={"#FF35B8"}
                w={"300px"}
                h={"300px"}
                rounded={"full"}
                filter={"blur(100px)"}
                bottom={0}
                right={"-20%"}
                pos={"absolute"}
            />
            <Box zIndex={10}>
                LOGO
            </Box>

            <Box w={"full"}>
                <Swiper
                    onSwiper={(swiper) => setSwiperInstance(swiper)}
                    spaceBetween={0}
                    slidesPerView={1}
                    onSlideChange={({activeIndex}) => setActiveIndex(activeIndex)}
                >
                    <SwiperSlide>
                        <Stack textAlign={"center"}>
                            <Heading>WELCOME! Maecenas tempus</Heading>
                            <Text>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                                commodo ligula eget dolor. Aenean massa.
                            </Text>
                        </Stack>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Stack textAlign={"center"}>
                            <Heading>WELCOME! Maecenas tempus</Heading>
                            <Text>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                                commodo ligula eget dolor. Aenean massa.
                            </Text>
                        </Stack>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Stack textAlign={"center"}>
                            <Heading>WELCOME! Maecenas tempus</Heading>
                            <Text>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                                commodo ligula eget dolor. Aenean massa.
                            </Text>
                        </Stack>
                    </SwiperSlide>
                </Swiper>
            </Box>
            <HStack gap={"3"}>
                {swiperInstance?.slides?.map((_, i) => {
                    return (
                        <Box
                            bg={"rgba(255, 255, 255, 0.2)"}
                            {...(activeIndex == i && {
                                bgColor: "#00FAFE",
                            })}
                            w={"6px"}
                            h={"6px"}
                            rounded={"full"}
                            key={i}
                        />
                    );
                })}
            </HStack>
            <Stack maxW={"266px"} w="100%" gap={4}>
                {!isEnd && (
                    <Button
                        variant="outline"
                        rounded={"full"}
                        borderWidth={3}
                        borderColor={"#09DDFA"}
                        maxW={"266px"}
                        w="100%"
                        bg={"rgba(255, 255, 255, 0.2)"}
                        onClick={onNext}
                        color={"white"}
                        _hover={{
                            bg: "rgba(255, 255, 255, 0.2)",
                        }}
                    >
                        Next
                    </Button>
                )}
                {isEnd && (
                    <Button
                        rounded={"full"}
                        maxW={"266px"}
                        w="100%"
                        bgColor={"#0098EA"}
                        color="white"
                        _hover={{
                            bgColor: "#0098EA",
                        }}
                    >
                        Connect Wallet
                    </Button>
                )}
                <Button variant="link" color="white">
                    Skip to the App
                </Button>
            </Stack>
            <Popover>
                <PopoverTrigger>
                    <Button variant={"link"} color="white" textDecoration={"underline"}>
                        language
                    </Button>
                </PopoverTrigger>
                <PopoverContent>
                    <PopoverArrow/>
                    <PopoverBody>
                        Are you sure you want to have that milkshake?
                    </PopoverBody>
                </PopoverContent>
            </Popover>
        </Stack>
    );
};
