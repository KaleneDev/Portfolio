import React from "react";
import BaseLayout from "../layouts/BaseLayout";
import Contact from "../components/Contact";
import "../styles/pages/About.scss";
import {
    SlideInFromTop,
    SlideInFromBot,
    ZoomOut,
} from "../utils/Animations/AnimationText";
function About() {
    return (
        <BaseLayout title="À Propos de Moi" description="À Propos de Moi">
            <main className="container about">
                <div className="stack wrapper gap-2">
                    <SlideInFromTop duration={1.5}>
                        <div>
                            <h1 className="title">À Propos de Moi</h1>
                            <p>
                                Salut! Je suis un jeune développeur de 26 ans
                                passionné par le monde de la programmation et
                                des technologies. Mon expertise se situe
                                principalement dans le domaine du développement
                                frontend, mais je possède également des
                                compétences solides en backend. Permettez-moi de
                                vous en dire un peu plus sur moi et mon
                                parcours.
                            </p>
                        </div>
                    </SlideInFromTop>
                    <SlideInFromTop duration={1.5}>
                        <div>
                            <h2>Mon Parcours</h2>
                            <p>
                                J'ai commencé mon voyage dans le développement
                                web il y a quelques années et depuis, je suis
                                tombé amoureux de la création d'interfaces
                                utilisateur interactives et dynamiques. Mon
                                bagage de compétences comprend les technologies
                                clés du développement frontend, telles que:
                            </p>
                            <li>
                                <strong>React JS:</strong> J'ai une solide
                                maîtrise de React JS, le framework JavaScript de
                                premier plan pour la construction d'interfaces
                                utilisateur réactives. J'ai développé diverses
                                applications web et applications mobiles en
                                utilisant React.
                            </li>
                            <li>
                                <strong>Vite:</strong> J'utilise Vite pour
                                bénéficier d'un développement frontend
                                ultra-rapide. Cette approche basée sur les ESM
                                (ECMAScript Modules) me permet de tirer
                                pleinement parti des performances de pointe de
                                JavaScript.
                            </li>
                            <li>
                                <strong>HTML & CSS:</strong> Je suis à l'aise
                                avec les langages de balisage HTML et les
                                feuilles de style CSS, ce qui me permet de créer
                                des mises en page élégantes et responsives.
                            </li>
                            <li>
                                <strong>JavaScript:</strong> JavaScript est
                                l'âme de mes projets frontend. Je le manipule
                                avec agilité pour créer des fonctionnalités
                                interactives et conviviales.
                            </li>
                        </div>
                    </SlideInFromTop>
                    <SlideInFromTop duration={1.5}>
                        <div>
                            <h2>Compétences en Backend</h2>
                            <p>
                                Outre mon expertise frontend, j'ai également des
                                compétences en backend, notamment avec{" "}
                                <strong>Node.js</strong> . Cette technologie
                                côté serveur m'a permis de créer des
                                applications web complètes et d'établir des
                                connexions entre le frontend et le backend.
                            </p>
                        </div>
                    </SlideInFromTop>
                    <SlideInFromTop duration={1.5}>
                        <div>
                            <h2>Mes Projets</h2>
                            <p>
                                Au fil du temps, j'ai travaillé sur divers
                                projets personnels et collaboratifs qui m'ont
                                permis d'acquérir une compréhension approfondie
                                des meilleures pratiques de développement et de
                                la résolution de problèmes. Je suis toujours à
                                la recherche de nouveaux défis et de projets
                                passionnants pour continuer à évoluer en tant
                                que développeur.
                            </p>
                        </div>
                    </SlideInFromTop>
                    <SlideInFromTop duration={1.5}>
                        <div>
                            <h2>Me Contacter</h2>
                            <p>
                                Je suis ouvert aux opportunités
                                professionnelles, aux projets intéressants et
                                aux collaborations enrichissantes. Si vous
                                souhaitez en savoir plus sur mon travail ou
                                discuter de possibilités de collaboration,
                                n'hésitez pas à me contacter.
                            </p>
                            <li>
                                Email:{" "}
                                <a
                                    href="mailto:apiou.kalene@gmail.com"
                                    target="_blank"
                                >
                                    apiou.kalene@gmail.com
                                </a>
                            </li>
                            <li>
                                GitHub:{" "}
                                <a
                                    href="https://github.com/KaleneDev"
                                    target="_blank"
                                >
                                    https://github.com/KaleneDev
                                </a>
                            </li>
                            <li>
                                LinkedIn:{" "}
                                <a
                                    href="https://www.linkedin.com/in/kal%C3%A8ne-a-piou-8ba68826a/"
                                    target="_blank"
                                >
                                    https://www.linkedin.com/in/kal%C3%A8ne-a-piou-8ba68826a/
                                </a>
                            </li>
                        </div>
                    </SlideInFromTop>
                </div>
            </main>
            <Contact />
        </BaseLayout>
    );
}

export default About;
