import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { useColors } from "@hooks/useColors";
import { useTranslation } from "react-i18next";

interface TonValueProps {
  title: string;
  value: number | null;
  rowView?: true;
}

export function TonValue(props: TonValueProps) {
  const { t } = useTranslation();
  const colors = useColors();

  const { value, title, rowView } = props;

  return (
    <Box
      {...(rowView
        ? {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }
        : {})}
    >
      <Text color={colors.green}>{t(title)}</Text>
      <Box textTransform="uppercase">
        <Text fontSize="32" mr="2" display="inline-block">
          {value?.toFixed(2) || "0.00"}
        </Text>
        ton
      </Box>
    </Box>
  );
}
