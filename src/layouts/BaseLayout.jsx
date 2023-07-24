import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { Helmet } from "react-helmet";
function BaseLayout(props) {
    const { title, description, children } = props;

    useEffect(() => {
        document.title = title;
        document.description = description;
    }, [title, description]);
    return (
        <>
            <Nav />
            {children}
            <Footer />
        </>
    );
}

export default BaseLayout;
