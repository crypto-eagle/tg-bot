import { Outlet, useLocation, useNavigate } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import { TonConnectContext } from "@core/providers/ton-connect.provider";
import { SmartContractProvider } from "@core/providers/smart-contract.provider";
import {ReferralAddressProvider} from "@core/providers/referral-address.provider";
import { Header } from "./components/Header";

export default function Layout() {
  const { connected } = useContext(TonConnectContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!connected) {
      const searchParams = new URLSearchParams(location.search);
      searchParams.append("returnUrl", location.pathname);
      const url = searchParams.toString();
      navigate(`/auth?${url}`);
    }
  }, [navigate, connected, location]);

  return connected ? (
    <SmartContractProvider>
      <ReferralAddressProvider>
        <Header />
        <Outlet />
      </ReferralAddressProvider>
    </SmartContractProvider>
  ) : (
    ""
  );
}
