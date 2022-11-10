import { Footer } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const FooterSection = () => {
    return (
        <div className="mt-8">
            <Footer.Divider />
            <Footer className="shadow-none">
                
                <div className="w-full">
                    <div className="md:flex md:justify-between w-full grid grid-cols-2">
                        <div>
                            <Link className="text-3xl font-bold" to="/">
                                Photo Club
                            </Link>
                            <p className="mt-3 text-lg font-semibold">
                                Photography With Style
                            </p>
                        </div>
                        <div>
                            <Footer.Title title="about" />
                            <Footer.LinkGroup col={true}>
                                <Footer.Link>About Us</Footer.Link>
                                <Footer.Link>Contact Us</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Follow us" />
                            <Footer.LinkGroup col={true}>
                                <Footer.Link>Facebook</Footer.Link>
                                <Footer.Link>Instagram</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Legal" />
                            <Footer.LinkGroup col={true}>
                                <Footer.Link>Privacy Policy</Footer.Link>
                                <Footer.Link>Terms & Conditions</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>

                    <Footer.Divider />
                    <div className="w-full my-5 text-center">
                        <Footer.Copyright
                            href="#"
                            by="Jisan Hasan"
                            year={2022}
                        />
                    </div>
                </div>
            </Footer>
        </div>
    );
};

export default FooterSection;
