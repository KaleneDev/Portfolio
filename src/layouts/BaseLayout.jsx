import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { Helmet } from "react-helmet";
function BaseLayout(props) {
    const { title, description, children } = props;

    return (
        <div className="">
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Helmet>

            <Nav />
            {children}
            <Footer />
        </div>
    );
}

export default BaseLayout;
