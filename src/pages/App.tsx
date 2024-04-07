import './App.scss';
import '../core/localization/l18n';
import logo from '../assets/react.svg';

import {RouterProvider} from "react-router-dom";
import React from "react";
import {routing} from "./routing";
import {Avatar, Box, HStack, Stack} from "@chakra-ui/react";
import {ColorModeToggler} from "@core/components/ColorModeToggler";
import {DebugBar} from "@core/components/DebugBar";
import {useColors} from "@hooks/useColors";
import {TonConnectButton} from "@tonconnect/ui-react";
import {LangChooser} from "./components/LangChooser";


export const App = () => {
    const colors = useColors();

    return (
        <>
            <Stack bg={colors.black} color={colors.white} w="100vw" h="100dvh" p="8">
                <Box bg={colors.cyan} w="60%" h="35%" rounded="full" filter="blur(100px)" pos="absolute"/>
                <Box bg={colors.pink} w="60%" h="35%" rounded="full" filter="blur(100px)" pos="absolute" bottom="0"
                     right="0"/>

                <Stack zIndex="1" w="100%" h="100%" justifyContent="space-between" alignItems="center">
                    <HStack w="100%" gap="24px" justifyContent="space-between">
                        <Avatar name='Logo' src={logo}/>

                        <HStack>
                            <TonConnectButton/>
                            <ColorModeToggler/>
                        </HStack>
                    </HStack>

                    <RouterProvider router={routing}/>

                    <LangChooser/>
                </Stack>
            </Stack>

            <DebugBar/>
        </>
    );
};
