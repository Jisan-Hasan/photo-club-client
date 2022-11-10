import { Card } from "flowbite-react";
import React from "react";
import useTitle from "../../hooks/useTitle";

const Blog = () => {
    useTitle("Blogs");
    return (
        <div className="mb-24">
            <h1 className="text-center text-3xl font-bold my-12">My Blogs</h1>
            <Card className="my-5">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Difference between SQL and NoSQL
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    QL is the programming language used to interface with
                    relational databases. (Relational databases model data as
                    records in rows and tables with logical links between them).
                    NoSQL is a class of DBMs that are non-relational and
                    generally do not use SQL. Most SQL databases can be scaled
                    vertically, by increasing the processing power of existing
                    hardware. NoSQL databases use a master-slave architecture
                    which scales better horizontally, with additional servers or
                    nodes. SQL database schemata always represent relational,
                    tabular data, with rules about consistency and integrity.
                    They contain tables with columns (attributes) and rows
                    (records), and keys have constrained logical relationships.
                </p>
            </Card>
            <Card className="my-5">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    What is JWT, and how does it work?
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    SON Web Token (JWT) is an open standard (RFC 7519) for
                    securely transmitting information between parties as JSON
                    object. It is compact, readable and digitally signed using a
                    private key/ or a public key pair by the Identity
                    Provider(IdP). So the integrity and authenticity of the
                    token can be verified by other parties involved. The purpose
                    of using JWT is not to hide data but to ensure the
                    authenticity of the data. JWT is signed and encoded, not
                    encrypted. JWT is a token based stateless authentication
                    mechanism. Since it is a client-side based stateless
                    session, server doesn't have to completely rely on a
                    datastore(database) to save session information.
                </p>
            </Card>
            <Card className="my-5">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    What is the difference between javascript and NodeJS?
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    NodeJS is a cross-platform and opensource Javascript runtime
                    environment that allows the javascript to be run on the
                    server-side. Nodejs allows Javascript code to run outside
                    the browser. Nodejs comes with a lot of modules and mostly
                    used in web development. Javascript is a Scripting language.
                    It is mostly abbreviated as JS. It can be said that
                    Javascript is the updated version of the ECMA script.
                    Javascript is a high-level programming language that uses
                    the concept of Oops but it is based on prototype
                    inheritance. JavaScript is a simple programming language
                    that can be used with any browser that has the JavaScript
                    Engine installed. Node.js, on the other hand, is an
                    interpreter or execution environment for the JavaScript
                    programming language. It requires libraries that can be
                    conveniently accessed from JavaScript programming to be more
                    helpful.
                </p>
            </Card>
            <Card className="my-5">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    How does NodeJS handle multiple requests at the same time?
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    We know NodeJS application is single-threaded. Say, if
                    processing involves request A that takes 10 seconds, it does
                    not mean that a request which comes after this request needs
                    to wait 10 seconds to start processing because NodeJS event
                    loops are only single-threaded. The entire NodeJS
                    architecture is not single-threaded. NodeJS receives
                    multiple client requests and places them into EventQueue.
                    NodeJS is built with the concept of event-driven
                    architecture. NodeJS has its own EventLoop which is an
                    infinite loop that receives requests and processes them.
                    EventLoop is the listener for the EventQueue. If NodeJS can
                    process the request without I/O blocking then the event loop
                    would itself process the request and sends the response back
                    to the client by itself. But, it is possible to process
                    multiple requests parallelly using the NodeJS cluster module
                    or worker_threads module.
                </p>
            </Card>
        </div>
    );
};

export default Blog;
