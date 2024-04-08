import './Layout.scss';

import {Outlet, useNavigate} from "react-router-dom";
import {useTonConnect} from "@hooks/useTonConnect";
import {useEffect} from "react";

export const Layout = () => {
    const {connected} = useTonConnect();
    const navigate = useNavigate();

    useEffect(() => {
        if (connected) {
            navigate("/");
        }
    }, [navigate, connected]);

    return (
        <Outlet/>
    );
};
