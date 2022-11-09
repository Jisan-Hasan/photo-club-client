import { Button, Card } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    console.log(service);
    const {_id, title, image, price, details} = service;
    return (
        <div className="max-w-sm mb-4">
            <Card>
                <img src={image} className="max-w-full max-h-72 rounded-md" alt="" />
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {title}
                </h5>
                <h3 className="text-xl font-semibold text-red-500">${price}</h3>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {
                        details.length > 100 ? details.substring(0,100) + '...' : details
                    }
                </p>
                <Link to={`/service/${_id}`}>
                    <Button>Details</Button>
                </Link>
            </Card>
        </div>
    );
};

export default ServiceCard;
