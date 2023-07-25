import React from "react";
import "./Contact.scss";
import Icon from "./IconT.jsx";

function Contact() {
    return (
        <>
            <aside>
                <h2>Intéressé par une collaboration ?</h2>
                <a href="">
                    Envoyez-moi un message <Icon name="send-plane-line" />
                </a>
            </aside>
        </>
    );
}

export default Contact;
