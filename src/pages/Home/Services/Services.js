import { Button, Footer } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("https://service-server-self.vercel.app/service")
            .then((res) => res.json())
            .then((data) => setServices(data))
            .catch((e) => console.log(e));
    }, []);
    return (
        <>
        <Footer.Divider />
        <div>
            <h1 className="text-4xl font-bold text-center mt-20 mb-8">
                Most Reliable Services
            </h1>
            <div className="md:flex md:justify-around mx-2">
                
                {services.map((service) => (
                    <ServiceCard key={service._id} service={service} />
                ))}
            </div>
            <div className="flex justify-center mt-5">
                <Link to='/services'>
                    <Button>Show All Services</Button>
                </Link>
            </div>
        </div>
        </>
    );
};

export default Services;
