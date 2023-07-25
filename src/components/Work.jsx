import React from "react";
import "./Work.scss";
import { Link } from "react-router-dom";
import project1 from "../assets/project/stock-1.jpg";
import project2 from "../assets/project/stock-2.jpg";
import project3 from "../assets/project/stock-3.jpg";
import project4 from "../assets/project/stock-4.jpg";
import Icon from "./IconT.jsx";
function work() {
    return (
        <section className="wrapper section work">
            <header className="section-header stack">
                <h3>Projet selectionné</h3>
                <p>
                    Jetez un œil ci-dessous à certains de mes travaux présentés
                    pour des clients au cours des dernières années.
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
                            <span className="title">Social Network</span>
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
            <div className="button-view-all">
                <Link to="/work">Tout voir <Icon name="arrow-right"/></Link>
            </div>
        </section>
    );
}

export default work;
