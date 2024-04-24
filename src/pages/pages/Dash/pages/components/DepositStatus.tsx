import React from "react";

import { Box, Flex, Progress, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { useColors } from "@hooks/useColors";

export function DepositStatus() {
  const { t } = useTranslation();
  const colors = useColors();

  return (
    <Box
      p="6"
      w="100%"
      fontWeight="bold"
      borderRadius="20px"
      bg="whiteAlpha.400"
      border={`3px solid ${colors.turquoise}`}
    >
      <Flex justifyContent="space-between" alignItems="center" gap="10px">
        <Text>{t("dash.depositStatus.heading.header")}:</Text>
        <Box bg={colors.darkgreen} py="3px" px="20px" borderRadius="3xl">
          {t("dash.depositStatus.heading.content")}
        </Box>
      </Flex>
      <Flex my="20px" justifyContent="space-between" gap="20px">
        <Box>
          <Text color={colors.green}>
            {t("dash.depositStatus.content.earned")}:
          </Text>
          <Box textTransform="uppercase">
            {/* Вот тут я не знаю как сделать 
              чтобы оно не переносилось */}
            <span style={{ fontSize: 32 }}>100.23 </span>
            ton
          </Box>
        </Box>
        <Box>
          <Text color={colors.green}>
            {t("dash.depositStatus.content.invest")}:
          </Text>
          <Box textTransform="uppercase">
            {/* Вот тут я не знаю как сделать 
              чтобы оно не переносилось */}
            <span style={{ fontSize: 32 }}>0.00 </span>
            ton
          </Box>
        </Box>
      </Flex>
      <Box>
        <Text>10 {t("dash.depositStatus.percent")} 310 %</Text>
        <Progress value={10} borderRadius="xl" size="sm" mt="10px" />
      </Box>
    </Box>
  );
}
