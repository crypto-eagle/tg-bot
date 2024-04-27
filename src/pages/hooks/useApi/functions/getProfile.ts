import { Address, fromNano, OpenedContract } from "@ton/core";
import { EarnContract } from "@core/contracts/tact_EarnContract";
import { IProfile } from "@core/models/IProfile";

export async function getProfile(
  contract: OpenedContract<EarnContract>,
  wallet: Address,
): Promise<IProfile | null> {
  const profile = await contract.getInvestorProfile(wallet);

  return profile
    ? {
        totalDeposit: fromNano(profile.totalDeposit),
        totalClaimedRewards: fromNano(profile.totalClaimedRewards),
        totalReferralBonus: fromNano(profile.totalReferralBonus),
        depositIsAvailable: profile.depositIsAvailable,
        currentRound: Number(profile.currentRound),
        currentRoundDurationInDays: Number(profile.currentRoundDurationInDays),
        currentDeposit: fromNano(profile.currentDeposit),
        currentClaimedRewards: fromNano(profile.currentClaimedRewards),
        currentClaimableRewards: fromNano(profile.currentClaimableRewards),
        currentMaxRewards: fromNano(profile.currentMaxRewards),
      }
    : null;
}
