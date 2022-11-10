import { Card } from "flowbite-react";
import React, { useContext, useState } from "react";
import { Link, useLoaderData, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import useTitle from "../../hooks/useTitle";
import AllReview from "./AllReview";
import ReviewForm from "./ReviewForm";

const ServiceDetails = () => {
    const [refresh, setRefresh] = useState(false);
    useTitle("Service Details");
    const { user } = useContext(AuthContext);
    const location = useLocation();
    const service = useLoaderData();
    const { _id, title, image, price, details } = service;
    console.log(service);
    return (
        <div className="md:w-4/5 lg:w-2/3 mx-2 md:mx-auto">
            <Card>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {title}
                </h5>
                <h3 className="text-xl font-semibold text-red-500">
                    Price: ${price}
                </h3>
                <img
                    className="w-full max-h-[700px] rounded-md"
                    src={image}
                    alt=""
                />
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {title}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    <span className="font-bold text-green-500">
                        Description:
                    </span>{" "}
                    {details}
                </p>
            </Card>

            <div className="my-10">
                {user ? (
                    <ReviewForm
                        refresh={refresh}
                        setRefresh={setRefresh}
                        service={service}
                    />
                ) : (
                    <div className="text-center">
                        <p>
                            Please{" "}
                            <Link
                                state={{ from: location }}
                                className="text-blue-600"
                                to="/login"
                            >
                                login
                            </Link>{" "}
                            to add a review
                        </p>
                    </div>
                )}
            </div>
            <AllReview
                refresh={refresh}
                setRefresh={setRefresh}
                serviceId={_id}
            />
        </div>
    );
};

export default ServiceDetails;
