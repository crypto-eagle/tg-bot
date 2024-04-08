import {fromNano, OpenedContract} from "ton-core";
import {EarnContract} from "@core/contracts/tact_EarnContract";
import {useEffect, useState} from "react";

export function useMinDeposit(contract: OpenedContract<EarnContract> | undefined) {
    const [state, setState] = useState<string | null>();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        async function fetch() {
            if (!contract) {
                return;
            }
            setIsLoading(true);
            setState(null);

            try {
                const value = await contract.getMinDeposit();
                setState(fromNano(value));
            }
            catch (e) {
                console.log('e', e);
            }
            finally {
                setIsLoading(false);
            }
        }

        fetch().then();

    }, [contract]);

    return {state, isLoading}
}
