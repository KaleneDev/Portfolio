import React from "react";
import "./Hero.scss";
import portrait from "../assets/portrait_01.jpeg";
function Hero() {
    return (
        <header className="hero">
            <div className="hero stack gap-2">
                <h1 className="title">Bonjour, je m'appelle Kalène A PIOU</h1>
                <p className="tagline">
                    Je suis un développeur créatif actuellement basé à
                    Poligny, dans le Jura.
                </p>
            </div>
            <img className="portrait" src={portrait} alt="Kalene" />
            <div className="language">
                <div>JavaScript</div>
                <div>HTML & CSS</div>
                <div>React</div>
                <div>Node.js</div>
                <div>Express</div>
                <div>SQL</div>
                <div>Git</div>
                <div>Redux</div>
                <div>Sass</div>
                <div>...</div>
            </div>
        </header>
    );
}

export default Hero;
