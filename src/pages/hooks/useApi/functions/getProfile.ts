import { Address, fromNano, OpenedContract } from "@ton/core";
import { EarnContract } from "@core/contracts/tact_EarnContract";
import { IProfile, TimePast } from "@core/models/IProfile";

const asNum = (val: bigint): number => Number(fromNano(val));
const secondsToDhms = (secondsBig: bigint): TimePast => {
  const seconds = Number(secondsBig);
  console.log("secondsBig", secondsBig, seconds);

  const days = Math.floor(seconds / (3600 * 24));
  const hours = Math.floor((seconds % (3600 * 24)) / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);

  return {
    days,
    hours,
    mins,
    secs,
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
