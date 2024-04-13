export interface IProfile {
    totalDeposit: string;
    totalClaimedRewards: string;
    totalReferralBonus: string;
    depositIsAvailable: boolean;
    currentRound: number;
    currentRoundDurationInDays: number;
    currentDeposit: string;
    currentClaimedRewards: string;
    currentClaimableRewards: string;
    currentMaxRewards: string;
}
