import { Address } from "@ton/core";
import { DepositConstraintsState } from "../../pages/hooks/useApi/functions/getDepositConstraints";

export interface IApiResult {
  address: string;
  getters: {
    depositConstraints: () => Promise<DepositConstraintsState>;
  };
  methods: {
    /* eslint-disable no-unused-vars */
    setDaysBack: (count: bigint) => Promise<void>;
    deposit: (amount: bigint, upLine: Address | null) => Promise<void>;
    withdraw: () => Promise<void>;
  };
}
