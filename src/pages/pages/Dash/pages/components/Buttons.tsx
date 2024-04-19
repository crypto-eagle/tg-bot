import { Button, Flex } from "@chakra-ui/react";

export const Buttons = () => {
  return (
    <Flex w={"100%"} justifyContent={"space-around"}>
      <Button
        color={"white"}
        colorScheme="blue"
        py={"20px"}
        px={"30px"}
        borderRadius={"3xl"}
      >
        Withdraw
      </Button>
      <Button
        color={"white"}
        colorScheme="green"
        py={"20px"}
        px={"30px"}
        borderRadius={"3xl"}
      >
        Rienvest
      </Button>
    </Flex>
  );
};
