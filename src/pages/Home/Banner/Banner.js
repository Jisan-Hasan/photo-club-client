import { Button } from "flowbite-react";
import React from "react";
import img from "../../../asset/image.jpg";

const Banner = () => {
    return (
        <div className="md:grid md:grid-cols-2">
            <div className="self-center ml-2">
                <h1 className="text-4xl md:text-8xl font-extrabold">
                    PICKY
                    <br />
                    PHOTOGRAPHY
                </h1>
                <h3 className="text-xl md:text-3xl font-bold mt-3 mb-6">
                    PHOTOGRAPHY WITH STYLE
                </h3>
                <p className="text-lg font-semibold text-gray-600">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Esse adipisci totam
                    <br />
                    eum odit cum sit nulla aliquam earum quas deserunt?
                </p>
                <Button className="bg-emerald-400 px-6 py-2 mt-8 text-white" color="" pill={true}>
                    READ MORE
                </Button>
            </div>
            <div className="self-center">
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default Banner;
