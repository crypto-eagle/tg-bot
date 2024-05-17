import { Address, fromNano, OpenedContract } from "@ton/core";
import { EarnContract } from "@core/contracts/tact_EarnContract";
import { IProfile, TimePast } from "@core/models/IProfile";

const asNum = (val: bigint): number => Number(fromNano(val));
const secondsToDhms = (secondsBig: bigint): TimePast => {
  const seconds = secondsBig;

  const days = seconds / (3600n * 24n);
  const hours = seconds % (3600n * 24n) / 3600n;
  const mins = seconds % 3600n / 60n;

  return {
    days: Number(days),
    hours: Number(hours),
    mins: Number(mins)
  };
};

export async function getProfile(
  contract: OpenedContract<EarnContract>,
  wallet: Address,
): Promise<IProfile | null> {
  const profile = await contract.getInvestorProfile(wallet);

  return profile
    ? {
        canDeposit: profile.canDeposit,
        refAddress: profile.refAddress.asSlice().loadAddress(),
        upLine: profile.upLine.asSlice().loadAddress(),
        total: {
          deposit: asNum(profile.total.deposit),
          claimed: asNum(profile.total.claimed),
          referalBonus: asNum(profile.total.referalBonus),
        },
        current: {
          deposit: asNum(profile.current.deposit),
          claimedAmount: asNum(profile.current.claimedAmount),
          earnedAmount: asNum(profile.current.earnedAmount),
          earnedPercent: asNum(profile.current.earnedPercent),
          timePast: secondsToDhms(profile.current.secondsPast),
        },
      }
    : null;
}
