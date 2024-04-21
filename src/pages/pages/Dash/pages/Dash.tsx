import './Dash.scss';

import {useContext, useEffect, useState} from "react";
import {SmartContractContext} from "@core/providers/smart-contract.provider";
import {IProfile} from "@core/models";

interface StateType {
    maxDeposit: string;
    minDeposit: string;
    profile: IProfile | null;
}

export const Dash = () => {
    const api = useContext(SmartContractContext);
    const [state, setState] = useState<StateType | undefined>();

    useEffect(() => {
        if (!api) {
            return;
        }

        (async () => {
            setState({
                minDeposit: await api.getters.minDeposit(),
                maxDeposit: await api.getters.maxDeposit(),
                profile: await api.getters.profile(),
            })
        })();
    }, [api]);

    return (
        <div>
            DASH
            <>{state ? JSON.stringify(state) : 'Loading..'}
            </>
        </div>
    );
};
