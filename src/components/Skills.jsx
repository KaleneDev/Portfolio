import React from "react";
import Icon from "./IconT.jsx";
import "./Skills.scss";
function Skills() {
    return (
        <section className="skills">
            <div className="stack gap-2">
                <Icon name="terminal-window" />
                <h2>Full Stack</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod.
                </p>
            </div>
            <div className="stack gap-2">
                <Icon name="terminal-window" />
                <h2>Chef de file de l'industrie</h2>
                <p>
                    Neque viverra justo nec ultrices dui. Est ultricies entier
                    quis auctor elit.
                </p>
            </div>
            <div className="stack gap-2">
                <Icon name="terminal-window" />
                <h2>Esprit stratégique</h2>
                <p>
                    Urna porttitor rhoncus dolor purus non enim praesent ornare.
                </p>
            </div>
        </section>
    );
}

export default Skills;
