import { Address, fromNano, OpenedContract } from "@ton/core";
import { EarnContract } from "@core/contracts/tact_EarnContract";
import { useEffect, useState } from "react";

export function useMaxDeposit(
  contract: OpenedContract<EarnContract> | undefined,
  wallet: Address | null,
) {
  const [state, setState] = useState<string | null>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetch() {
      if (!contract || !wallet) {
        return;
      }
      setIsLoading(true);
      setState(null);

      try {
        const value = await contract.getMaxDepositAmount(wallet);
        setState(fromNano(value));
      } finally {
        setIsLoading(false);
      }
    }

    fetch().then();
  }, [contract, wallet]);

  return { state, isLoading };
}
