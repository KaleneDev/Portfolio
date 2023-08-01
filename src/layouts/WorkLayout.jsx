import { React, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/layouts/WorkLayout.scss";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Icon from "../components/IconT";

function WorkLayout(props) {
    const { title, description, children, details } = props;
    const detailsArray = details.split(" ");
    useEffect(() => {
        document.title = title;
        document.description = description;
    }, [title, description]);
    return (
        <>
            <header className="header works">
                <div className="stack wrapper">
                    <Link className="back-link" to="/work">
                        <Icon name="arrow-left" /> Work
                    </Link>
                    <div className="hero">
                        <div className="stack">
                            <h1>{title}</h1>
                        </div>
                        <div className="stack details">
                            <div className="tags gap-2">
                                {detailsArray.map((detail, index) => {
                                    return <span key={index}>{detail}</span>;
                                })}
                            </div>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </header>
            {children}
            <Contact />
            <Footer />
        </>
    );
}

export default WorkLayout;
