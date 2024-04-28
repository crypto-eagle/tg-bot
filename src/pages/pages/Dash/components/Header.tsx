import React, { useContext } from "react";

import { Flex } from "@chakra-ui/react";
import { SmartContractContext } from "@core/providers/smart-contract.provider";
import { Loader } from "@core/components/Loader";
import { TonValue } from "../controls/TonValue";
import { DepositButton } from "../controls/DepositButton";

export function Header() {
  const { profile } = useContext(SmartContractContext);

  if (profile === undefined) {
    return <Loader rows={1} />;
  }

  return (
    <Flex
      fontWeight="bold"
      w="100%"
      px="20px"
      justifyContent="space-between"
      alignItems="center"
    >
      <TonValue
        title="dash.header.title"
        value={profile?.currentDeposit || null}
      />

      {profile?.depositIsAvailable && <DepositButton />}
    </Flex>
  );
}
