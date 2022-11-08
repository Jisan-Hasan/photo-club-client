import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <h1>Main</h1>,
        errorElement: <p>Error</p>,
        children: [],
    },
]);
