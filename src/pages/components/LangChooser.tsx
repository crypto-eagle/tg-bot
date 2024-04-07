import i18next from "i18next";
import React, {useEffect, useState} from "react";
import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {ChevronDownIcon} from '@chakra-ui/icons'
import {useTranslation} from "react-i18next";

const languages = ['en', 'ru'];

export const LangChooser = () => {
    const {t} = useTranslation();

    const [lang, setLang] = useState(i18next.language);
    useEffect(() => {
        i18next.changeLanguage(lang);
    }, [lang]);

    return (
        <>
            <Menu>
                <MenuButton as={Button} border="none" bg="transparent" _hover="" _active="" _focus={{outline: "none"}}
                            rightIcon={<ChevronDownIcon/>}> {t('languages.title')} </MenuButton>
                <MenuList>
                    {languages
                        .filter(item => item !== lang)
                        .map(item => {
                            return <MenuItem key={item}
                                onClick={() => setLang(item)}>
                                {t(`languages.${item}`)}
                            </MenuItem>;
                        }
                    )}
                </MenuList>
            </Menu>
        </>
    );
};
