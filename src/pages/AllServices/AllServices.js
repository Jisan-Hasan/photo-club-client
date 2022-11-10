import { Spinner } from "flowbite-react";
import React, { useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";
import ServiceCard from "../Home/Services/ServiceCard";


const AllServices = () => {
    const [spinner, setSpinner] = useState(true);
    const [services, setServices] = useState([]);
    useTitle("Services");
    useEffect(() => {
        fetch("https://service-server-self.vercel.app/allservices")
            .then((res) => res.json())
            .then((data) => {
                setServices(data);
                setSpinner(false);
            })
            .catch((e) => console.log(e));
    }, []);
    return (
        <div>
            <div className={`${spinner ? "text-center" : "hidden"}`}>
                <Spinner
                    color="failure"
                    aria-label="Extra large spinner example"
                    size="xl"
                />
            </div>
            <h1 className="text-center my-5 text-5xl font-bold">
                All Services
            </h1>
            <div className="mx-2 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-3">
                {services.map((service) => (
                    <ServiceCard key={service._id} service={service} />
                ))}
            </div>
        </div>
    );
};

export default AllServices;
