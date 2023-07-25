import React from "react";
import { Link } from "react-router-dom";
import "./Hero.scss";
import portrait from "../assets/portrait_02.jpg";
import sql from "../assets/logos/sql.png";
import Icon from "./IconT.jsx";
function Hero() {
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
        <header className="hero gap-8 lg:gap-20">
            <div className="profile">
                <div className="hero stack gap-4 lg:gap-4">
                    <h2 className="title">Bonjour, mon nom</h2>
                    <h1> Kalène A PIOU</h1>
                    <h2>Et je suis devoleppeur Frontend</h2>
                    <p className="tagline">
                        Je suis actuellement basé à Poligny, dans le Jura.
                    </p>
                    <div className="socials">
                        {iconLinks.map(({ href, icon, label }, i) => (
                            <a key={i} className="social" href={href}>
                                <span className="sr-only">{label}</span>
                                <Icon name={icon} />
                            </a>
                        ))}
                    </div>
                    <div className="container-cv">
                        <Link className="button cv" to="/work">
                            Télécharger CV <Icon name="arrow-right" />
                        </Link>
                    </div>
                </div>
                <div className="container-portrait">
                    <img className="portrait" src={portrait} alt="Kalene" />
                </div>
            </div>
            <div className="language">
                <div>
                    <Icon name="javaScript"></Icon>
                    <span> JavaScript</span>
                </div>
                <div>
                    <Icon name="HTML"></Icon>
                    <span> HTML & CSS</span>
                </div>
                <div>
                    <Icon name="react"></Icon>
                    <span>React</span>
                </div>
                <div>
                    <Icon name="nodeJs"></Icon>
                    <span> Node.js</span>
                </div>
                <div>Express</div>
                <div>
                    <img src={sql} alt="" />
                    <span>SQL</span>
                </div>
                <div>
                    <Icon name="git"></Icon>
                    <span>Git</span>
                </div>
                <div>Redux</div>
                <div>
                    <Icon name="sass"></Icon>
                    <span>Sass</span>
                </div>
                <div>...</div>
            </div>
        </header>
    );
}

export default Hero;
