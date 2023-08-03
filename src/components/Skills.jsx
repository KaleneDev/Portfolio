import React from "react";
import Icon from "./IconT.jsx";
import "./Skills.scss";
import {
    SlideInFromRight,
    SlideInFromLeft,
    SlideInFromBot,
    ZoomOut,
} from "../utils/Animations/AnimationText";
function Skills() {
    return (
        <ZoomOut duration={1.5}>
            <section className="skills">
                <SlideInFromLeft transform={100} duration={1.5}>
                    <div className="stack gap-2">
                        <Icon name="terminal-window" />
                        <h2>Full Stack</h2>
                        <p>
                            En tant que développeur Full Stack, je conçois et
                            développe des applications web complètes, en
                            combinant mes compétences en Front-end et Back-end
                            pour offrir des expériences utilisateur complètes
                        </p>
                    </div>
                </SlideInFromLeft>
                <SlideInFromBot transform={100} duration={1.5}>
                    <div className="stack gap-2">
                        <Icon name="terminal-window" />
                        <h2>Flexibilité et Adaptabilité</h2>
                        <p>
                            Développeur web flexible et adaptable, je propose
                            des solutions innovantes en m'adaptant rapidement
                            aux nouvelles technologies. Collaboration aisée avec
                            des équipes multidisciplinaires et réponses adaptées
                            aux projets spécifiques.
                        </p>
                    </div>
                </SlideInFromBot>
                <SlideInFromRight transform={100} duration={1.5}>
                    <div className="stack gap-2">
                        <Icon name="terminal-window" />
                        <h2>Autodidacte</h2>
                        <p>
                            En tant que développeur web autodidacte, j'ai acquis
                            une expertise polyvalente en apprenant par moi-même,
                            ce qui me permet d'aborder les défis avec créativité
                            et adaptabilité.
                        </p>
                    </div>
                </SlideInFromRight>
            </section>
        </ZoomOut>
    );
}

export default Skills;
