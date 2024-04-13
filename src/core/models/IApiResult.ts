import {IProfile} from "@core/models/IProfile";

export interface IApiResult {
    address: string;
    getters: {
        maxDeposit: () => Promise<string>;
        minDeposit: () => Promise<string>;
        profile: () => Promise<IProfile>;
    }
}
