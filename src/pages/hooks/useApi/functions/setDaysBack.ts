import { OpenedContract, Sender, toNano } from "@ton/core";
import { EarnContract } from "@core/contracts/tact_EarnContract";

export async function setDaysBack(
  contract: OpenedContract<EarnContract>,
  sender: Sender,
  count: bigint,
) {
  await contract.send(
    sender,
    {
      value: toNano("0.05"),
    },
    {
      $$type: "TemporarySetRoundDateBack",
      daysBack: count,
    },
  );
}
