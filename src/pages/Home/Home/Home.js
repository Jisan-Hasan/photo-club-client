import React from "react";
import useTitle from "../../../hooks/useTitle";
import Banner from "../Banner/Banner";
import EmailSubscription from "../EmailSubscription/EmailSubscription";
import Services from "../Services/Services";
import SpecialitySection from "../SpecialitySection/SpecialitySection";

const Home = () => {
    useTitle("Home");
    return (
        <div>
            <Banner />
            <Services />
            <SpecialitySection />
            <EmailSubscription />
        </div>
    );
};

export default Home;
