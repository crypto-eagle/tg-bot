import "./Layout.scss";

import { Outlet, useLocation, useNavigate } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import { TonConnectContext } from "@core/providers/ton-connect.provider";
import { ReferralAddressProvider } from "@core/providers/referral-address.provider";

export default function Layout() {
  const { connected } = useContext(TonConnectContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (connected) {
      const { search } = location;
      const params = new URLSearchParams(search);
      const returnUrl = params.get("returnUrl");
      const url = returnUrl || "/";

      navigate(url);
    }
  }, [navigate, connected, location]);

  return !connected ? (
      <ReferralAddressProvider>
        <Outlet />
      </ReferralAddressProvider>
  ) : "";
}
