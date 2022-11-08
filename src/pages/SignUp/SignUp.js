import { Button, Label, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const SignUp = () => {
    const { createUser, error, setError, updateUserProfile } =
        useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                // console.log(user);
                form.reset();
                setError("");
                handleUpdateUserProfile(name);
            })
            .catch((e) => {
                // console.log(e);
                setError(e.message);
            });

        // console.log(name, photoURL, email, password);
    };
    const handleUpdateUserProfile = (name) => {
        const profile = {
            displayName: name,
        };
        updateUserProfile(profile)
            .then(() => {})
            .catch((e) => console.log(e));
    };
    return (
        <div className="md:w-1/2 lg:w-1/3 mx-2 md:mx-auto my-28">
            <h1 className="text-center text-4xl font-extrabold my-5">Register</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="name" value="Your Name" />
                    </div>
                    <TextInput
                        id="name"
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email1" value="Your email" />
                    </div>
                    <TextInput
                        id="email1"
                        type="email"
                        name="email"
                        placeholder="name@gmail.com"
                        required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password1" value="Your password" />
                    </div>
                    <TextInput
                        name="password"
                        id="password1"
                        type="password"
                        placeholder="password"
                        required={true}
                    />
                </div>

                <p className="my-5">
                    Already have an account?{" "}
                    <Link className="text-blue-600" to="/login">
                        Sign In
                    </Link>
                </p>

                <Button type="submit">Register</Button>

                
            </form>
        </div>
    );
};

export default SignUp;