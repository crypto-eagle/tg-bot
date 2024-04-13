import React, {createContext} from "react";
import {IApiResult} from "@core/models/IApiResult";
import {useApi} from "../../pages/hooks/useApi";

export const SmartContractContext = createContext<IApiResult>({} as IApiResult);

export const SmartContractProvider = (props: { children: React.ReactNode }) => {
    const api = useApi();

    return (
        api ?
            <SmartContractContext.Provider value={api}>{props.children}</SmartContractContext.Provider>
            : "Loading.."
    );
};
