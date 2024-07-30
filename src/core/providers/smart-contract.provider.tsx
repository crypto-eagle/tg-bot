import React, { createContext } from "react";
import { IApiResult } from "@core/models/IApiResult";
import { IProfile } from "@core/models";
import { useApi } from "../../pages/hooks/useApi";

export interface ISmartContractData {
  api?: IApiResult;
  profile?: IProfile | null;

  error?: string | null;
}

export const SmartContractContext = createContext<ISmartContractData>(
  {} as ISmartContractData,
);

export function SmartContractProvider(props: { children: React.ReactNode }) {
  const api = useApi();
  const { children } = props;

  return api ? (
    <SmartContractContext.Provider value={api}>
      {children}
    </SmartContractContext.Provider>
  ) : (
    "Loading.."
  );
}
