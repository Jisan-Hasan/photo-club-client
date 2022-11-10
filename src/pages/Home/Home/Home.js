import React from "react";
import Banner from "../Banner/Banner";
import EmailSubscription from "../EmailSubscription/EmailSubscription";
import Services from "../Services/Services";
import SpecialitySection from "../SpecialitySection/SpecialitySection";

const Home = () => {
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
