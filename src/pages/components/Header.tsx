import { Avatar, HStack, StackProps } from "@chakra-ui/react";
import { TonConnectButton } from "@tonconnect/ui-react";
import React from "react";
import logo from "../../assets/react.svg";

export function Header(props: StackProps) {
  return (
    <HStack {...props}>
      <Avatar name="Logo" src={logo} />

      <HStack>
        <TonConnectButton />
        {/* <ColorModeToggler /> */}
      </HStack>
    </HStack>
  );
}
