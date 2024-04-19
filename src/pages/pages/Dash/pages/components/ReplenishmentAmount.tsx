import { Box, Input, Text } from "@chakra-ui/react";
import { Buttons } from "./Buttons";

export const ReplenishmentAmount = () => {
  return (
    <Box w={"100%"} fontWeight={"bold"} p="6" borderRadius="lg" bg="#1A181B">
      <Text color={"rgb(22, 240, 201)"}>
        indicate the replenishment amount:
      </Text>
      <Input
        mt={"30px"}
        mb={"32px"}
        borderRadius={"3xl"}
        placeholder="amount"
      />
      <Buttons buttonsContent={["Cancel", "Contribute"]} />
    </Box>
  );
};
