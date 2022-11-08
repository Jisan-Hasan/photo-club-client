import React from "react";
import { Outlet } from "react-router-dom";
import FooterSection from "../pages/Shared/Footer/FooterSection";
import Header from "../pages/Shared/Header/Header";

const Main = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <FooterSection/>
        </div>
    );
};

export default Main;
