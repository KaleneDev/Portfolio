import React from "react";
import WorkLayout from "../../layouts/WorkLayout";
import SocialnNetwork_01 from "../../assets/works/SocialnNetwork_01.jpg";
import {
    ZoomOut,
    SlideInFromLeft,
    SlideInFromRight,
} from "../../utils/Animations/AnimationText";
function SocialNetwork() {
    return (
        <div className="stack gap-15">
            <WorkLayout
                title="Social Network"
                description="Le projet 'Social Network' est une application de réseau social permettant aux utilisateurs de se connecter, partager du contenu et interagir entre eux. Cette plateforme vise à fournir une expérience conviviale et sécurisée pour établir des liens avec amis, familles et connaissances."
                details="Vite React HTML&CSS JavaScript Node.js MySQL Sequelize TypeScript"
            >
                <main className="container works">
                    <div className="stack wrapper gap-10">
                        <div className="image">
                            <a
                                target="_blank"
                                href="https://www.socialnetwork.kalene-apiou.com/"
                            >
                                <ZoomOut scale={0.8}>
                                    <img
                                        src={SocialnNetwork_01}
                                        alt="SocialnNetwork_01"
                                    />
                                </ZoomOut>
                            </a>
                        </div>
                        <div className="stack gap-4">
                            <SlideInFromLeft duration={1.5} transform={10}>
                                <div className="stack">
                                    <h1 className="title">Social Network</h1>
                                    <hr />
                                    <p>
                                        Le projet "Social Network" est une
                                        application de réseau social conçue pour
                                        permettre aux utilisateurs de se
                                        connecter, de partager du contenu et
                                        d'interagir les uns avec les autres.
                                        Cette application vise à fournir une
                                        plateforme conviviale et sécurisée pour
                                        établir des liens, communiquer et rester
                                        connecté avec des amis, des familles et
                                        des connaissances.
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
                                        pour le front-end et Node js pour le
                                        back-end
                                    </p>
                                    <p>
                                        Vous pouvez retrouver le code source de
                                        l'application sur mon{" "}
                                        <a
                                            target="_blank"
                                            href="https://github.com/KaleneDev/Social_network"
                                        >
                                            Github
                                        </a>
                                        .
                                    </p>
                                </div>
                            </SlideInFromLeft>

                            <SlideInFromRight duration={1.5} transform={10}>
                                <div className="stack">
                                    <h1 className="title">
                                        Fonctionnalités principales
                                    </h1>
                                    <hr />
                                    <div className="stack gap-4">
                                        <div className="stack gap-2">
                                            <ol>
                                                1.{" "}
                                                <b>
                                                    Inscription et connexion des
                                                    utilisateurs:
                                                </b>{" "}
                                                Les utilisateurs peuvent créer
                                                un compte en fournissant des
                                                informations de base telles que
                                                leur nom, leur adresse e-mail et
                                                leur mot de passe. Ils peuvent
                                                ensuite se connecter à
                                                l'application à l'aide de leurs
                                                identifiants.
                                            </ol>
                                            <ol>
                                                2. <b>Profil utilisateur:</b>{" "}
                                                Chaque utilisateur dispose d'un
                                                profil personnalisé où ils
                                                peuvent ajouter des informations
                                                supplémentaires telles que leur
                                                photo de profil, leur biographie
                                                et leurs coordonnées. Les
                                                profils permettent aux
                                                utilisateurs de se présenter et
                                                de partager des détails sur
                                                eux-mêmes.
                                            </ol>
                                            <ol>
                                                3.{" "}
                                                <b>Publication de contenu:</b>{" "}
                                                Les utilisateurs peuvent publier
                                                du contenu sous forme de textes,
                                                de photos et de vidéos. Ils
                                                peuvent également ajouter des
                                                tags ou des catégories pour
                                                organiser leurs publications.
                                                Les publications peuvent être
                                                visualisées par les autres
                                                utilisateurs qui peuvent
                                                interagir en aimant, en
                                                commentant ou en partageant.
                                            </ol>
                                            <ol>
                                                4.{" "}
                                                <b>
                                                    Fonction de suivi: (En cours
                                                    de développement)
                                                </b>{" "}
                                                Les utilisateurs peuvent suivre
                                                d'autres utilisateurs pour voir
                                                leurs publications dans leur
                                                flux d'actualités. Cela permet
                                                aux utilisateurs de rester
                                                informés des activités de leurs
                                                amis, de leur famille et de
                                                leurs connaissances.
                                            </ol>
                                            <ol>
                                                5.{" "}
                                                <b>
                                                    Messagerie: (En cours de
                                                    développement)
                                                </b>{" "}
                                                Les utilisateurs peuvent envoyer
                                                des messages privés à d'autres
                                                utilisateurs. Cela facilite les
                                                conversations individuelles et
                                                confidentielles entre les
                                                utilisateurs.
                                            </ol>
                                            <ol>
                                                6.{" "}
                                                <b>
                                                    Exploration et recherche:
                                                    (En cours de développement)
                                                </b>{" "}
                                                Les utilisateurs peuvent
                                                découvrir de nouveaux
                                                utilisateurs, des publications
                                                populaires et des groupes
                                                thématiques grâce à des
                                                fonctionnalités de recherche et
                                                d'exploration. Cela encourage
                                                l'engagement communautaire et
                                                l'élargissement du réseau
                                                social. (En cours de
                                                développement)
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </SlideInFromRight>

                            <SlideInFromLeft duration={1.5} transform={10}>
                                <div className="stack">
                                    <h1 className="title">
                                        Configuration du projet
                                    </h1>
                                    <hr />
                                    <div className="stack gap-4">
                                        <div className="stack gap-2">
                                            <h3>Installation :</h3>
                                            <div className="stack gap-2">
                                                <ol>
                                                    <b>
                                                        1. Backend avec Node.js:
                                                    </b>
                                                </ol>

                                                <li>
                                                    Assurez-vous d'avoir Node.js
                                                    installé sur votre machine.
                                                </li>
                                                <li>
                                                    Naviguez jusqu'au répertoire
                                                    du backend dans votre
                                                    terminal.
                                                </li>
                                                <li>
                                                    Exécutez la commande{" "}
                                                    <span className="style">
                                                        npm install
                                                    </span>{" "}
                                                    pour installer toutes les
                                                    dépendances.
                                                </li>
                                                <li>
                                                    Créez un fichier{" "}
                                                    <span className="style">
                                                        .env
                                                    </span>{" "}
                                                    à la racine du backend et
                                                    ajoutez les variables
                                                    d'environnement nécessaires.
                                                    Consultez le fichier{" "}
                                                    <span className="style">
                                                        .env.example
                                                    </span>{" "}
                                                    pour connaître les variables
                                                    requises.
                                                </li>
                                                <br />
                                                <ol>
                                                    <b>
                                                        2. Frontend avec React:
                                                    </b>
                                                </ol>
                                                <li>
                                                    Naviguez jusqu'au répertoire
                                                    du frontend dans votre
                                                    terminal.
                                                </li>
                                                <li>
                                                    Exécutez la commande{" "}
                                                    <span className="style">
                                                        npm install
                                                    </span>{" "}
                                                    pour installer toutes les
                                                    dépendances.
                                                </li>
                                                <li>
                                                    Créez un fichier{" "}
                                                    <span className="style">
                                                        .env
                                                    </span>{" "}
                                                    à la racine du frontend et
                                                    ajoutez les variables
                                                    d'environnement nécessaires.
                                                    Consultez le fichier{" "}
                                                    <span className="style">
                                                        .env.example
                                                    </span>{" "}
                                                    pour connaître les variables
                                                    requises.
                                                </li>
                                                <br />
                                                <ol>
                                                    <b>3. Base de données:</b>
                                                </ol>
                                                <li>
                                                    Configurez votre base de
                                                    données selon les besoins du
                                                    projet. Assurez-vous
                                                    d'obtenir les informations
                                                    de connexion (hôte, nom
                                                    d'utilisateur, mot de passe,
                                                    etc.) nécessaires.
                                                </li>
                                                <br />
                                                <ol>
                                                    <b>
                                                        4. Exécution du projet:
                                                    </b>
                                                </ol>
                                                <li>
                                                    Pour démarrer le backend,
                                                    exécutez la commande{" "}
                                                    <span className="style">
                                                        npm start
                                                    </span>{" "}
                                                    ou{" "}
                                                    <span className="style">
                                                        node server.js
                                                    </span>{" "}
                                                    depuis le répertoire du
                                                    backend.
                                                </li>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SlideInFromLeft>

                            <SlideInFromRight duration={1.5} transform={10}>
                                <div className="stack">
                                    <h1 className="title">
                                        Technologies utilisées
                                    </h1>
                                    <hr />
                                    <div className="stack gap-4">
                                        <div className="stack gap-2">
                                            <h3>Front-end</h3>
                                            <div className="stack gap-2">
                                                <li>Vite : Frontend Tooling</li>
                                                <li>
                                                    React : JavaScript library
                                                    for building user
                                                    interfaces.
                                                </li>
                                                <li>
                                                    HTML5 and CSS3 : Markup and
                                                    styling of the project.
                                                </li>
                                                <li>
                                                    JavaScript : Logic and
                                                    interactivity of the
                                                    application.
                                                </li>
                                                <li>
                                                    Webpack : Module bundler for
                                                    building the project.
                                                </li>
                                                <h3>Back-end</h3>
                                                <li>Node js</li>
                                                <li>Express</li>
                                                <li>Multer</li>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SlideInFromRight>

                            <SlideInFromLeft duration={1.5} transform={10}>
                                <div className="stack">
                                    <h1 className="title">Contribuant</h1>
                                    <hr />
                                    <div className="stack gap-4">
                                        <p>
                                            {" "}
                                            Les contributions à l'application
                                            "Social Network" sont les bienvenues
                                            ! Si vous souhaitez contribuer,
                                            veuillez suivre les étapes suivantes
                                            :
                                        </p>
                                        <div className="stack gap-2">
                                            <ol>
                                                1. Fork du projet depuis le
                                                référentiel principal.
                                            </ol>
                                            <ol>
                                                2. Créez une branche pour votre
                                                contribution ({" "}
                                                <span className="style">
                                                    git checkout -b
                                                    ma-contribution
                                                </span>{" "}
                                                ).
                                            </ol>
                                            <ol>
                                                3. Effectuez les modifications
                                                ou ajouts nécessaires.
                                            </ol>
                                            <ol>
                                                4. Testez soigneusement les
                                                modifications.
                                            </ol>
                                            <ol>
                                                5. Soumettez une demande
                                                d'extraction (pull request)
                                                détaillant vos modifications.
                                                Veuillez noter que toutes les
                                                contributions sont soumises au
                                                respect du{" "}
                                                <span className="style">
                                                    Code de Conduite
                                                </span>
                                                .
                                            </ol>
                                            <br />
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
                                                    href="https://www.socialnetwork.kalene-apiou.com/"
                                                    target="_blank"
                                                >
                                                    Social Network
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SlideInFromLeft>

                            <SlideInFromRight duration={1.5} transform={10}>
                                <div className="stack">
                                    <h1 className="title">Auteurs</h1>
                                    <hr />
                                    <div className="stack gap-4">
                                        <div className="stack gap-2">
                                            <p>
                                                Kalène A PIOU{" "}
                                                <a
                                                    target="_blank"
                                                    href="mailto:apiou.kalene@gmail.com"
                                                >
                                                    apiou.kalene@gmail.com
                                                </a>
                                            </p>
                                            <p>
                                                Voir le GitHub :{" "}
                                                <a
                                                    href="https://github.com/KaleneDev/Social_network"
                                                    target="_blank"
                                                >
                                                    GitHub
                                                </a>
                                            </p>
                                            <p>
                                                Voir le projet :{" "}
                                                <a
                                                    href="https://www.socialnetwork.kalene-apiou.com/"
                                                    target="_blank"
                                                >
                                                    Social Network
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

export default SocialNetwork;
