import {
  ColorMode,
  ColorModeContextType,
  extendTheme,
  ThemeConfig,
} from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};
export const chakraCustomTheme = extendTheme({
  config,
});

const chakraColorModeStoreKey = "chakra-ui-color-mode";
const customColorModeStoreKey = "custom-color-mode-store";

export function deleteColorModeInLocalStorage() {
  window.localStorage.removeItem(chakraColorModeStoreKey);
}

export function fixColorModeInLocalStorage(colorMode: ColorModeContextType) {
  const storedMode = localStorage.getItem(chakraColorModeStoreKey);

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
