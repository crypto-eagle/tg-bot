import React from "react";
import { useColors } from "@hooks/useColors";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
// import { ReactComponent as CopyIcon } from "../assets/Copy.svg";
import { BlackBox } from "../../../../../../shared/ui/BlackBox";

export function Consultation() {
  const colors = useColors();

  return (
    <BlackBox>
      <Flex flexDirection="column" gap="20px">
        <Text color={colors.green}>Your upline:</Text>
        <Flex justifyContent="space-between" alignItems="center" gap="10px">
          <Flex alignItems="center" gap="10px" w="fit-content">
            {/* <LuUser2 /> */}*user*
            <Text fontSize="lg" color="white">
              Username
            </Text>
          </Flex>
          <Button
            color="white"
            bg={colors.darkgreen}
            py="2px"
            px="10px"
            borderRadius="3xl"
          >
            Consultation
          </Button>
        </Flex>
        <Text color={colors.green}>Referral link:</Text>

        <Box
          px="20px"
          py="10px"
          border={`3px solid ${colors.turquoise}`}
          borderRadius="3xl"
          bg="whiteAlpha.200"
        >
          https://example.com/...
          {/* <CopyIcon /> */}
        </Box>
      </Flex>
    </BlackBox>
  );
}
