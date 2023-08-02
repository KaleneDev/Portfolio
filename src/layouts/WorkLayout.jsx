import { React, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/layouts/WorkLayout.scss";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Icon from "../components/IconT";
import {
    SlideInFromTop,
    ZoomOut,
    SlideInFromBot,
} from "../utils/Animations/AnimationText";
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
                            <SlideInFromTop duration={1.5} scroll="on">
                                <h1>{title}</h1>
                            </SlideInFromTop>
                        </div>
                        <div className="stack details">
                            <div className="tags gap-2">
                                {detailsArray.map((detail, index) => {
                                    return (
                                        <ZoomOut duration={1.5} scroll="on">
                                            <span key={index}>{detail}</span>
                                        </ZoomOut>
                                    );
                                })}
                            </div>
                            <SlideInFromBot duration={1.5} scroll="on">
                                <p>{description}</p>
                            </SlideInFromBot>
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
