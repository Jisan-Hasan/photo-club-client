import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { Button, Label, TextInput } from "flowbite-react";
import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Login = () => {
    const { providerLogin, signIn, error, setError } = useContext(AuthContext);

    const navigate = useNavigate();

    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then((result) => {
                const user = result.user;
                // console.log(user);
                form.reset();
                setError("");
                navigate(`${from}`, { replace: true });
            })
            .catch((e) => {
                // console.log(e);
                setError(e.message);
            });

        // console.log(email, password);
    };

    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then((result) => {
                const user = result.user;
                // console.log(user);
                setError("");
                navigate(from, { replace: true });
            })
            .catch((e) => {
                // console.log(e);
                setError(e.message);
            });
    };
    const githubProvider = new GithubAuthProvider();
    const handleGithubSignIn = () => {
        providerLogin(githubProvider)
            .then((result) => {
                const user = result.user;
                // console.log(user);
                setError("");
                navigate(from, { replace: true });
            })
            .catch((e) => {
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

                <div className="text-center my-10">
                    <h3 className="text-sm mb-5">
                        Sign In with Social Account
                    </h3>
                    <div className="grid grid-cols-2 gap-3 w-1/2 mx-auto">
                        <Button onClick={handleGoogleSignIn} gradientDuoTone="purpleToBlue">Google</Button>
                        <Button onClick={handleGithubSignIn} gradientDuoTone="cyanToBlue">GitHub</Button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;
