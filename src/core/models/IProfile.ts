export interface IProfile {
  totalDeposit: number;
  totalClaimedRewards: number;
  totalReferralBonus: number;
  depositIsAvailable: boolean;
  currentRound: number;
  currentRoundDurationInDays: number;
  currentDeposit: number;
  currentClaimedRewards: number;
  currentClaimableRewards: number;
  currentMaxRewards: number;
}
