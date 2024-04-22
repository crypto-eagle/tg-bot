import "./Dash.scss";
import React, { useContext, useEffect, useState } from "react";

import { SmartContractContext } from "@core/providers/smart-contract.provider";
import { IProfile } from "@core/models";

import { Header } from "./components/Header";
import { Deposit } from "./components/Deposit";
import { Buttons } from "./components/Buttons";
import { DepositStatus } from "./components/DepositStatus";

interface StateType {
  maxDeposit: string;
  minDeposit: string;
  profile: IProfile | null;
}

export default function Dash() {
  const api = useContext(SmartContractContext);
  const [state, setState] = useState<StateType | undefined>();

  useEffect(() => {
    if (!api) {
      return;
    }

    (async () => {
      setState({
        minDeposit: await api.getters.minDeposit(),
        maxDeposit: await api.getters.maxDeposit(),
        profile: await api.getters.profile(),
      });
    })();
  }, [api]);

  return (
    <div>
      <Header />
      <DepositStatus />
      {/* <ReplenishmentAmount /> */}
      <Deposit />
      <Buttons buttonsContent={["Withdraw", "Rienvest"]} />
      {state ? JSON.stringify(state) : "Loading.."}
    </div>
  );
}
