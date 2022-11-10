import { Button, Label, Textarea, TextInput } from "flowbite-react";
import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useTitle from "../../hooks/useTitle";

const AddService = () => {
    // toast function notify
    const notify = (message) => toast(message);

    const { user } = useContext(AuthContext);

    useTitle("Add Service");

    // Service add
    const handleAddService = (e) => {
        e.preventDefault();
        const form = e.target;
        const service = {
            serviceCreator: user?.uid,
            title: form.title.value,
            image: form.image.value,
            price: form.price.value,
            details: form.details.value,
        };
        // console.log(service);
        
        // post service 
        fetch("http://localhost:5000/addservice", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(service),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    notify("Service added Successfully.");
                    e.target.reset();
                }
            });
    };

    return (
        <form
            onSubmit={handleAddService}
            className="flex flex-col gap-4 md:w-2/3 lg:w-3/5 mx-2 md:mx-auto my-10"
        >
            <h1 className="text-5xl text-center">Add A Service</h1>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="title" value="Title" />
                </div>
                <TextInput
                    id="title"
                    type="text"
                    name="title"
                    placeholder="Weeding Photography"
                    required={true}
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="image" value="Image" />
                </div>
                <TextInput
                    id="image"
                    type="text"
                    name="image"
                    required={true}
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="price" value="Price" />
                </div>
                <TextInput
                    id="price"
                    type="number"
                    name="price"
                    required={true}
                />
            </div>
            <div id="textarea">
                <div className="mb-2 block">
                    <Label htmlFor="details" value="Service Details" />
                </div>
                <Textarea
                    id="details"
                    name="details"
                    required={true}
                    rows={4}
                />
            </div>

            <Button type="submit">Add Service</Button>
            <ToastContainer />
        </form>
    );
};

export default AddService;
