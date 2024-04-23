import React from "react";

import { Button, Flex } from "@chakra-ui/react";

interface Props {
  buttonsContent: string[];
}

export function Buttons({ buttonsContent }: Props) {
  return (
    <Flex w="100%" justifyContent="space-around" gap="10px">
      {buttonsContent.map((el, index) => {
        if (index % 2 === 0)
          return (
            <Button
              color="white"
              colorScheme="blue"
              py="20px"
              px="30px"
              borderRadius="3xl"
              key={el}
            >
              {el}
            </Button>
          );
        return (
          <Button
            color="white"
            colorScheme="green"
            py="20px"
            px="30px"
            borderRadius="3xl"
            key={el}
          >
            {el}
          </Button>
        );
      })}
    </Flex>
  );
}
