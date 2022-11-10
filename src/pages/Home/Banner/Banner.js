import { Button } from "flowbite-react";
import React from "react";
import img from "../../../asset/image.jpg";

const Banner = () => {
    return (
        <div className="md:grid md:grid-cols-2">
            <div className="self-center ml-2">
                <h1 className="text-4xl md:text-8xl font-extrabold">
                    PHOTO CLUB
                    <br />
                    PHOTOGRAPHY
                </h1>
                <h3 className="text-xl md:text-3xl font-bold mt-3 mb-6">
                    PHOTOGRAPHY WITH STYLE
                </h3>
                <p className="text-lg font-semibold text-gray-600">
                    We strive to bring a sense of happiness and dedication in
                    our work with us wherever we go.
                    <br />
                    Each film we create is authentic and unique - created by you and your loved ones.
                </p>
                <Button
                    className="bg-emerald-400 px-6 py-2 mt-8 text-white"
                    color=""
                    pill={true}
                >
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
