import React from "react";
import { Link } from "react-router-dom";
import Icon from "./IconT.jsx";
import "./Nav.scss";

function Nav() {
    const iconLinks = [
        {
            label: "Twitter",
            href: "https://twitter.com/me",
            icon: "twitter-logo",
        },
        { label: "GitHub", href: "https://github.com/me", icon: "github-logo" },
        {
            label: "Linkedin",
            href: "https://www.linkedin.com/in/kal%C3%A8ne-a-piou-8ba68826a/",
            icon: "linkedin-logo",
        },
        {
            label: "YouTube",
            href: "https://www.youtube.com/@me/",
            icon: "youtube-logo",
        },
    ];

    return (
        <nav className="nav-container">
            <div className="menu-header">
                <Link className="site-title" to="/">
                    Kalène A PIOU
                </Link>
                <Icon className="menu-icon" name="terminal-window" />
            </div>
            <div className="menu-content">
                <ul className="nav-items">
                    <li>
                        <Link className="link">Accueil</Link>
                    </li>
                    <li>
                        <Link className="link">Travaux</Link>
                    </li>
                    <li>
                        <Link className="link">À propos</Link>
                    </li>
                </ul>
            </div>
            <div className="menu-footer">
                <div className="socials">
                    {iconLinks.map(({ href, icon, label }) => (
                        <a className="social" href={href}>
                            <span>{label}</span>
                            {/* {icon} */}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}

export default Nav;
