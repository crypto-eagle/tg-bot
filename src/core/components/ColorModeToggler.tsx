import {Button, ColorMode, Tooltip, useColorMode} from "@chakra-ui/react";
import {SunIcon, MoonIcon} from '@chakra-ui/icons'
import {setCustomColorModeStoreKey} from "@core/providers/chakra-ui/chakra.custom-theme";


export const ColorModeToggler = () => {
    const {colorMode, setColorMode} = useColorMode();
    const text = colorMode === "light" ? "Go Dark" : "Go Light";

    const setColor = () => {
        const color: ColorMode = colorMode === "light" ? "dark" : "light";
        setColorMode(color);

        setCustomColorModeStoreKey(color);
    }

    return (
        <Tooltip hasArrow placement='right' label={text}>
            <Button onClick={setColor}>
                {colorMode === "light" ? <MoonIcon/> : <SunIcon/>}
            </Button>
        </Tooltip>
    );
};
