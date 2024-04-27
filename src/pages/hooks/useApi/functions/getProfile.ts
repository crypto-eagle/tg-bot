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
        totalDeposit: Number(fromNano(profile.totalDeposit)),
        totalClaimedRewards: Number(fromNano(profile.totalClaimedRewards)),
        totalReferralBonus: Number(fromNano(profile.totalReferralBonus)),
        depositIsAvailable: profile.depositIsAvailable,
        currentRound: Number(profile.currentRound),
        currentRoundDurationInDays: Number(profile.currentRoundDurationInDays),
        currentDeposit: Number(fromNano(profile.currentDeposit)),
        currentClaimedRewards: Number(fromNano(profile.currentClaimedRewards)),
        currentClaimableRewards: Number(
          fromNano(profile.currentClaimableRewards),
        ),
        currentMaxRewards: Number(fromNano(profile.currentMaxRewards)),
      }
    : null;
}
