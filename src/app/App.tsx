import '../core/localization/l18n';

import {RouterProvider} from "react-router-dom";
import React from "react";
import {routing} from "./routing";
import {useTranslation, setI18n} from "react-i18next";
import i18next from "i18next";


export const App = () => {
    const {t} = useTranslation();

    return (
        <div>
            <div> {t('app.greeting')} </div>
            <RouterProvider router={routing}/>

            <button onClick={() => {
                i18next.changeLanguage(i18next.language === 'en' ? 'ru' : 'en').then()
            }}> {i18next.language === 'en' ? 'ru' : 'en'} </button>
        </div>
    );
};
