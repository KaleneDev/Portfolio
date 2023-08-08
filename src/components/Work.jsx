import React from "react";
import "./Work.scss";
import { Link } from "react-router-dom";
import project1 from "../assets/project/stock-1.jpg";
import project2 from "../assets/project/stock-2.jpg";
import project3 from "../assets/project/stock-3.jpg";
import project4 from "../assets/project/stock-4.jpg";
import Icon from "./IconT.jsx";
import {
    SlideInFromRight,
    SlideInFromLeft,
    SlideInFromTop,
    SlideInFromBot,
    ZoomOut,
} from "../utils/Animations/AnimationText";
function work() {
    return (
        <section className="wrapper section work">
            <SlideInFromTop>
                <header className="section-header stack">
                    <h3>Projet selectionné</h3>
                    <p>
                        Jetez un œil ci-dessous à certains de mes travaux
                        présentés pour des clients au cours des dernières
                        années.
                    </p>
                </header>
            </SlideInFromTop>
            <div className="gallery">
                <ul className="grid">
                    <ZoomOut scale={0.8}>
                        <li>
                            <Link
                                className="card"
                                to="/work/discovermostsuitableproperty"
                            >
                                <div className="top">
                                    <span className="title">
                                        Discover Most Suitable Property
                                    </span>
                                </div>
                                <div className="role">
                                    <div className="dev">
                                        <span className="frontend">
                                            Frontend
                                        </span>
                                    </div>
                                </div>
                                <img src={project1} alt="" />
                            </Link>
                        </li>
                    </ZoomOut>
                    <ZoomOut scale={0.8} delay={0.4}>
                        <li>
                            <Link className="card" to="/work/gymwebsite">
                                <div className="top">
                                    <span className="title">Gym Website</span>
                                </div>
                                <div className="role">
                                    <div className="dev">
                                        <span className="frontend">
                                            Frontend
                                        </span>
                                    </div>
                                </div>
                                <img src={project2} alt="" />
                            </Link>
                        </li>
                    </ZoomOut>
                    <ZoomOut scale={0.8} delay={0.2}>
                        <li>
                            <Link className="card" to="/work/socialnetwork">
                                <div className="top">
                                    <span className="title">
                                        Social Network
                                    </span>
                                    <span className="work-in-progress">
                                        En cours de développement
                                    </span>
                                </div>
                                <div className="role">
                                    <div className="dev">
                                        <span className="frontend">
                                            Frontend
                                        </span>
                                        <span className="backend">Backend</span>
                                    </div>
                                    <div className="tech">
                                        <span>React</span>
                                        <span>Node JS</span>
                                    </div>
                                </div>
                                <img src={project3} alt="" />
                            </Link>
                        </li>
                    </ZoomOut>
                    <ZoomOut scale={0.8}>
                        <li>
                            <Link className="card" to="/work/immobilier">
                                <div className="top">
                                    <span className="title">Immobilier</span>
                                    <span className="work-in-progress">
                                        En cours de développement
                                    </span>
                                </div>
                                <div className="role">
                                    <div className="dev">
                                        <span className="frontend">
                                            Frontend
                                        </span>
                                        <span className="backend">Backend</span>
                                    </div>
                                    <div className="tech">
                                        <span>WordPress</span>
                                    </div>
                                </div>
                                <img src={project4} alt="" />
                            </Link>
                        </li>
                    </ZoomOut>
                </ul>
            </div>
            <div className="button-view-all">
                <SlideInFromRight>
                    <Link to="/work">
                        Tout voir <Icon name="arrow-right" />
                    </Link>
                </SlideInFromRight>
            </div>
        </section>
    );
}

export default work;
