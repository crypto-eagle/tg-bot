import { Address, OpenedContract, Sender } from "ton-core";
import { EarnContract } from "@core/contracts/tact_EarnContract";

export async function deposit(
  contract: OpenedContract<EarnContract>,
  sender: Sender,
  amount: bigint,
  upLine: Address | null,
) {
  await contract.send(
    sender,
    {
      value: amount,
    },
    {
      $$type: "Deposit",
      upLine,
    },
  );
}
