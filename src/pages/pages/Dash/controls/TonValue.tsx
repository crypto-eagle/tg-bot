import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { StatView } from "./StatView";

interface TonValueProps {
  title: string;
  value: number | null;
  rowView?: true;
}

export function TonValue(props: TonValueProps) {
  const { value, title, rowView } = props;

  return (
    <StatView title={title} rowView={rowView}>
      <Box textTransform="uppercase">
        <Text fontSize="32" mr="2" display="inline-block">
          {value?.toFixed(2) || "0.00"}
        </Text>
        ton
      </Box>
    </StatView>
  );
}
