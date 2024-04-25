import "./Dash.scss";
import { useTranslation } from "react-i18next";
import React, { useContext, useEffect, useState } from "react";

import { SmartContractContext } from "@core/providers/smart-contract.provider";
import { IProfile } from "@core/models";

import { Header } from "./components/Header";
import { Deposit } from "./components/Deposit";
import { Buttons } from "./components/Buttons";
import { DepositStatus } from "./components/DepositStatus";
import { Amount } from "./components/Amount";

interface StateType {
  maxDeposit: string;
  minDeposit: string;
  profile: IProfile | null;
}

export default function Dash() {
  const { t } = useTranslation();
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
    <>
      <Header />
      <DepositStatus />
      <Amount title={t("dash.amount.replenishmentAmount")} />
      <Amount title={t("dash.amount.amountToWithdraw")} />
      <Deposit />
      <Buttons
        buttonsContent={[
          t("dash.buttons.withdraw"),
          t("dash.buttons.rienvest"),
        ]}
      />
      {state ? JSON.stringify(state) : "Loading.."}
    </>
  );
}
