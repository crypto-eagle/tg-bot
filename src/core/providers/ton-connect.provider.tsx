import React, {createContext} from "react";
import {ITonConnect} from "@core/models/ITonConnect";
import {useTonConnect} from "../../pages/hooks/useTonConnect";

export const TonConnectContext = createContext<ITonConnect>({loaded: false} as ITonConnect);

export const TonConnectProvider = (props: { children: React.ReactNode }) => {
    const tonConnect = useTonConnect();

    return (
        tonConnect ?
            <TonConnectContext.Provider value={tonConnect}>{props.children}</TonConnectContext.Provider>
            : "Loading.."
    );
};
