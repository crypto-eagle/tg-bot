import { Button, useColorMode } from "@chakra-ui/react";

export const ColorModeToggler = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const text = colorMode === "light" ? "Go Dark" : "Go Light";
    return (
        <Button onClick={toggleColorMode} size="xs">
            {text}
        </Button>
    );
};
