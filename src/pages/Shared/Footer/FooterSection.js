import { Footer } from "flowbite-react";
import React from "react";

const FooterSection = () => {
    return (
        <div className="mt-8">
            <Footer className="shadow-none">
                <div className="w-full">
                    <div className="md:flex md:justify-between w-full grid grid-cols-2">
                        <div>
                            <Footer.Brand
                                href="https://flowbite.com"
                                src="https://flowbite.com/docs/images/logo.svg"
                                alt="Flowbite Logo"
                                name="Flowbite"
                            />
                        </div>
                        <div>
                            <Footer.Title title="about" />
                            <Footer.LinkGroup col={true}>
                                <Footer.Link href="#">Flowbite</Footer.Link>
                                <Footer.Link href="#">Tailwind CSS</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Follow us" />
                            <Footer.LinkGroup col={true}>
                                <Footer.Link href="#">Github</Footer.Link>
                                <Footer.Link href="#">Discord</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Legal" />
                            <Footer.LinkGroup col={true}>
                                <Footer.Link href="#">
                                    Privacy Policy
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Terms & Conditions
                                </Footer.Link>
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
