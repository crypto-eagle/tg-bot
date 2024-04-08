import {Address} from "ton-core";
import {deposit} from "@hooks/useApi/functions/deposit";
import {useQuery} from "@tanstack/react-query";
import {maxDepositQuery} from "@hooks/useApi/functions/maxDepositQuery";
import {useTonConnect} from "@hooks/useTonConnect";
import {useSmartContract} from "@hooks/useApi/useSmartContract";
import {useMinDeposit} from "@hooks/useApi/hooks/useMinDeposit";

export function useApi() {
    const {sender} = useTonConnect();
    const contract = useSmartContract();

    return {
        minDeposit: useMinDeposit(contract),
        maxDeposit: useQuery(maxDepositQuery(contract)),
        address: contract?.address.toString(),
        deposit: (amount: bigint, upLine: Address) => contract ? deposit(contract, sender, amount, upLine) : null
    };
}
