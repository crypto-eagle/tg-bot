import { Stat, StatLabel, Text, StatNumber, Box } from "@chakra-ui/react";
import React from "react";
import { useColors } from "@hooks/useColors";
import { useTranslation } from "react-i18next";

interface StatViewProps {
  title: string;
  rowView?: true;
  children: React.ReactNode;
}

export function StatView(props: StatViewProps) {
  const { t } = useTranslation();
  const colors = useColors();

  // eslint-disable-next-line no-unused-vars
  const { children, title, rowView } = props;

  return (
    <Stat>
      <Box
        {...(rowView
          ? {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }
          : {})}
      >
        <StatLabel>
          <Text color={colors.green}>{t(title)}</Text>
        </StatLabel>
        <StatNumber>{children}</StatNumber>
      </Box>
    </Stat>
  );
}
