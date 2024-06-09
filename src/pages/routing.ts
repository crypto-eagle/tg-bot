import { createBrowserRouter } from "react-router-dom";
import { auth, dash } from "./pages";
import { TestPage } from "./pages/Dash/Main/pages/Test";
import { DaysBack } from "./pages/Dash/Main/pages/Test/pages/DaysBack";

export default createBrowserRouter([
  {
    path: "/auth",
    Component: auth.Layout,
    children: [
      {
        path: "",
        Component: auth.Welcome,
      },
    ],
  },
  {
    path: "/",
    Component: dash.Layout,
    children: [
      {
        path: "",
        Component: dash.MainLayout,
        children: [
          {
            path: "",
            Component: dash.Stats,
          },
          {
            path: "/deposit",
            Component: dash.Deposit,
          },
          {
            path: "/withdraw",
            Component: dash.Withdraw,
          },
          {
            path: "/profile",
            Component: dash.ProfileStatus,
          },
          {
            path: "/referral",
            Component: dash.Referral,
          },
          {
            path: "/test",
            Component: TestPage,
            children: [
              {
                path: "days-back",
                Component: DaysBack,
              },
            ],
          },
        ],
      },
    ],
  },
]);
