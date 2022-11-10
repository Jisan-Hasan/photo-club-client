import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AddService from "../../pages/AddService/AddService";
import AllServices from "../../pages/AllServices/AllServices";
import Blog from "../../pages/Blog/Blog";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import MyReviews from "../../pages/MyReviews/MyReviews";
import ServiceDetails from "../../pages/ServiceDetails/ServiceDetails";
import SignUp from "../../pages/SignUp/SignUp";
import UpdateReview from "../../pages/UpdateReview/UpdateReview";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
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
                path: "/blog",
                element: <Blog />,
            },
            {
                path: "/services",
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
            {
                path: "/service/:id",
                element: <ServiceDetails />,
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/service/${params.id}`),
            },
            {
                path: "/myreviews",
                element: <MyReviews />,
            },
            {
                path: "/editreview/:id",
                element: <UpdateReview />,
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/review/${params.id}`),
            },
        ],
    },
]);
