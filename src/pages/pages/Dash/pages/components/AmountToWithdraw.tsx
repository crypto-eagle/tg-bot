import React from "react";

import { Box, Input, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { useColors } from "@hooks/useColors";
import { Buttons } from "./Buttons";

export function AmountToWithdraw() {
  const { t } = useTranslation();
  const colors = useColors();

  return (
    <Box
      w="100%"
      fontWeight="bold"
      p="6"
      borderRadius="lg"
      bg={colors.lightblack}
    >
      <Text color={colors.green}>{t("dash.amount.title")}:</Text>
      <Input
        mt="30px"
        mb="32px"
        borderRadius="3xl"
        placeholder={t("dash.amount.amount")}
      />
      <Buttons
        buttonsContent={[t("dash.amount.cancel"), t("dash.amount.contribute")]}
      />
    </Box>
  );
}
