import { Button, Card } from "flowbite-react";
import React from "react";

const MyReviewsCard = ({ reviewInfo, refresh, setRefresh }) => {
    const { reviewerName, reviewerPhoto, review, serviceTitle, _id } =
        reviewInfo;

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/myreviews/${_id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.deletedCount) {
                    setRefresh(!refresh);
                }
            });
    };
    const handleEdit = (id) => {};
    return (
        <div>
            <Card>
                <div className="flex justify-between">
                    <h5 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                        {serviceTitle}
                    </h5>
                    <div className="flex space-x-1">
                        <Button
                            onClick={() => handleDelete(_id)}
                            color="failure"
                        >
                            Delete
                        </Button>
                        <Button color="warning">Edit</Button>
                    </div>
                </div>
                <p className="mb-5 text-base text-gray-500 dark:text-gray-400 sm:text-lg">
                    {review}
                </p>
            </Card>
        </div>
    );
};

export default MyReviewsCard;
