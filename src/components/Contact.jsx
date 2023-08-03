import React from "react";
import "./Contact.scss";
import Icon from "./IconT.jsx";
import {
    SlideInFromRight,
    SlideInFromLeft,
    SlideInFromTop,
    SlideInFromBot,
    ZoomOut,
} from "../utils/Animations/AnimationText";
import { Link } from "react-router-dom";
function Contact() {
    return (
        <>
            <aside>
                <div className="wrapper contact-me">
                    <SlideInFromTop>
                        <h2>Intéressé par une collaboration ?</h2>
                    </SlideInFromTop>
                    <SlideInFromLeft transform={50} duration={1.5}>
                        <Link to="/contact">
                            Envoyez-moi un message{" "}
                            <Icon name="send-plane-line" />
                        </Link>
                    </SlideInFromLeft>
                </div>
            </aside>
        </>
    );
}

export default Contact;
