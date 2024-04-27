import { Address } from "@ton/core";

export interface IApiResult {
  address: string;
  getters: {
    maxDeposit: () => Promise<number>;
    minDeposit: () => Promise<number>;
  };
  methods: {
    // eslint-disable-next-line no-unused-vars
    deposit: (amount: bigint, upLine: Address | null) => Promise<void>;
  };
}
