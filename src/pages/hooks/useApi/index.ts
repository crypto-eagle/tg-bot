import { useContext, useEffect, useState } from "react";
import { TonConnectContext } from "@core/providers/ton-connect.provider";
import { IApiResult } from "@core/models/IApiResult";
import { Address } from "@ton/core";
import { IProfile } from "@core/models";
import { ISmartContractData } from "@core/providers/smart-contract.provider";
import { useSmartContract } from "./useSmartContract";
import {
  deposit,
  getDepositConstraints,
  getProfile,
  setDaysBack,
  withdraw,
} from "./functions";

export function useApi(): ISmartContractData {
  const { wallet, sender } = useContext(TonConnectContext);
  const contract = useSmartContract();

  const [state, setState] = useState<IApiResult>();
  const [profile, setProfile] = useState<IProfile | null>();

  useEffect(() => {
    if (!contract || !wallet) {
      return;
    }

    const address = Address.parse(wallet);

    setState({
      address: wallet.toString(),
      getters: {
        depositConstraints: () => getDepositConstraints(contract, address),
      },
      methods: {
        setDaysBack: (count: bigint) => setDaysBack(contract, sender, count),
        deposit: (amount: bigint, upLine: Address | null) =>
          deposit(contract, sender, amount, upLine),
        withdraw: () => withdraw(contract, sender),
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

  return { api: state, profile };
}
