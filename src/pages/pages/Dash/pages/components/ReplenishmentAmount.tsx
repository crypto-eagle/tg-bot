import React from "react";

import { Box, Input, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { Buttons } from "./Buttons";

export function ReplenishmentAmount() {
  const { t } = useTranslation();

  return (
    <Box w="100%" fontWeight="bold" p="6" borderRadius="lg" bg="#1A181B">
      <Text color="rgb(22, 240, 201)">
        {t("dash.replenishmentAmount.title")}:
      </Text>
      <Input
        mt="30px"
        mb="32px"
        borderRadius="3xl"
        placeholder={t("dash.replenishmentAmount.amount")}
      />
      <Buttons
        buttonsContent={[
          t("dash.replenishmentAmount.cancel"),
          t("dash.replenishmentAmount.contribute"),
        ]}
      />
    </Box>
  );
}
