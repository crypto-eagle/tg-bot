import React from "react";

import { Input, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { useColors } from "@hooks/useColors";
import { Buttons } from "./Buttons";
import { BlackBox } from "../../../../../shared/ui/BlackBox";

interface Props {
  title: string;
}

export function Amount({ title }: Props) {
  const { t } = useTranslation();
  const colors = useColors();

  return (
    <BlackBox>
      <Text color={colors.green}>{title}:</Text>
      <Input
        mt="30px"
        mb="32px"
        borderRadius="3xl"
        placeholder={t("dash.amount.amount")}
      />
      <Buttons
        buttonsContent={[t("dash.amount.cancel"), t("dash.amount.contribute")]}
      />
    </BlackBox>
  );
}
