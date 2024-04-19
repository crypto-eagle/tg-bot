import { AddIcon } from "@chakra-ui/icons";
import { Box, Center, Flex, Heading, Stack, Text } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Flex
      fontWeight={"bold"}
      w="100%"
      px={"20px"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Box>
        <Text color={"rgb(22, 240, 201)"}>Invested in project</Text>
        <Box textTransform={"uppercase"}>
          {/* Вот тут я не знаю как сделать 
              чтобы оно не переносилось */}
          <span style={{ fontSize: 32 }}>0.00 </span>
          ton
        </Box>
      </Box>
      {/* не знаю как сделать побольше, 
      время потратил, но оно так и не заработало */}
      <Center
        h={"60px"}
        w={"60px"}
        borderRadius={"50%"}
        border={"3px rgb(9, 221, 250) solid"}
      >
        <AddIcon />
      </Center>
    </Flex>
  );
};
