import { useTonConnectUI, useTonWallet } from "@tonconnect/ui-react";
import { ITonConnect } from "@core/models/ITonConnect";
import { SenderArguments } from "@ton/core";

export function useTonConnect(): ITonConnect {
  const [tonConnectUI] = useTonConnectUI();
  const wallet = useTonWallet();

  return {
    sender: {
      send: async (args: SenderArguments) => {
        await tonConnectUI.sendTransaction({
          messages: [
            {
              address: args.to.toString(),
              amount: args.value.toString(),
              payload: args.body?.toBoc().toString("base64"),
            },
          ],
          validUntil: Date.now() + 60 * 1000, // 1 minute for user to approve
        });
      },
    },
    connected: !!wallet?.account.address,
    wallet: wallet?.account.address,
    network: wallet?.account.chain ?? undefined,
  };
}
