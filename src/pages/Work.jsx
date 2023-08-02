import React from "react";
import BaseLayout from "../layouts/BaseLayout";
import { Link } from "react-router-dom";
import project1 from "../assets/project/stock-1.jpg";
import project2 from "../assets/project/stock-2.jpg";
import project3 from "../assets/project/stock-3.jpg";
import project4 from "../assets/project/stock-4.jpg";
import Contact from "../components/Contact";
import {
    SlideInFromTop,
    SlideInFromBot,
    ZoomOut,
} from "../utils/Animations/AnimationText";
import "../styles/pages/Work.scss";
function Work() {
    return (
        <BaseLayout title="Kalène A PIOU: Travaux" description="Mes Travaux">
            <div className="stack gap-20 lg:gap-48">
                <main className=" stack  wrapper">
                    <section className="wrapper stack section work pageWork gap-15">
                        <header className="section-header stack">
                            <SlideInFromTop duration={1.5}>
                                <h3>Tout mes Projets</h3>
                            </SlideInFromTop>
                            <SlideInFromBot duration={1.5}>
                                <p>
                                    Jetez un œil ci-dessous à certains de mes
                                    travaux présentés pour des clients au cours
                                    des dernières années.
                                </p>
                            </SlideInFromBot>
                        </header>
                        <div className="gallery">
                        <ul className="grid">
                    <ZoomOut scale={0.8}>
                        <li>
                            <Link
                                className="card"
                                to="/work/discovermostsuitableproperty"
                            >
                                <span className="title">
                                    Discover Most Suitable Property
                                </span>
                                <img src={project1} alt="" />
                            </Link>
                        </li>
                    </ZoomOut>
                    <ZoomOut scale={0.8} delay={0.1}>
                        <li>
                            <Link className="card" to="/work/gymwebsite">
                                <span className="title">Gym Website</span>
                                <img src={project2} alt="" />
                            </Link>
                        </li>
                    </ZoomOut>
                    <ZoomOut scale={0.8} delay={0.2}>
                        <li>
                            <Link className="card" to="/work/socialnetwork">
                                <span className="title">Social Network</span>
                                <img src={project3} alt="" />
                            </Link>
                        </li>
                    </ZoomOut>
                    <ZoomOut scale={0.8}delay={0.3}>
                        <li>
                            <Link className="card" to="/work/slider">
                                <span className="title">Slider</span>
                                <img src={project4} alt="" />
                            </Link>
                        </li>
                    </ZoomOut>
                    <ZoomOut scale={0.8} delay={0.4}>
                        <li>
                            <Link className="card" to="/work/portfolio">
                                <span className="title">Portfolio</span>
                                <img src={project4} alt="" />
                            </Link>
                        </li>
                    </ZoomOut>
                </ul>
                        </div>
                        {/* <div className="button-view-all">
                        <Link to="/work">
                            Me contacter <Icon name="send-plane-line" />
                        </Link>
                    </div> */}
                    </section>
                </main>
                <Contact />
            </div>
        </BaseLayout>
    );
}

export default Work;
