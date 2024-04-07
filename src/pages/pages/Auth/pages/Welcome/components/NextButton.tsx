import React from "react";
import {Button} from "@chakra-ui/react";
import {useColors} from "@hooks/useColors";
import {useTranslation} from "react-i18next";


interface NextButtonProps {
    w: string;
    isEnd?: boolean;
    next?: () => void;
    first?: () => void;
}

interface ButtonProps {
    w: string;
    title: string;
    onClick?: () => void;
}

const SubButton = (props: ButtonProps) => {
    const colors = useColors();

    return <Button
        w={props.w}
        rounded={"full"}
        borderWidth="3px"
        borderColor={colors.cyan}
        bg={colors.gray}
        onClick={props?.onClick}
        _hover={{
            bg: colors.gray,
        }}
    >
        {props.title}
    </Button>
}

export const NextButton = (props: NextButtonProps) => {
    const {t} = useTranslation();

    return (
        <>
            {!props?.isEnd && (
                <SubButton w={props.w} title={t("slides.next")} onClick={props?.next}/>
            )}
            {props?.isEnd && (
                <SubButton w={props.w} title={t("slides.first")} onClick={props?.first}/>
            )}
        </>
    );
};
