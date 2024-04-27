import React from "react";

import { Outlet } from "react-router-dom";
import { DepositStatus } from "./components/DepositStatus";

export function DashLayout() {
  // const { t } = useTranslation();
  // const api = useContext(SmartContractContext);
  // const [state, setState] = useState<StateType | undefined>();
  //
  // useEffect(() => {
  //   if (!api) {
  //     return;
  //   }
  //
  //   (async () => {
  //     setState({
  //       minDeposit: await api.getters.minDeposit(),
  //       maxDeposit: await api.getters.maxDeposit(),
  //       profile: await api.getters.profile(),
  //     });
  //   })();
  // }, [api]);

  return (
    <>
      <DepositStatus />
      <Outlet />
    </>
  );
}
