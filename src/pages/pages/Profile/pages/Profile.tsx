// import { useTranslation } from "react-i18next";
import React, { useContext, useEffect, useState } from "react";

import { SmartContractContext } from "@core/providers/smart-contract.provider";
import { IProfile } from "@core/models";

import { Header } from "../../Dash/components/Header";
import { UserInfo } from "./components/UserInfo";
import { UserInfoSecondary } from "./components/UserInfoSecondary";
import { Statistics } from "./components/Statistics";
import { Consultation } from "./components/Consultation";
import { Table } from "./components/Table";

interface StateType {
  maxDeposit: string;
  minDeposit: string;
  profile: IProfile | null;
}

export default function Profile() {
  // const { t } = useTranslation();
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
      <UserInfo />
      <UserInfoSecondary />
      <Statistics />
      <Consultation />
      <Table />
      {state ? JSON.stringify(state) : "Loading.."}
    </>
  );
}
