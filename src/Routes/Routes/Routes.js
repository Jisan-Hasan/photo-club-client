import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/Home/Home/Home";

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
        ],
    },
]);
