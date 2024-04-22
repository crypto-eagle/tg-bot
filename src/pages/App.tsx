import "./App.scss";
import "../core/localization/l18n";

import { RouterProvider } from "react-router-dom";
import React from "react";
import { Stack } from "@chakra-ui/react";
import { TonConnectProvider } from "@core/providers/ton-connect.provider";
import routing from "./routing";
import { LangChooser } from "./components/LangChooser";
import { Header } from "./components/Header";
import { AppLayout } from "./components/AppLayout";

export default function App() {
  return (
    <AppLayout>
      <Stack
        zIndex="1"
        w="100%"
        h="100%"
        justifyContent="space-between"
        alignItems="center"
      >
        <Header w="100%" gap="24px" justifyContent="space-between" />

        <TonConnectProvider>
          <RouterProvider router={routing} />
        </TonConnectProvider>

        <LangChooser />
      </Stack>
    </AppLayout>
  );
}
