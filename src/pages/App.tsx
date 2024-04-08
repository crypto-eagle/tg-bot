import './App.scss';
import '../core/localization/l18n';

import {RouterProvider} from "react-router-dom";
import React from "react";
import {routing} from "./routing";
import {Stack} from "@chakra-ui/react";
import {LangChooser} from "./components/LangChooser";
import {Header} from "./components/Header";
import {AppLayout} from "./components/AppLayout";


export const App = () => {
    return (
        <AppLayout>
            <Stack zIndex="1" w="100%" h="100%" justifyContent="space-between" alignItems="center">
                <Header w="100%" gap="24px" justifyContent="space-between"/>

                <RouterProvider router={routing}/>

                <LangChooser/>
            </Stack>
        </AppLayout>
    );
};
