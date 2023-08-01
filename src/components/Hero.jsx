import React from "react";
import "./Hero.scss";
import portrait from "../assets/portrait_02.jpg";
import sql from "../assets/logos/sql.png";
import cv from "../assets/CV_2023-05-17_Kalène_A PIOU (Développeur Web).pdf";
import Icon from "./IconT.jsx";
import {
    SlideInFromRight,
    SlideInFromLeft,
    SlideInFromTop,
    SlideInFromBot,
    ZoomOut,
} from "../utils/Animations/AnimationText";
function Hero() {
    const iconLinks = [
        {
            label: "Twitter",
            href: "https://twitter.com/Kalene777",
            icon: "twitter-logo",
        },
        {
            label: "GitHub",
            href: "https://github.com/KaleneDev",
            icon: "github-logo",
        },
        {
            label: "Linkedin",
            href: "https://www.linkedin.com/in/kal%C3%A8ne-a-piou-8ba68826a/",
            icon: "linkedin-logo",
        },
    ];
    return (
        <header className="hero gap-8 lg:gap-20">
            <div className="profile">
                <SlideInFromTop>
                    <div className="hero stack gap-4 lg:gap-4">
                        <SlideInFromRight transform={50} duration={1.5}>
                            <h2 className="title">Bonjour, mon nom</h2>
                        </SlideInFromRight>
        
                        <h1> Kalène APIOU</h1>
                        <SlideInFromLeft transform={50} duration={1.5}>
                            <h2>Et je suis développeur Frontend</h2>
                        </SlideInFromLeft>
                        <p className="tagline">
                            Je suis actuellement basé à Poligny, dans le Jura.
                        </p>
                        <div className="socials">
                            {iconLinks.map(({ href, icon, label }, i) => (
                                <a
                                    key={i}
                                    className="social"
                                    target="_blank"
                                    href={href}
                                >
                                    <span className="sr-only">{label}</span>
                                    <Icon name={icon} />
                                </a>
                            ))}
                        </div>
                        <div className="container-cv">
                            <a className="button cv" href={cv} target="_blank">
                                Télécharger CV <Icon name="arrow-right" />
                            </a>
                        </div>
                    </div>
                </SlideInFromTop>
                <SlideInFromBot transform={50} scroll="on">
                    <div className="container-portrait">
                        <img className="portrait" src={portrait} alt="Kalene" />
                    </div>
                </SlideInFromBot>
            </div>
            <div className="language">
                <ZoomOut delay={0.2} scroll="on">
                    <div className="tagline">
                        <Icon name="javaScript"></Icon>
                        <span> JavaScript</span>
                    </div>
                </ZoomOut>
                <ZoomOut delay={0.5} scroll="on">
                    <div className="tagline">
                        <Icon name="HTML"></Icon>
                        <span> HTML & CSS</span>
                    </div>
                </ZoomOut>
                <ZoomOut scroll="on">
                    <div className="tagline">
                        <Icon name="react"></Icon>
                        <span>React</span>
                    </div>
                </ZoomOut>
                <ZoomOut delay={0.3} scroll="on">
                    <div className="tagline">
                        <Icon name="nodeJs"></Icon>
                        <span> Node.js</span>
                    </div>
                </ZoomOut>

                <ZoomOut delay={0.2} scroll="on">
                    <div className="tagline">Express</div>
                </ZoomOut>

                <ZoomOut delay={0.4} scroll="on">
                    <div className="tagline">
                        <img src={sql} alt="" />
                        <span>SQL</span>
                    </div>
                </ZoomOut>
                <ZoomOut scroll="on">
                    <div className="tagline">
                        <Icon name="git"></Icon>
                        <span>Git</span>
                    </div>
                </ZoomOut>
                <ZoomOut delay={0.3} scroll="on"> 
                    <div className="tagline">Redux</div>
                </ZoomOut>
                <ZoomOut scroll="on">
                    <div className="tagline">
                        <Icon name="sass"></Icon>
                        <span>Sass</span>
                    </div>
                </ZoomOut >
                <ZoomOut delay={0.5} scroll="on">
                    <div className="tagline">...</div>
                </ZoomOut>
            </div>
        </header>
    );
}

export default Hero;
