import './App.scss';
import '../core/localization/l18n';

import {RouterProvider} from "react-router-dom";
import React from "react";
import {routing} from "./routing";
import {useTranslation} from "react-i18next";
import i18next from "i18next";
import {Button, Flex, Heading, Stack} from "@chakra-ui/react";
import {ColorModeToggler} from "../core/components/ColorModeToggler";
import {DebugBar} from "../core/components/DebugBar";


export const App = () => {
    const {t} = useTranslation();

    return (
        <>
            <Stack p="4" spacing="6">
                <Flex justify="space-between" align="center">
                    <Heading> {t('app.greeting')} </Heading>
                    <ColorModeToggler/>
                </Flex>
            </Stack>

            <RouterProvider router={routing}/>

            <Button onClick={() => {
                i18next.changeLanguage(i18next.language === 'en' ? 'ru' : 'en').then()
            }}> {i18next.language === 'en' ? 'ru' : 'en'} </Button>

            <DebugBar/>
        </>
    );
};
