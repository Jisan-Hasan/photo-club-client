import { Button, Card } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const MyReviewsCard = ({ reviewInfo, refresh, setRefresh }) => {
    const notify = (message) => toast(message);
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
                    notify("Review Deleted Successfully.");
                }
            });
    };
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
                        <Link to={`/editreview/${_id}`}><Button color="warning">Edit</Button></Link>
                    </div>
                </div>
                <p className="mb-5 text-base text-gray-500 dark:text-gray-400 sm:text-lg">
                    {review}
                </p>
            </Card>
            <ToastContainer />
        </div>
    );
};

export default MyReviewsCard;
