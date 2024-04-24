import React from "react";

import { Box, Flex, Text } from "@chakra-ui/react";
// import { LuUser2 } from "react-icons/lu";
// import { MdOutlineAccessTime } from "react-icons/md";
import { useColors } from "@hooks/useColors";
import { LightBox } from "../../../../../shared/ui/LightBox";

export function UserInfoSecondary() {
  const colors = useColors();

  return (
    <LightBox>
      <Flex gap="15px" flexDirection="column">
        <Flex alignItems="center" gap="10px">
          {/* <LuUser2 /> */}*user icon*
          <Text fontSize="lg" color="white">
            Username
          </Text>
        </Flex>
        <Flex alignItems="center" gap="10px">
          {/* <MdOutlineAccessTime /> */}
          *icon*
          <Flex
            alignItems="center"
            fontSize="sm"
            gap="10px"
            whiteSpace="nowrap"
          >
            <Text w="fit-content" color={colors.green}>
              Deposit status:
            </Text>
            <Box
              bg={colors.notActivated}
              color="white"
              fontWeight="normal"
              py="3px"
              px="8px"
              borderRadius="3xl"
            >
              Not activated
            </Box>
          </Flex>
        </Flex>
        <Flex gap="5px" mb="15px">
          <Text w="fit-content" color={colors.green}>
            Turnover structure:
          </Text>
          <Text w="fit-content" fontSize="lg">
            {100.23}
          </Text>
          <Text w="fit-content">$</Text>
        </Flex>
        <Flex gap="5px" mb="15px">
          <Text w="fit-content" color={colors.green}>
            Income structure:
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
        <Flex gap="5px">
          <Text w="fit-content" color={colors.green}>
            Number of partners:
          </Text>
          <Text w="fit-content" fontSize="lg">
            {123}
          </Text>
        </Flex>
      </Flex>
    </LightBox>
  );
}
