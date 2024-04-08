import {useTonClient} from "../useTonClient";
import {useAsyncInitialize} from "../useAsyncInitialize";
import {Address, OpenedContract} from "ton-core";
import {EarnContract} from "@core/contracts/tact_EarnContract";

export function useSmartContract(): OpenedContract<EarnContract> | undefined {
    const {client} = useTonClient();

    return useAsyncInitialize(async () => {
        if (!client) return;

        const contract = EarnContract.fromAddress(
            Address.parse(import.meta.env.VITE_SMART_CONTRACT)
        );

        return client.open(contract) as OpenedContract<EarnContract>;
    }, [client]);
}
