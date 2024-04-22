import React, { createContext } from "react";
import { ITonConnect } from "@core/models/ITonConnect";
import { useTonConnect } from "../../pages/hooks/useTonConnect";

export const TonConnectContext = createContext<ITonConnect>({} as ITonConnect);

export function TonConnectProvider(props: { children: React.ReactNode }) {
  const tonConnect = useTonConnect();
  const { children } = props;

  return tonConnect ? (
    <TonConnectContext.Provider value={tonConnect}>
      {children}
    </TonConnectContext.Provider>
  ) : (
    <div>{children}</div>
  );
}
