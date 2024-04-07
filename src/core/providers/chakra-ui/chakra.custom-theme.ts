import {ColorMode, ColorModeContextType, extendTheme, ThemeConfig} from "@chakra-ui/react";

const config: ThemeConfig = {
    initialColorMode: "dark",
    useSystemColorMode: false
};
export const chakraCustomTheme = extendTheme({
    config
});

export function deleteColorModeInLocalStorage() {
    window.localStorage.removeItem("chakra-ui-color-mode");
    console.log('deleted "chakra-ui-color-mode" from local storage');
    console.log("You can now refresh to see how a first visit looks like.");
}

const customColorModeStoreKey = 'custom-color-mode-store';

export function fixColorModeInLocalStorage(colorMode: ColorModeContextType) {
    const storedMode = localStorage.getItem('chakra-ui-color-mode');

    if (colorMode.colorMode === storedMode) {
        return;
    }

    if (localStorage.getItem(customColorModeStoreKey) !== colorMode.colorMode) {
        return;
    }

    colorMode.setColorMode(colorMode.colorMode);
}

export function setCustomColorModeStoreKey(color: ColorMode) {
    localStorage.setItem(customColorModeStoreKey, color);
}
