import { Box, Flex, Progress, Text } from "@chakra-ui/react";
import React from "react";

export const DepositStatus = () => {
  return (
    <Box
      p="6"
      w={"100%"}
      fontWeight={"bold"}
      borderRadius={"20px"}
      bg={"rgba(255, 255, 255, 0.2)"}
      border={"3px solid rgb(9, 221, 250)"}
    >
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Text>Deposit status:</Text>
        <Box
          bg={"rgb(56, 161, 105)"}
          py={"3px"}
          px={"20px"}
          borderRadius={"3xl"}
        >
          Active
        </Box>
      </Flex>
      <Flex my={"20px"} justifyContent={"space-between"} alignItems={"center"}>
        <Box>
          <Text color={"rgb(22, 240, 201)"}>Earned:</Text>
          <Box textTransform={"uppercase"}>
            {/* Вот тут я не знаю как сделать 
              чтобы оно не переносилось */}
            <span style={{ fontSize: 32 }}>100.23 </span>
            ton
          </Box>
        </Box>
        <Box>
          <Text color={"rgb(22, 240, 201)"}>Invest:</Text>
          <Box textTransform={"uppercase"}>
            {/* Вот тут я не знаю как сделать 
              чтобы оно не переносилось */}
            <span style={{ fontSize: 32 }}>0.00 </span>
            ton
          </Box>
        </Box>
      </Flex>
      <Box>
        <Text>10 of 310 %</Text>
        <Progress value={10} borderRadius={"xl"} size={"sm"} mt={"10px"} />
      </Box>
    </Box>
  );
};
