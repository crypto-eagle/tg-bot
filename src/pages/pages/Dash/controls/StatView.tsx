import { Stat, StatLabel, Text, StatNumber, Flex } from "@chakra-ui/react";
import React from "react";
import { useColors } from "@hooks/useColors";
import { useTranslation } from "react-i18next";
import * as CSS from "csstype";

interface StatViewProps {
  title: string;
  rowView?: true;
  isSpaceBetween?: true;
  children: React.ReactNode;
  headerStyle?: {
    fontSize: CSS.Property.FontSize
  }
}

export function StatView(props: StatViewProps) {
  const { t } = useTranslation();
  const colors = useColors();

  const { children, title, rowView, isSpaceBetween, headerStyle } = props;

  return (
    <Stat>
      <Flex
          flexDirection={rowView ? "row" : "column"}
          align={rowView ? "center" : "flex-start"}
          justifyContent={rowView && isSpaceBetween ? "space-between" : ""}
      >
        <StatLabel mr={rowView ? 2 : 0}>
          <Text {...(headerStyle || {fontSize: "16px"})} fontWeight="600" color={colors.green}>{t(title)}:</Text>
        </StatLabel>
        <StatNumber>{children}</StatNumber>
      </Flex>
    </Stat>
  );
}
