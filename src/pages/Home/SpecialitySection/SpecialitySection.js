import {
    CalendarDaysIcon,
    CameraIcon,
    UserCircleIcon,
    VideoCameraIcon,
} from "@heroicons/react/24/solid";
import { Footer } from "flowbite-react";
import React from "react";

const SpecialitySection = () => {
    return (
        <>
        <Footer.Divider />
        <div className="my-10">
            <div className="text-center">
                <h2 className="text-3xl font-bold">WHY CHOOSE US</h2>
                <p className="text-lg font-medium my-2 md:w-1/2 mx-auto">
                    We strive to bring a sense of happiness and dedication in
                    our work with us wherever we go.
                </p>
            </div>
            <div className="md:grid md:grid-cols-2 text-center my-8 md:w-2/3 mx-auto gap-y-6">
                <div>
                    <CameraIcon className="h-16 w-16 text-blue-500 inline" />

                    <h3 className="text-xl font-bold">LATEST EQUIPMENT</h3>
                </div>
                <div>
                    <UserCircleIcon className="h-16 w-16 text-blue-500 inline" />
                    <h3 className="text-xl font-bold">HIGHLY SKILLED</h3>
                </div>
                <div>
                    <CalendarDaysIcon className="h-16 w-16 text-blue-500 inline" />
                    <h3 className="text-xl font-bold">DUE TIME DELIVERY</h3>
                </div>
                <div>
                    <VideoCameraIcon className="h-16 w-16 text-blue-500 inline" />
                    <h3 className="text-xl font-bold">AWESOME QUALITY</h3>
                </div>
            </div>
        </div>
        </>
    );
};

export default SpecialitySection;
