import React from "react";
import "./footer.scss";
import { SlideInFromBot } from "../utils/Animations/AnimationText";
import { Link } from "react-router-dom";
function Footer() {
    return (
        <footer>
            <SlideInFromBot>
                <div className="group">
                    <p>Developpé par Kalène A PIOU</p>
                    <p>© 2023 Kalène A PIOU</p>
                </div>
                <div className="socials">
                    <li>
                        <a href="https://github.com/KaleneDev" target="_blank">
                            GitHub
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/kal%C3%A8ne-a-piou-8ba68826a/"
                            target="_blank"
                        >
                            Linkedin
                        </a>
                    </li>
                    <li>
                        <a href="mailto:apiou.kalene@gmail.com" target="_blank">
                            apiou.kalene@gmail.com
                        </a>
                    </li>
                </div>
                <div className="nav-footer">
                    <li>
                        <Link to="/">Accueil</Link>
                        <Link to="/work">Travaux</Link>
                        <Link to="/about">À Propos </Link>
                        <Link to="/contact">Contact</Link>
                    </li>
                </div>
            </SlideInFromBot>
        </footer>
    );
}

export default Footer;
