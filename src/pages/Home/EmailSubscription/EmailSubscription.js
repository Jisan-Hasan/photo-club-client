import { Button, TextInput } from "flowbite-react";
import React from "react";

const EmailSubscription = () => {
    return (
        <div className="text-center my-24">
            <h3 className="text-xl uppercase md:font-semibold">
                Email Subscription
            </h3>
            <h1 className="text-2xl md:text-5xl md:w-1/3 mx-1 md:mx-auto font-semibold md:font-bold my-5">
                GET REGULAR <br /> UPDATES IN <br/>YOUR INBOX
            </h1>
            <div className="flex justify-center mx-auto">
                <TextInput
                    type="email"
                    placeholder="Your Email Here"
                    required={true}
                />
                <Button>Subscribe</Button>
            </div>
        </div>
    );
};

export default EmailSubscription;
