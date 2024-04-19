import "./Dash.scss";

import { useContext, useEffect, useState } from "react";
import { SmartContractContext } from "@core/providers/smart-contract.provider";
import { IProfile } from "@core/models";

import { Header } from "./components/Header";
import { Deposit } from "./components/Deposit";
import { Buttons } from "./components/Buttons";
import { ReplenishmentAmount } from "./components/ReplenishmentAmount";
import { DepositStatus } from "./components/DepositStatus";

interface StateType {
  maxDeposit: string;
  minDeposit: string;
  profile: IProfile;
}

export const Dash = () => {
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
        profile: {} as IProfile, // await api.getters.profile(),
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
      <>{state ? JSON.stringify(state) : "Loading.."}</>
    </div>
  );
};
