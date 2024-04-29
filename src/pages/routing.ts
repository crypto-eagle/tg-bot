import { createBrowserRouter } from "react-router-dom";
import { auth, dash, profile } from "./pages";

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
    path: "/profile",
    Component: profile.Layout,
    children: [
      {
        path: "",
        Component: profile.Profile,
      },
    ],
  },
  {
    path: "/",
    Component: dash.Layout,
    children: [
      {
        path: "",
        Component: dash.DashLayout,
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
        ],
      },
    ],
  },
]);
