import {OpenedContract} from "ton-core";
import {EarnContract} from "@core/contracts/tact_EarnContract";

export function maxDepositQuery(contract?: OpenedContract<EarnContract>): {
    queryKey: string[];
    queryFn: () => Promise<any>
} {
    return {
        queryKey: ['max-deposit'],
        queryFn: async () => {
            if (!contract) return null;
            return (await contract.getMaxDeposit()).toString();
        }
    };
}
