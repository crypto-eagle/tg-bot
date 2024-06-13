import { Address } from "@ton/core";

export interface TimePast {
  hours: number;
  mins: number;
  days: number;
}

interface ProfileTotals {
  deposit: number;
  claimed: number;
  referalBonus: number;
}

interface ProfileCurrentRound {
  deposit: number;
  claimedAmount: number;
  timePast: TimePast;
  earnedAmount: number;
  earnedPercent: number;
}

export interface IProfile {
  canDeposit: boolean;
  refAddress: Address;
  upLine: Address;
  total: ProfileTotals;
  current: ProfileCurrentRound | null;
}
