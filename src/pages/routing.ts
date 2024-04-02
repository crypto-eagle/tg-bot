import {createBrowserRouter} from "react-router-dom";
import { auth, dash } from "./pages";

export const routing = createBrowserRouter([
    {
        path: '/',
        Component: auth.Layout,
        children: [
            {
                path: '',
                Component: auth.Welcome
            }
        ]
    },
    {
        path: '/dash',
        Component: dash.Layout,
        children: [
            {
                path: '',
                Component: dash.Dash
            }
        ]
    }
]);
