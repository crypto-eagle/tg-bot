import React, { createContext } from "react";
import { IApiResult } from "@core/models/IApiResult";
import { useApi } from "../../pages/hooks/useApi";

export const SmartContractContext = createContext<IApiResult>({} as IApiResult);

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
