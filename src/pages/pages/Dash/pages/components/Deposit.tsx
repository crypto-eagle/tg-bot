import React from "react";

import { Box, Flex, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { useColors } from "@hooks/useColors";

export function Deposit() {
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
      <Text>{t("dash.deposit.title")}</Text>
      <Flex justifyContent="space-between" alignItems="center" my="20px">
        <Text color="rgb(22, 240, 201)">
          {t("dash.deposit.totalWithdraw")}:
        </Text>
        <Box textTransform="uppercase">
          {/* Вот тут я не знаю как сделать 
              чтобы оно не переносилось */}
          <span style={{ fontSize: 32 }}>0.00 </span>
          ton
        </Box>
      </Flex>
      <Flex justifyContent="space-between" alignItems="center" my="20px">
        <Text textTransform="uppercase">{t("dash.deposit.DEPOSIT")}:</Text>
        <Box color="rgb(22, 240, 201)" textTransform="uppercase">
          {/* Вот тут я не знаю как сделать 
              чтобы оно не переносилось */}
          <span style={{ fontSize: 32 }}>0.00 </span>
          ton
        </Box>
      </Flex>
    </Box>
  );
}
