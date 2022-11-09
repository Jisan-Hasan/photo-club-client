import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AddService from "../../pages/AddService/AddService";
import AllServices from "../../pages/AllServices/AllServices";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/SignUp/SignUp";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <p>Error</p>,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <SignUp />,
            },
            {
                path: "/allservices",
                element: <AllServices />,
            },
            {
                path: "/addservice",
                element: (
                    <PrivateRoutes>
                        <AddService />
                    </PrivateRoutes>
                ),
            },
        ],
    },
]);
