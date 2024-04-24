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
          <Text color="white">Username</Text>
        </Flex>
        <Flex>
          {/* <MdOutlineAccessTime /> */}
          *time icon*
          <Box>
            <Text color={colors.green}>You are in the project:</Text>
            <Text>25 day 13 hours 17 minutes</Text>
          </Box>
        </Flex>
      </Flex>
    </LightBox>
  );
}
