import "./Layout.scss";

import { Outlet, useNavigate } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import { TonConnectContext } from "@core/providers/ton-connect.provider";

export default function Layout() {
  const { connected } = useContext(TonConnectContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (connected) {
      navigate("/");
    }
  }, [navigate, connected]);

  return !connected ? <Outlet /> : "";
}
