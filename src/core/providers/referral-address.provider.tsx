import React, { createContext, useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { Address } from "@ton/core";

const uplineParam: string = "upline";

export interface IReferralAddressData {
    referralAddress: Address | null;
}

export const ReferralAddressContext = createContext<IReferralAddressData>({} as IReferralAddressData);

export function ReferralAddressProvider(props: { children: React.ReactNode }) {
    const [referralAddress, setReferralAddress] = useState(() => {
        const upline = localStorage.getItem(uplineParam);
        return upline ? Address.parse(upline) : null;
    });
    const { children } = props;
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const uplineAddress = params.get(uplineParam);

        if (uplineAddress && Address.isFriendly(uplineAddress)) {
            setReferralAddress(Address.parse(uplineAddress));
            localStorage.setItem(uplineParam, uplineAddress);
        }
    }, [location]);
    const value = useMemo(() => ({ referralAddress }), [referralAddress]);

    return (
        <ReferralAddressContext.Provider value={value}>
            {children}
        </ReferralAddressContext.Provider>
    );
}
