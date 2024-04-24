import React from "react";

import { Box, Flex, Text } from "@chakra-ui/react";
// import { LuUser2 } from "react-icons/lu";
// import { MdOutlineAccessTime } from "react-icons/md";
import { useColors } from "@hooks/useColors";
import { LightBox } from "../../../../../shared/ui/LightBox";

export function UserInfo() {
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
          *time icon*
          <Box>
            <Text fontSize="sm" color={colors.green}>
              You are in the project:
            </Text>
            <Text fontSize="lg">25 day 13 hours 17 minutes</Text>
          </Box>
        </Flex>
        <Flex alignItems="center" gap="10px">
          {/* <MdOutlineAccessTime /> */}
          *icon*
          <Box>
            <Text fontSize="sm" color={colors.green}>
              People on the project:
            </Text>
            <Text fontSize="lg">57.234</Text>
          </Box>
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
      </Flex>
    </LightBox>
  );
}
