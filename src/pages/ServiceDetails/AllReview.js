import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

const AllReview = ({ serviceId, refresh, setRefresh }) => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${serviceId}`)
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, [serviceId, refresh]);
    return (
        <div>
            <h2 className="text-4xl font-bold text-center my-10">
                All Reviews
            </h2>
            <div className="space-y-3">
                {reviews.map((review) => (
                    <ReviewCard key={review._id} reviewInfo={review} />
                ))}
            </div>
        </div>
    );
};

export default AllReview;
