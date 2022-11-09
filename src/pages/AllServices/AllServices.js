import React, { useEffect, useState } from "react";
import ServiceCard from "../Home/Services/ServiceCard";

const AllServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/allservices")
            .then((res) => res.json())
            .then((data) => setServices(data))
            .catch((e) => console.log(e));
    }, []);
    return (
        <div>
            <h1 className="text-center my-5 text-5xl font-bold">All Services</h1>
            <div className="mx-2 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-3">
                {services.map((service) => (
                    <ServiceCard key={service._id} service={service} />
                ))}
            </div>
        </div>
    );
};

export default AllServices;
