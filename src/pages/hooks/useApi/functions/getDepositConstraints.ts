import { Address, fromNano, OpenedContract } from "@ton/core";
import { EarnContract } from "@core/contracts/tact_EarnContract";

export interface DepositConstraintsState {
  min: number;
  max: number;
}

export async function getDepositConstraints(
  contract: OpenedContract<EarnContract>,
  wallet: Address,
): Promise<DepositConstraintsState> {
  const { min, max } = await contract.getDepositConstraints(wallet);
  return {
    min: +fromNano(min),
    max: +fromNano(max),
  };
}
