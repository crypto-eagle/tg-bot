import { Skeleton, Stack } from "@chakra-ui/react";
import React from "react";

export function Loader(props: { rows: number }) {
  const { rows } = props;

  return (
    <Stack p="6" w="100%">
      {Array.from({ length: rows }, (_, index) => (
        <Skeleton color="red" h={8} key={index} />
      ))}
    </Stack>
  );
}
