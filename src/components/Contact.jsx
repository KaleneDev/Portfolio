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
function Contact() {
    return (
        <>
            <aside>
                <SlideInFromTop>
                    <h2>Intéressé par une collaboration ?</h2>
                </SlideInFromTop>
                <SlideInFromLeft transform={50} duration={1.5}>
                    <a href="">
                        Envoyez-moi un message <Icon name="send-plane-line" />
                    </a>
                </SlideInFromLeft>
            </aside>
        </>
    );
}

export default Contact;
