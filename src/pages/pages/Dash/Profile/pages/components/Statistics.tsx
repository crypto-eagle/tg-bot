import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useColors } from "@hooks/useColors";
// import { ReactComponent as StatusIcon } from "../assets/status.svg";
import { BlackBox } from "../../../../../../shared/ui/BlackBox";

export function Statistics() {
  const colors = useColors();

  return (
    <BlackBox>
      <Text color={colors.green} mb="20px">
        Your statistics:
      </Text>
      <Flex gap="5px" mb="15px">
        <Text w="fit-content" color={colors.green}>
          Invest:
        </Text>
        <Text w="fit-content" fontSize="lg">
          {100.23}
        </Text>
        <Text w="fit-content">$</Text>
      </Flex>
      <Flex gap="5px" mb="15px">
        <Text w="fit-content" color={colors.green}>
          Earned:
        </Text>
        <Text w="fit-content" fontSize="lg" color={colors.darkgreen}>
          {200}
        </Text>
        <Text
          w="fit-content"
          textTransform="uppercase"
          color={colors.darkgreen}
        >
          ton
        </Text>
      </Flex>
      <Flex gap="10px">
        <Text w="fit-content" color={colors.green}>
          Your status:
        </Text>
        <Box
          py="2px"
          pl="7px"
          pr="20px"
          bg={colors.darkgreen}
          borderRadius="3xl"
          fontWeight="normal"
        >
          {/* <StatusIcon /> */}
          Whale
        </Box>
      </Flex>
    </BlackBox>
  );
}
