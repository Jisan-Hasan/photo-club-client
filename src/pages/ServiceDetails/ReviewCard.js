import { Card } from "flowbite-react";
import React from "react";

const ReviewCard = ({ reviewInfo }) => {
    const { reviewerName, reviewerPhoto, review } = reviewInfo;
    return (
        <Card>
            <div className="flex justify-between">
                <h5 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                    {reviewerName}
                </h5>
                <img
                    src={reviewerPhoto}
                    className="w-16 h-16 rounded-full mt-[-5px]"
                    alt=""
                />
            </div>
            <p className="mb-5 text-base text-gray-500 dark:text-gray-400 sm:text-lg">
                {review}
            </p>
        </Card>
    );
};

export default ReviewCard;
