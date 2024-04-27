import React from "react";

import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { DepositStatus } from "./components/DepositStatus";

export function DashLayout() {
  return (
    <>
      <Box w="100%" mt="3" mb="3">
        <DepositStatus />
      </Box>

      <Outlet />
    </>
  );
}
