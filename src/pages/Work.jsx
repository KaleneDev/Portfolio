import React from "react";
import BaseLayout from "../layouts/BaseLayout";
import { Link } from "react-router-dom";
import project1 from "../assets/project/stock-1.jpg";
import project2 from "../assets/project/stock-2.jpg";
import project3 from "../assets/project/stock-3.jpg";
import project4 from "../assets/project/stock-4.jpg";
import Icon from "../components/IconT.jsx";
import Contact from "../components/Contact";

import "../styles/pages/Work.scss";
function Work() {
    return (
        <BaseLayout title="Kalène A PIOU: Travaux" description="Mes Travaux">
            <main className=" stack gap-20 lg:gap-48 wrapper">
                <section className="wrapper stack section work pageWork gap-15">
                    <header className="section-header stack">
                        <h3>Tout mes Projets</h3>
                        <p>
                            Jetez un œil ci-dessous à certains de mes travaux
                            présentés pour des clients au cours des dernières
                            années.
                        </p>
                    </header>
                    <div className="gallery">
                        <ul className="grid">
                            <li>
                                <Link
                                    className="card"
                                    to="/work/DiscoverMostSuitableProperty"
                                >
                                    <span className="title">
                                        Discover Most Suitable Property
                                    </span>
                                    <img src={project1} alt="" />
                                </Link>
                            </li>
                            <li>
                                <Link className="card" to="/work/GymWebsite">
                                    <span className="title">Gym Website</span>
                                    <img src={project2} alt="" />
                                </Link>
                            </li>
                            <li>
                                <Link className="card" to="/work/SocialNetwork">
                                    <span className="title">
                                        Social Network
                                    </span>
                                    <img src={project3} alt="" />
                                </Link>
                            </li>
                            <li>
                                <Link className="card" to="/work/Slider">
                                    <span className="title">Slider</span>
                                    <img src={project4} alt="" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/* <div className="button-view-all">
                        <Link to="/work">
                            Me contacter <Icon name="send-plane-line" />
                        </Link>
                    </div> */}
                </section>
                <Contact />
            </main>
        </BaseLayout>
    );
}

export default Work;
