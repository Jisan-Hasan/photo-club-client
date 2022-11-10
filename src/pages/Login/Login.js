import { GoogleAuthProvider } from "firebase/auth";
import { Button, Label, Spinner, TextInput } from "flowbite-react";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import useTitle from "../../hooks/useTitle";

const Login = () => {
    const [spinner, setSpinner] = useState(false);
    const { providerLogin, signIn, error, setError } = useContext(AuthContext);

    const navigate = useNavigate();

    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    useTitle("Login");

    // User sign in
    const handleSubmit = (event) => {
        event.preventDefault();
        setSpinner(true);
        // get form data
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // sign in user
        signIn(email, password)
            .then((result) => {
                const user = result.user;
                const currentUser = {
                    email: user.email,
                };
                // get jwt token
                fetch("https://service-server-self.vercel.app/jwt", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(currentUser),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        localStorage.setItem("photoClubToken", data.token);
                    });
                // console.log(user);
                form.reset();
                setError("");
                setSpinner(false);
                navigate(`${from}`, { replace: true });
            })
            .catch((e) => {
                // console.log(e);
                setError(e.message);
            });

        // console.log(email, password);
    };


    // google signin
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then((result) => {
                const user = result.user;
                const currentUser = {
                    email: user.email,
                };
                // get jwt token
                fetch("https://service-server-self.vercel.app/jwt", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(currentUser),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        localStorage.setItem("photoClubToken", data.token);
                    });
                // console.log(user);
                setError("");
                navigate(from, { replace: true });
            })
            .catch((e) => {
                // console.log(e);
                setError(e.message);
            });
    };

    return (
        <div className="md:w-1/2 lg:w-1/3 mx-2 md:mx-auto my-28">
            <h1 className="text-center text-4xl font-extrabold my-5">Login</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
                    Don't Have an account?{" "}
                    <Link className="text-blue-600" to="/register">
                        Register
                    </Link>
                </p>

                <Button type="submit">Login</Button>

                <div className={`${spinner ? "text-center" : "hidden"}`}>
                <Spinner
                    color="failure"
                    aria-label="Extra large spinner example"
                    size="xl"
                />
            </div>

                <div className="text-center my-10">
                    <h3 className="text-sm mb-5">
                        Sign In with Social Account
                    </h3>
                    <div className="w-1/2 mx-auto">
                        <Button
                            className="mx-auto"
                            onClick={handleGoogleSignIn}
                            gradientDuoTone="purpleToBlue"
                        >
                            Google
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;
