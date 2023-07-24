import React from "react";
import "./footer.scss";

function Footer() {
    return (
        <footer>
            <div className="group">
                <p>Designed & Developed in Portland with Astro </p>
                <p>© 2023 Kalène A PIOU</p>
            </div>
            <div className="socials">
                <li>
                    <a href="">GitHub</a>
                </li>
                <li>
                    <a href="">Linkedin</a>
                </li>
                <li>
                    <a href="">Youtube</a>
                </li>
            </div>
        </footer>
    );
}

export default Footer;
