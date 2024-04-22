/* eslint-disable react/require-default-props */
import React from "react";
import { Button } from "@chakra-ui/react";
import { useColors } from "@hooks/useColors";
import { useTranslation } from "react-i18next";

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

function SubButton({ onClick, title, w }: ButtonProps) {
  const colors = useColors();

  return (
    <Button
      w={w}
      rounded="full"
      borderWidth="3px"
      borderColor={colors.cyan}
      bg={colors.gray}
      onClick={onClick}
      _hover={{
        bg: colors.gray,
      }}
    >
      {title}
    </Button>
  );
}

export default function NextButton({ first, isEnd, next, w }: NextButtonProps) {
  const { t } = useTranslation();

  return (
    <>
      {!isEnd && <SubButton w={w} title={t("slides.next")} onClick={next} />}
      {isEnd && <SubButton w={w} title={t("slides.first")} onClick={first} />}
    </>
  );
}
