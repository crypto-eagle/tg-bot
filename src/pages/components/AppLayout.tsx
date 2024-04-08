import React from "react";
import {useColors} from "@hooks/useColors";
import {Box, Stack} from "@chakra-ui/react";
import {DebugBar} from "@core/components/DebugBar";

export const AppLayout = (props: { children: React.ReactNode }) => {
    const colors = useColors();

    return (
        <>
            <Stack bg={colors.black} color={colors.white} w="100vw" h="100dvh" p="8">
                <Box bg={colors.cyan} w="60%" h="35%" rounded="full" filter="blur(100px)" pos="absolute"/>
                <Box bg={colors.pink} w="60%" h="35%" rounded="full" filter="blur(100px)" pos="absolute" bottom="0"
                     right="0"/>

                {props.children}
            </Stack>

            <DebugBar/>
        </>
    );
};
