import "./Layout.scss";

import { Outlet, useNavigate } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import { TonConnectContext } from "@core/providers/ton-connect.provider";
import { SmartContractProvider } from "@core/providers/smart-contract.provider";

export default function Layout() {
  const { connected } = useContext(TonConnectContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!connected) {
      navigate("/auth");
    }
  }, [navigate, connected]);

  return connected ? (
    <SmartContractProvider>
      <Outlet />
    </SmartContractProvider>
  ) : (
    ""
  );
}
