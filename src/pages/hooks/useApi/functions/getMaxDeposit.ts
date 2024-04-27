import { Address, fromNano, OpenedContract } from "@ton/core";
import { EarnContract } from "@core/contracts/tact_EarnContract";

export async function getMaxDeposit(
  contract: OpenedContract<EarnContract>,
  wallet: Address,
): Promise<number> {
  return +fromNano(await contract.getMaxDepositAmount(wallet));
}
