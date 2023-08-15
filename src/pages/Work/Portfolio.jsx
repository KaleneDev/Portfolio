import React from "react";
import WorkLayout from "../../layouts/WorkLayout";
import Portfolio_01 from "../../assets/works/Portfolio_01.jpg";
import {
    ZoomOut,
    SlideInFromLeft,
    SlideInFromRight,
} from "../../utils/Animations/AnimationText";
function Portfolio() {
    return (
        <div className="stack gap-15">
            <WorkLayout
                title="Portfolio"
                description="Ce projet est mon portfolio personnel développé avec React JS pour la partie front-end et des animations JavaScript pour améliorer l'expérience utilisateur. Il présente mes compétences, projets et informations de contact."
                details="React.js HTML&CSS JavaScript Vite"
            >
                <main className="container works">
                    <div className="stack wrapper gap-10">
                        <div className="image">
                            <a
                                target="_blank"
                                href="https://www.kalene-apiou.com/"
                            >
                                {/* <ZoomOut scale={0.8}> */}
                                    <img
                                        src={Portfolio_01}
                                        alt="Portfolio_01"
                                    />
                                {/* </ZoomOut> */}
                            </a>
                        </div>
                        <div className="stack gap-4">
                            <SlideInFromLeft duration={1.5} transform={10}>
                                <div className="stack">
                                    <h1 className="title">
                                        Portfolio personnel avec React JS et
                                        animations JavaScript
                                    </h1>
                                    <hr />
                                    <p>
                                        Ce projet est mon portfolio personnel
                                        développé avec React JS pour la partie
                                        front-end et des animations JavaScript
                                        pour améliorer l'expérience utilisateur.
                                        Il présente mes compétences, projets et
                                        informations de contact.
                                    </p>
                                    <p>
                                        Cette application a été réalisée dans le
                                        cadre d'un projet de fin de formation.
                                    </p>
                                    <p>
                                        J'ai travaillé seule sur ce projet. J'ai
                                        réalisé la partie front-end de
                                        l'application.
                                    </p>
                                    <p>
                                        L'application est réalisée en React.js
                                    </p>
                                    <p>
                                        Vous pouvez retrouver le code source de
                                        l'application sur mon{" "}
                                        <a
                                            target="_blank"
                                            href="https://github.com/KaleneDev/Gym"
                                        >
                                            Github
                                        </a>
                                        .
                                    </p>
                                </div>
                            </SlideInFromLeft>

                            <SlideInFromRight duration={1.5} transform={10}>
                                <div className="stack">
                                    <h2>Fonctionnalités</h2>
                                    <hr />
                                    <div className="stack gap-4">
                                        <div className="stack gap-2">
                                            <p>
                                                - Page d'accueil avec une
                                                présentation personnelle et un
                                                aperçu de mes compétences.
                                            </p>
                                            <p>
                                                - Section de projets avec des
                                                détails sur certains de mes
                                                projets réalisés.
                                            </p>
                                            <p>
                                                - Formulaire de contact pour me
                                                contacter directement depuis le
                                                site.
                                            </p>
                                            <p>
                                                - Animations interactives pour
                                                dynamiser l'expérience
                                                utilisateur.
                                            </p>
                                            <p>
                                                - Responsive design pour une
                                                expérience optimale sur
                                                différents appareils.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SlideInFromRight>

                            <SlideInFromLeft duration={1.5} transform={10}>
                                <div className="stack">
                                    <h2>Technologies utilisées</h2>
                                    <hr />
                                    <div className="stack gap-4">
                                        <div className="stack gap-2">
                                            <h3>Front-end</h3>
                                            <div className="stack gap-2">
                                                <li>Vite: Frontend Tooling</li>
                                                <li>JavaScript (ES6+)</li>
                                                <li>HTML5</li>
                                                <li>CSS3</li>
                                                <li>
                                                    Animation JavaScript (full
                                                    vanilla Javascript)
                                                </li>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SlideInFromLeft>

                            <SlideInFromRight duration={1.5} transform={10}>
                                <div className="stack">
                                    <h2>Prérequis</h2>
                                    <hr />
                                    <div className="stack gap-4">
                                        <div className="stack gap-2">
                                            <div className="stack gap-2">
                                                <li>
                                                    Node.js et npm doivent être
                                                    installés sur votre machine.
                                                </li>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SlideInFromRight>

                            <SlideInFromLeft duration={1.5} transform={10}>
                                <div className="stack">
                                    <h2>Installation</h2>
                                    <hr />
                                    <div className="stack gap-4">
                                        <p>
                                            Pour exécuter le projet Gym
                                            localement, procédez comme suit :
                                        </p>
                                        <div className="stack gap-2">
                                            <ol>
                                                1. Cloner le dépôt : git clone{" "}
                                                <span className="style">
                                                    git clone
                                                    https://github.com/KaleneDev/Portfolio.git
                                                </span>{" "}
                                            </ol>
                                            <ol>
                                                2. Accédez au répertoire du
                                                projet :{" "}
                                                <span className="style">
                                                    cd portfolio
                                                </span>{" "}
                                            </ol>
                                            <ol>
                                                3. Installez les dépendances
                                                nécessaires :{" "}
                                                <span className="style">
                                                    npm install
                                                </span>{" "}
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </SlideInFromLeft>

                            <SlideInFromRight duration={1.5} transform={10}>
                                <div className="stack">
                                    <h2>Installation</h2>
                                    <hr />
                                    <div className="stack gap-4">
                                        <p>
                                            Pour exécuter le projet Gym
                                            localement, procédez comme suit :
                                        </p>
                                        <div className="stack gap-2">
                                            <ol>
                                                1. Lancez l'application en mode
                                                déveveloppement :
                                                <span className="style">
                                                    npm run dev
                                                </span>{" "}
                                            </ol>
                                            <ol>
                                                2. Ouvrez votre navigateur et
                                                accédez à l'URL suivante :
                                                <span className="style">
                                                    http://localhost:5173/
                                                </span>{" "}
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </SlideInFromRight>

                            <SlideInFromLeft duration={1.5} transform={10}>
                                <div className="stack">
                                    <h2>Contribuant</h2>
                                    <hr />
                                    <div className="stack gap-4">
                                        <div className="stack gap-2">
                                            <p>
                                                Contact Si vous avez des
                                                questions ou avez besoin d'aide
                                                supplémentaire, n'hésitez pas à
                                                nous contacter à{" "}
                                                <a
                                                    target="_blank"
                                                    href="mailto:apiou.kalene@gmail.com"
                                                >
                                                    apiou.kalene@gmail.com
                                                </a>
                                                .
                                            </p>

                                            <p>
                                                Voir le site :{" "}
                                                <a
                                                    target="_blank"
                                                    href="https://www.kalene-apiou.com/"
                                                >
                                                    https://porfoliokalene.netlify.app
                                                </a>
                                            </p>
                                            <p>
                                                Voir le GitHub :{" "}
                                                <a
                                                    href="https://github.com/KaleneDev/Portfolio"
                                                    target="_blank"
                                                >
                                                    GitHub
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SlideInFromLeft>
                        </div>
                    </div>
                </main>
            </WorkLayout>
        </div>
    );
}

export default Portfolio;
