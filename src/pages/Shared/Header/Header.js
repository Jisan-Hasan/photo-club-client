import { Button, Navbar } from "flowbite-react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch((e) => console.log(e));
    };
    // console.log(user);
    return (
        <Navbar className="my-4 shadow-sm" fluid={true} rounded={true}>
            <Link to="/">
                <span className="self-center text-emerald-600 whitespace-nowrap text-3xl font-bold dark:text-white">
                    PhotoClub
                </span>
            </Link>
            <div className="flex md:order-2">
                {user ? (
                    <Button onClick={handleLogOut} color="failure" pill={true}>
                        Sign Out
                    </Button>
                ) : (
                    <Link to="/login">
                        <Button color="success" pill={true}>
                            Login
                        </Button>
                    </Link>
                )}
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Link className="hover:text-blue-600" to="/">
                    Home
                </Link>
                <Link className="hover:text-blue-600" to="/services">
                    Services
                </Link>
                <Link className="hover:text-blue-600" to="/blog">
                    Blog
                </Link>
                {user ? (
                    <>
                        <Link className="hover:text-blue-600" to="/myreviews">
                            My Reviews
                        </Link>
                        <Link className="hover:text-blue-600" to="/addservice">
                            Add Service
                        </Link>
                    </>
                ) : (
                    <></>
                )}
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
