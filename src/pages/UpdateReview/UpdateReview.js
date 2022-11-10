import { Button, Label, Textarea, TextInput } from "flowbite-react";
import React from "react";
import { useLoaderData } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useTitle from "../../hooks/useTitle";

const UpdateReview = () => {
    const notify = (message) => toast(message);
    useTitle("Edit Review");
    const reviewInfo = useLoaderData();
    const updatedReview = reviewInfo;
    const { _id, review, serviceTitle } = reviewInfo;
    console.log(reviewInfo);
    const handleUpdateReview = (e) => {
        e.preventDefault();
        updatedReview.review = e.target.review.value;
        console.log(updatedReview);
        fetch(`https://service-server-self.vercel.app/review/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updatedReview),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount) {
                    notify("Updated Successfully.");
                }
            });
    };
    return (
        <div className="md:w-2/3 lg:w-3/5 md:mx-auto mx-2">
            <h1 className="text-4xl font-bold text-center my-5">
                Update Review
            </h1>
            <form onSubmit={handleUpdateReview}>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="name" value="Service Name" />
                    </div>
                    <TextInput
                        id="name"
                        type="name"
                        defaultValue={serviceTitle}
                        required={true}
                        readOnly={true}
                    />
                </div>
                <div className="mb-2 block">
                    <Label htmlFor="review" value="Your review" />
                </div>
                <Textarea
                    id="review"
                    name="review"
                    defaultValue={review}
                    required={true}
                    rows={4}
                />
                <Button className="mt-5 mx-auto" type="submit">
                    Update
                </Button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default UpdateReview;
