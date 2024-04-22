import React from "react";

import { Box, Flex, Text } from "@chakra-ui/react";

export function Deposit() {
  return (
    <Box w="100%" fontWeight="bold" p="6" borderRadius="lg" bg="#1A181B">
      <Text>Available for withdraw</Text>
      <Flex justifyContent="space-between" alignItems="center" my="20px">
        <Text color="rgb(22, 240, 201)">Total withdraw:</Text>
        <Box textTransform="uppercase">
          {/* Вот тут я не знаю как сделать 
              чтобы оно не переносилось */}
          <span style={{ fontSize: 32 }}>0.00 </span>
          ton
        </Box>
      </Flex>
      <Flex justifyContent="space-between" alignItems="center" my="20px">
        <Text textTransform="uppercase">DEPOSIT:</Text>
        <Box color="rgb(22, 240, 201)" textTransform="uppercase">
          {/* Вот тут я не знаю как сделать 
              чтобы оно не переносилось */}
          <span style={{ fontSize: 32 }}>0.00 </span>
          ton
        </Box>
      </Flex>
    </Box>
  );
}
