import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import useTitle from "../../hooks/useTitle";
import MyReviewsCard from "./MyReviewsCard";

const MyReviews = () => {
    useTitle("My Reviews");
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    const [refresh, setRefresh] = useState(false);
    useEffect(() => {
        fetch(`http://localhost:5000/myreviews/${user?.uid}`)
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, [user, refresh]);
    console.log(reviews);
    return (
        <div className="md:w-4/5 lg:w-2/3 mx-2 md:mx-auto">
            <h1 className="text-4xl font-bold text-center my-10">My Reviews</h1>
            <div className="space-y-4">
                {reviews.map((review) => (
                    <MyReviewsCard
                        key={review._id}
                        reviewInfo={review}
                        refresh={refresh}
                        setRefresh={setRefresh}
                    />
                ))}
            </div>
        </div>
    );
};

export default MyReviews;
