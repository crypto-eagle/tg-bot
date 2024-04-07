import {MainContract} from "../contracts/tact_MainContract";
import {useTonClient} from "./useTonClient";
import {useAsyncInitialize} from "./useAsyncInitialize";
import {useTonConnect} from "./useTonConnect";
import {Address, OpenedContract} from "ton-core";
import {useQuery} from "@tanstack/react-query";
import {CHAIN} from "@tonconnect/protocol";

export function useMainContract() {
    const {client} = useTonClient();
    const {network} = useTonConnect();

    const contract = useAsyncInitialize(async () => {
        if (!client) return;
        // todo: use from env
        const contract = MainContract.fromAddress(
            Address.parse(
                network === CHAIN.MAINNET
                    ? ""
                    : "EQBgPQyoQmXJB8ODWy49he_uKXmNPIM4iuHtoehzccwvRAmB"
            ) // replace with your address from tutorial 2 step 8
        );
        return client.open(contract) as OpenedContract<MainContract>;
    }, [client]);

    const {data: getMinDepositValue, isFetching} = useQuery({
            queryKey: ['min-deposit'],
            queryFn: async () => {
                if (!contract) return null;
                return (await contract.getMinDepositValue()).toString();
            }
        }
    );

    return {
        minDeposit: isFetching ? null : getMinDepositValue,
        address: contract?.address.toString(),
        // getMinDepositValue: () => {
        //     return contract?.getMinDepositValue();
        // },
    };
}
