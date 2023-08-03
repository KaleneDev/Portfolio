import React from "react";
import WorkLayout from "../../layouts/WorkLayout";
import Kanap_01 from "../../assets/works/Kanap_01.jpg";
import {
    ZoomOut,
    SlideInFromLeft,
    SlideInFromRight,
} from "../../utils/Animations/AnimationText";

function Kanap() {
    return (
        <div className="stack gap-15">
            <WorkLayout
                title="Kanap"
                description="Application de gestion de stock de canapés."
                details="Node HTML&CSS JavaScript-Vanilla"
            >
                <main className="container works">
                    <div className="stack wrapper gap-10">
                        <div className="image">
                            <a
                                target="_blank"
                                href="https://github.com/KaleneDev/P5_Web_kanap"
                            >
                                <ZoomOut scale={0.8}>
                                    <img src={Kanap_01} alt="Kanap_01" />
                                </ZoomOut>
                            </a>
                        </div>
                        <div className="stack gap-4">
                            <SlideInFromLeft duration={1.5} transform={10}>
                                <div className="stack">
                                    <h1 className="title">Kanap</h1>
                                    <hr />

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
                                        L'application est réalisée en full
                                        JavaScript Vanilla.
                                    </p>
                                    <p>
                                        Vous pouvez retrouver le code source de
                                        l'application sur mon{" "}
                                        <a
                                            target="_blank"
                                            href="https://github.com/KaleneDev/P5_Web_kanap"
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
                                            Pour exécuter le projet Kanap
                                            localement, procédez comme suit :
                                        </p>
                                        <div className="stack gap-2">
                                            <ol>
                                                1. Cloner le dépôt : git clone{" "}
                                                <span className="style">
                                                    git clone
                                                    https://github.com/KaleneDev/P5_Web_kanap
                                                </span>{" "}
                                            </ol>
                                            <ol>
                                                2. Accédez au répertoire du
                                                projet :{" "}
                                                <span className="style">
                                                    cd Kanap/backend
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
                                                5. Ouvrir le fichier{" "}
                                                <span className="style">
                                                    index.html
                                                </span>
                                                .
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
                                                <li>HTML5 & CSS3</li>
                                                <li>JavaScript</li>
                                            </div>
                                            <h3>Back-end</h3>
                                            <div className="stack gap-2">
                                                <li>Node</li>
                                                <li>Express</li>
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
                                                Voir le GitHub :{" "}
                                                <a
                                                    href="https://github.com/KaleneDev/P5_Web_kanap"
                                                    target="_blank"
                                                >
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

export default Kanap;
