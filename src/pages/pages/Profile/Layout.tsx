import { Outlet } from "react-router-dom";
import React, { useContext } from "react";
import { TonConnectContext } from "@core/providers/ton-connect.provider";
import { SmartContractProvider } from "@core/providers/smart-contract.provider";

export default function Layout() {
  const { connected } = useContext(TonConnectContext);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!connected) {
  //     navigate("/auth");
  //   }
  // }, [navigate, connected]);

  return connected ? (
    <SmartContractProvider>
      <Outlet />
    </SmartContractProvider>
  ) : (
    ""
  );
}
