import { useRef, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import DiscoverMostSuitableProperty from "./pages/Work/DiscoverMostSuitableProperty";
import GymWebsite from "./pages/Work/GymWebsite";
import SocialNetwork from "./pages/Work/SocialNetwork";
import Immobilier from "./pages/Work/Immobilier";
import AnimationText from "./pages/Work/AnimationText";
import Portfolio from "./pages/Work/Portfolio";
import Kanap from "./pages/Work/Kanap";
import Nav from "./components/Nav";

import "./App.scss";

function App() {
    const redirect = useRef();
    // const urlDeRedirection = "http://localhost:5173/";
    const urlDeRedirection = "https://www.kalene-apiou.com/";

    useEffect(() => {
        if (!window.location.href.startsWith(urlDeRedirection)) {
            setTimeout(() => {
                window.location.href = urlDeRedirection;
            }, 1500);
            if (redirect.current) {
                redirect.current.style.display = "flex";
            }
        } else {
            if (redirect.current) {
                console.log("redirect.current", redirect.current);
                redirect.current.style.display = "none";
            }
        }
    }, []);
    return (
        <>
            <div ref={redirect} className="redirection">
                <p class="circle">
                    <span class="ouro ouro3">
                        <span class="left">
                            <span class="anim"></span>
                        </span>
                        <span class="right">
                            <span class="anim"></span>
                        </span>
                    </span>
                </p>
                <h1>Redirection...</h1>
            </div>
            <div className="stack background">
                <Nav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/work" element={<Work />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route
                        path="/work/discovermostsuitableproperty"
                        element={<DiscoverMostSuitableProperty />}
                    />
                    <Route path="/work/gymwebsite" element={<GymWebsite />} />
                    <Route
                        path="/work/socialnetwork"
                        element={<SocialNetwork />}
                    />
                    <Route path="/work/immobilier" element={<Immobilier />} />
                    <Route
                        path="/work/animationtext"
                        element={<AnimationText />}
                    />
                    <Route path="/work/portfolio" element={<Portfolio />} />
                    <Route path="/work/kanap" element={<Kanap />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
