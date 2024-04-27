import { Outlet, useLocation, useNavigate } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import { TonConnectContext } from "@core/providers/ton-connect.provider";
import { SmartContractProvider } from "@core/providers/smart-contract.provider";
import { Header } from "./components/Header";

export default function Layout() {
  const { connected } = useContext(TonConnectContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!connected) {
      navigate(`/auth?returnUrl=${location.pathname}`);
    }
  }, [navigate, connected, location]);

  return connected ? (
    <SmartContractProvider>
      <Header />
      <Outlet />
    </SmartContractProvider>
  ) : (
    ""
  );
}
