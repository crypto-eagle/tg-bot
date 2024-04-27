import { getHttpEndpoint } from "@orbs-network/ton-access";
import { CHAIN } from "@tonconnect/protocol";
import { useAsyncInitialize } from "@hooks/useAsyncInitialize";
import { TonClient } from "@ton/ton";
import { useTonConnect } from "./useTonConnect";

export function useTonClient() {
  const { network } = useTonConnect();

  return {
    client: useAsyncInitialize(async () => {
      if (!network) return undefined;

      return new TonClient({
        endpoint: await getHttpEndpoint({
          network: network === CHAIN.MAINNET ? "mainnet" : "testnet",
        }),
      });
    }, [network]),
  };
}
