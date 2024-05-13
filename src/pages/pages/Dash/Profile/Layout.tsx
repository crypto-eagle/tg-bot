import { Outlet } from "react-router-dom";
import React from "react";
import { Box } from "@chakra-ui/react";
import { ProfileStatus } from "./components/ProfileStatus";

export function ProfileLayout() {
  return (
    <>
      <Box w="100%" mt="3" mb="3">
        <ProfileStatus />
      </Box>

      <Outlet />
    </>
  );
}
