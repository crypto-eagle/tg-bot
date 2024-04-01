import {createBrowserRouter} from "react-router-dom";
import * as authPages from "./Auth";
import * as dashPages from "./Dash";

export const routing = createBrowserRouter([
    {
        path: '/',
        Component: authPages.Layout,
        children: [
            {
                path: '',
                Component: authPages.Welcome
            }
        ]
    },
    {
        path: '/dash',
        Component: dashPages.Layout,
        children: [
            {
                path: '',
                Component: dashPages.Dash
            }
        ]
    }
]);
