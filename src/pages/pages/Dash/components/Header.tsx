import React, { useContext, useEffect, useState } from "react";

import { Flex } from "@chakra-ui/react";
import { SmartContractContext } from "@core/providers/smart-contract.provider";
import { IProfile } from "@core/models";
import { TonValue } from "../controls/TonValue";
import { DepositButton } from "../controls/DepositButton";

export function Header() {
  const api = useContext(SmartContractContext);
  const [state, setState] = useState<IProfile | null>();

  useEffect(() => {
    if (!api) {
      return;
    }

    (async () => {
      setState(await api.getters.profile());
    })();
  }, [api]);

  return (
    <Flex
      fontWeight="bold"
      w="100%"
      px="20px"
      justifyContent="space-between"
      alignItems="center"
    >
      <TonValue title="dash.header.title" value={state?.totalDeposit || null} />

      <DepositButton />
    </Flex>
  );
}
