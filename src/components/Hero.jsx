import React from "react";
import "./Hero.scss";
import portrait from "../assets/portrait_02.jpg";
import sql from "../assets/logos/sql.png";
import Icon from "./IconT.jsx";
function Hero() {
    return (
        <header className="hero">
            <div className="profile">
                <div className="hero stack gap-2 lg:gap-4">
                    <h1 className="title">
                        Bonjour, je m'appelle Kalène A PIOU
                    </h1>
                    <p className="tagline">
                        Je suis un développeur créatif actuellement basé à
                        Poligny, dans le Jura.
                    </p>
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
