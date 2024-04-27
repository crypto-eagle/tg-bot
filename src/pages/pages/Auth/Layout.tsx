import "./Layout.scss";

import { Outlet, useLocation, useNavigate } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import { TonConnectContext } from "@core/providers/ton-connect.provider";

const returnUrlLen = "?returnUrl=".length;

export default function Layout() {
  const { connected } = useContext(TonConnectContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (connected) {
      const { search } = location;
      const url = search ? search.slice(returnUrlLen) : "/";

      navigate(url);
    }
  }, [navigate, connected, location]);

  return !connected ? <Outlet /> : "";
}
