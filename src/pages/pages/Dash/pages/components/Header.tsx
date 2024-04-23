import React from "react";

import { AddIcon } from "@chakra-ui/icons";
import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export function Header() {
  const { t } = useTranslation();

  return (
    <Flex
      fontWeight="bold"
      w="100%"
      px="20px"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box>
        <Text color="rgb(22, 240, 201)">{t("dash.header.title")}</Text>
        <Box textTransform="uppercase">
          {/* Вот тут я не знаю как сделать 
              чтобы оно не переносилось */}
          <span style={{ fontSize: 32 }}>0.00 </span>
          ton
        </Box>
      </Box>

      <IconButton
        aria-label="Add"
        h="60px"
        w="60px"
        border="3px rgb(9, 221, 250) solid"
        isRound
        icon={<AddIcon />}
      />
    </Flex>
  );
}
