import {OpenedContract} from "ton-core";
import {EarnContract} from "@core/contracts/tact_EarnContract";

export function minDepositQuery(contract?: OpenedContract<EarnContract>): {
    queryKey: string[];
    queryFn: () => Promise<any>
} {
    return {
        queryKey: ['min-deposit'],
        queryFn: async () => {
            if (!contract) return null;

            const value = await contract.getMinDeposit();
            console.log('value', value)

            return value.toString();
        }
    };
}
