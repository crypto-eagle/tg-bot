import { useContext, useEffect, useState } from "react";
import { Address } from "ton-core";
import { TonConnectContext } from "@core/providers/ton-connect.provider";
import { IApiResult } from "@core/models/IApiResult";
import { useSmartContract } from "./useSmartContract";
import { getMinDeposit } from "./functions/getMinDeposit";
import { getMaxDeposit } from "./functions/getMaxDeposit";
import { getProfile } from "./functions/getProfile";
import { deposit } from "./functions/deposit";

export function useApi(): IApiResult | undefined {
  const { wallet, sender } = useContext(TonConnectContext);
  const contract = useSmartContract();

  const [state, setState] = useState<IApiResult>();

  useEffect(() => {
    if (!contract || !wallet) {
      return;
    }

    const address = Address.parse(wallet);

    setState({
      address: wallet.toString(),
      getters: {
        minDeposit: () => getMinDeposit(contract, address),
        maxDeposit: () => getMaxDeposit(contract, address),
        profile: () => getProfile(contract, address),
      },
      methods: {
        deposit: (amount: bigint, upLine: Address) =>
          contract ? deposit(contract, sender, amount, upLine) : null,
      },
    });
  }, [contract, wallet, sender]);

  return state;
}
