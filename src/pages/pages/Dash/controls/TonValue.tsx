import React from "react";
import { Box, Text } from "@chakra-ui/react";
import * as CSS from "csstype";
import { StatView } from "./StatView";

interface TonValueProps {
  title: string;
  value: number | null;
  rowView?: true;
  isSpaceBetween?: true;
  headerStyle?: {
    fontSize: CSS.Property.FontSize
  };
  valueStyle?: {
    fontSize: CSS.Property.FontSize[]
  }
}

export function TonValue(props: TonValueProps) {
  const { value, title, rowView, isSpaceBetween, headerStyle, valueStyle } = props;

  return (
    <StatView headerStyle={headerStyle} isSpaceBetween={isSpaceBetween} title={title} rowView={rowView}>
      <Box textTransform="uppercase">
        <Text {...(valueStyle || { fontSize: ["24px", "30px"] })} fontWeight="700" mr="2" display="inline-block">
          {value?.toFixed(2) || "0.00"}
        </Text>
        <Text fontSize={["14px", "16px"]} fontWeight="700" display="inline-block">
          ton
        </Text>
      </Box>
    </StatView>
  );
}
