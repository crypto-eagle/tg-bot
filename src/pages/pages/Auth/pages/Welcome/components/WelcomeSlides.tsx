import {Box} from "@chakra-ui/react";
import {useColors} from "@hooks/useColors";

interface WelcomeSlidesProps {
    slides?: HTMLElement[];
    index?: number;
}

export const WelcomeSlides = (props: WelcomeSlidesProps) => {
    const colors = useColors();

    return (
        <>
            {props.slides?.map((_, i) =>
                (
                    <Box
                        bg={props?.index === i ? colors.cyan : colors.gray}
                        w="8px"
                        h="8px"
                        rounded="full"
                        key={i}
                    />
                ))}
        </>
    );
};
