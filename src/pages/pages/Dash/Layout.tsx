import './Layout.scss';
import {Outlet} from "react-router-dom";

export const Layout = () => {
    return (
        <div className="sss">
            <div className="sss__ss">
                Dash Layout
            </div>
            <Outlet/>
        </div>
    );
};
