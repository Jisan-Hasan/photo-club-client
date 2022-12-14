import { Button, Label, Textarea } from "flowbite-react";
import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const ReviewForm = ({ service, refresh, setRefresh }) => {
    const { user } = useContext(AuthContext);
    // console.log(user);
    const handleAddReview = (e) => {
        e.preventDefault();

        const reviewInfo = {
            reviewerId: user.uid,
            reviewerName: user.displayName,
            reviewerEmail: user.email,
            reviewerPhoto: user?.photoURL,
            serviceId: service._id,
            serviceTitle: service.title,
            review: e.target.review.value,
        };
        // console.log(reviewInfo);

        fetch("https://service-server-self.vercel.app/addreview", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(reviewInfo),
        })
            .then((res) => res.json())
            .then((data) => {console.log(data)
            if(data.insertedId){
                setRefresh(!refresh);
            }});

        e.target.reset();
    };
    return (
        <form onSubmit={handleAddReview}>
            <div id="textarea">
                <div className="mb-2 block">
                    <Label htmlFor="review" value="Your review" />
                </div>
                <Textarea
                    id="review"
                    name="review"
                    placeholder="Leave a review..."
                    required={true}
                    rows={4}
                />
            </div>
            <Button className="mt-2">
                <input type="submit" value="Add Review" />
            </Button>
        </form>
    );
};

export default ReviewForm;
