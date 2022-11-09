import { Button, Label, Textarea, TextInput } from "flowbite-react";
import React from "react";

const AddService = () => {
    return (
        <form className="flex flex-col gap-4 md:w-2/3 lg:w-3/5 mx-2 md:mx-auto my-10">
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
                <Textarea id="details" required={true} rows={4} />
            </div>

            <Button type="submit">Add Service</Button>
        </form>
    );
};

export default AddService;
