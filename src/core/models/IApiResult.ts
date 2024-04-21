import {IProfile} from "@core/models/IProfile";
import {Address} from "ton-core";

export interface IApiResult {
    address: string;
    getters: {
        maxDeposit: () => Promise<string>;
        minDeposit: () => Promise<string>;
        profile: () => Promise<IProfile | null>;
    },
    methods: {
        deposit: (amount: bigint, upLine: Address) => void
    }
}
