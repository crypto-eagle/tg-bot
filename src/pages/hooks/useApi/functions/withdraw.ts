import { OpenedContract, Sender, toNano } from "@ton/core"
import { EarnContract } from "@core/contracts/tact_EarnContract";

export async function withdraw(
  contract: OpenedContract<EarnContract>,
  sender: Sender,
) {
  await contract.send(
    sender,
    {
      value: toNano(0.5),
    },
    {
      $$type: "ClaimRewards",
    },
  );
}
