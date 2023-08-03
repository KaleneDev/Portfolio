import React from "react";
import WorkLayout from "../../layouts/WorkLayout";
import Discover_Most_Suitable_Property_01 from "../../assets/works/Discover_Most_Suitable_Property_01.jpg";
import {
    ZoomOut,
    SlideInFromLeft,
    SlideInFromRight,
} from "../../utils/Animations/AnimationText";
function DiscoverMostSuitableProperty() {
    return (
        <div className="stack gap-15">
            <WorkLayout
                title="Discover Most Suitable Property"
                description="

                Discover Most Suitable Property est une plateforme pour trouver la propriété idéale en comparant les caractéristiques des biens immobiliers, permettant ainsi de prendre des décisions éclairées selon les besoins et préférences des utilisateurs."
                details="React.js HTML&CSS JavaScript Vite"
            >
                <main className="container works">
                    <div className="stack wrapper gap-10">
                        <div className="image">
                            <ZoomOut scale={0.8}>
                                <a
                                    target="_blank"
                                    href="https://discover-most-suitable-property.netlify.app/"
                                >
                                    <img
                                        src={Discover_Most_Suitable_Property_01}
                                        alt="Discover_Most_Suitable_Property"
                                    />
                                </a>
                            </ZoomOut>
                        </div>
                        <div className="stack gap-4">
                            <SlideInFromLeft duration={1.5} transform={10}>
                                <div className="stack">
                                    <h1 className="title">
                                        Discover Most Suitable Property
                                    </h1>
                                    <hr />
                                    <p>
                                        Discover Most Suitable Property est une
                                        application web qui permet de trouver le
                                        bien immobilier qui correspond le mieux
                                        à vos critères.
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
                                            href="https://github.com/KaleneDev/Discover_Most_Suitable_Property"
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
                                            Pour exécuter le projet
                                            Discover_Most_Suitable_Property
                                            localement, procédez comme suit :
                                        </p>
                                        <div className="stack gap-2">
                                            <ol>
                                                1. Cloner le dépôt : git clone{" "}
                                                <span className="style">
                                                    https://github.com/KaleneDev/Discover_Most_Suitable_Property.git
                                                </span>{" "}
                                            </ol>
                                            <ol>
                                                2. Accédez au répertoire du
                                                projet :{" "}
                                                <span className="style">
                                                    cd
                                                    Discover_Most_Suitable_Property
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
                                                développement :{" "}
                                                <span className="style">
                                                    npm start
                                                </span>{" "}
                                                accédez au projet dans votre
                                                navigateur sur{" "}
                                                <span className="style">
                                                    http://localhost:3000
                                                </span>{" "}
                                                ou sur le port spécifié.
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
                                                    href="https://discover-most-suitable-property.netlify.app/"
                                                >
                                                    https://discover-most-suitable-property.netlify.app/
                                                </a>
                                            </p>
                                            <p>
                                                Voir le GitHub :{" "}
                                                <a href="https://github.com/KaleneDev/Discover_Most_Suitable_Property" target="_blank">
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

export default DiscoverMostSuitableProperty;
