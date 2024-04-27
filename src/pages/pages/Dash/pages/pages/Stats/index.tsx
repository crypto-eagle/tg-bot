import { useTranslation } from "react-i18next";
import { useColors } from "@hooks/useColors";
import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { BlackBox } from "../../../../../../shared/ui/BlackBox";
import { Buttons } from "../../components/Buttons";

export function Stats() {
  const { t } = useTranslation();
  const colors = useColors();

  return (
    <BlackBox>
      <Text>{t("dash.deposit.title")}</Text>
      <Flex justifyContent="space-between" alignItems="center" my="20px">
        <Text color={colors.green}>{t("dash.deposit.totalWithdraw")}:</Text>
        <Box textTransform="uppercase">
          {/* Вот тут я не знаю как сделать 
              чтобы оно не переносилось */}
          <span style={{ fontSize: 32 }}>0.00 </span>
          ton
        </Box>
      </Flex>
      <Flex justifyContent="space-between" alignItems="center" my="20px">
        <Text textTransform="uppercase">{t("dash.deposit.DEPOSIT")}:</Text>
        <Box color={colors.green} textTransform="uppercase">
          {/* Вот тут я не знаю как сделать 
              чтобы оно не переносилось */}
          <span style={{ fontSize: 32 }}>0.00 </span>
          ton
        </Box>
      </Flex>

      <Buttons
        buttonsContent={[
          t("dash.buttons.withdraw"),
          t("dash.buttons.rienvest"),
        ]}
      />
    </BlackBox>
  );
}
