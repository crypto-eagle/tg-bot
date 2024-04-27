import { useContext, useEffect, useState } from "react";
import { TonConnectContext } from "@core/providers/ton-connect.provider";
import { IApiResult } from "@core/models/IApiResult";
import { Address } from "@ton/core";
import { IProfile } from "@core/models";
import { ISmartContractData } from "@core/providers/smart-contract.provider";
import { useSmartContract } from "./useSmartContract";
import { getMinDeposit } from "./functions/getMinDeposit";
import { getMaxDeposit } from "./functions/getMaxDeposit";
import { getProfile } from "./functions/getProfile";
import { deposit } from "./functions/deposit";

export function useApi(): ISmartContractData {
  const { wallet, sender } = useContext(TonConnectContext);
  const contract = useSmartContract();

  const [state, setState] = useState<IApiResult>();
  const [profile, setProfile] = useState<IProfile | null>(null);

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
      },
      methods: {
        deposit: (amount: bigint, upLine: Address | null) =>
          deposit(contract, sender, amount, upLine),
      },
    });

    async function fetchProfile() {
      setProfile(await getProfile(contract!, address));
    }

    fetchProfile().then();

    const interval = setInterval(() => {
      (async () => {
        await fetchProfile();
      })();
    }, 30000);

    return () => clearInterval(interval);
  }, [contract, wallet, sender]);

  return { state, profile };
}
