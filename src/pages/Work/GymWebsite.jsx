import React from "react";
import WorkLayout from "../../layouts/WorkLayout";
import Gym_Website_01 from "../../assets/works/Gym_Website_01.png";
import {
    ZoomOut,
    SlideInFromLeft,
    SlideInFromRight,
} from "../../utils/Animations/AnimationText";
function GymWebsite() {
    return (
        <div className="stack gap-15">
            <WorkLayout
                title="Gym Website"
                description="Gym_Website est un site Web réactif et dynamique dédié à une salle de fitness. Il présente les installations, services, cours et entraîneurs disponibles. Ce référentiel contient tous les fichiers et le code nécessaires pour le configurer."
                details="React.js HTML&CSS JavaScript"
            >
                <main className="container works">
                    <div className="stack wrapper gap-10">
                        <div className="image">
                            <ZoomOut scale={0.8}>
                                <a
                                    target="_blank"
                                    href="https://gym-web-site-v1.netlify.app/"
                                >
                                    <img
                                        src={Gym_Website_01}
                                        alt="Gym_Website"
                                    />
                                </a>
                            </ZoomOut>
                        </div>
                        <div className="stack gap-4">
                            <SlideInFromLeft duration={1.5} transform={10}>
                                <div className="stack">
                                    <h1 className="title">Gym Site Web</h1>
                                    <hr />
                                    <p>
                                        Gym_Website est un site Web réactif et
                                        dynamique pour une salle de fitness. Il
                                        fournit des informations sur les
                                        installations, les services, les cours
                                        et les entraîneurs de la salle de sport.
                                        Ce référentiel contient tous les
                                        fichiers et le code nécessaires pour
                                        configurer le site Web.
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
                                            href="https://github.com/KaleneDev/Gym_Website"
                                        >
                                            Github
                                        </a>
                                        .
                                    </p>
                                </div>
                            </SlideInFromLeft>
                            <SlideInFromRight duration={1.5} transform={10}>
                                <div className="stack">
                                    <h1 className="title">Installation</h1>
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
                                                    https://github.com/KaleneDev/Gym_Website.git
                                                </span>{" "}
                                            </ol>
                                            <ol>
                                                2. Accédez au répertoire du
                                                projet :{" "}
                                                <span className="style">
                                                    cd Gym Website
                                                </span>{" "}
                                            </ol>
                                            <ol>
                                                3. Installez les dépendances
                                                nécessaires :{" "}
                                                <span className="style">
                                                    npm install
                                                </span>{" "}
                                            </ol>
                                            <ol>
                                                4. Personnalisez les fichiers de
                                                configuration du projet, si
                                                nécessaire.
                                            </ol>
                                            <ol>
                                                5. Démarrez le serveur de
                                                développement : npm start
                                                accédez au projet dans votre
                                                navigateur sur :{" "}
                                                <span className="style">
                                                    http://localhost:3000
                                                </span>{" "}
                                                ou sur le port spécifié.
                                            </ol>
                                            <ol>
                                                7. Build le siteWeb:{" "}
                                                <span className="style">
                                                    npm run build
                                                </span>{" "}
                                            </ol>
                                            <ol>
                                                8. Déployez les fichiers
                                                construits sur un serveur Web ou
                                                un service d'hébergement de
                                                votre choix.
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </SlideInFromRight>
                            <SlideInFromLeft duration={1.5} transform={10}>
                                <div className="stack">
                                    <h1 className="title">
                                        Technologies utilisées
                                    </h1>
                                    <hr />
                                    <div className="stack gap-4">
                                        <div className="stack gap-2">
                                            <h3>Front-end</h3>
                                            <div className="stack gap-2">
                                                <li>Vite: Frontend Tooling</li>
                                                <li>
                                                    React: JavaScript library
                                                    for building user
                                                    interfaces.
                                                </li>
                                                <li>
                                                    HTML5 and CSS3: Markup and
                                                    styling of the project.
                                                </li>
                                                <li>
                                                    JavaScript: Logic and
                                                    interactivity of the
                                                    application.
                                                </li>
                                                <li>
                                                    Webpack: Module bundler for
                                                    building the project.
                                                </li>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SlideInFromLeft>
                            <SlideInFromRight duration={1.5} transform={10}>
                                <div className="stack">
                                    <h1 className="title">Contribuant</h1>
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
                                                    href="https://gym-web-site-v1.netlify.app/"
                                                >
                                                    https://gym-web-site-v1.netlify.app/
                                                </a>
                                            </p>
                                            <p>
                                                Voir le GitHub :{" "}
                                                <a href="https://github.com/KaleneDev/Gym_Website" target="_blank">
                                                    GitHub
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SlideInFromRight>
                        </div>
                    </div>
                </main>
            </WorkLayout>
        </div>
    );
}

export default GymWebsite;
