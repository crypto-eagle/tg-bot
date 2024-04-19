import { Button, Flex } from "@chakra-ui/react";

interface Props {
  buttonsContent: string[];
}

export const Buttons = ({ buttonsContent }: Props) => {
  return (
    <Flex w={"100%"} justifyContent={"space-around"}>
      {buttonsContent.map((el, index) => {
        if (index % 2 === 0)
          return (
            <Button
              color={"white"}
              colorScheme="blue"
              py={"20px"}
              px={"30px"}
              borderRadius={"3xl"}
            >
              {el}
            </Button>
          );
        else
          return (
            <Button
              color={"white"}
              colorScheme="green"
              py={"20px"}
              px={"30px"}
              borderRadius={"3xl"}
            >
              {el}
            </Button>
          );
      })}
    </Flex>
  );
};
