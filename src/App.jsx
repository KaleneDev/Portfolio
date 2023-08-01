import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import DiscoverMostSuitableProperty from "./pages/Work/DiscoverMostSuitableProperty";
import GymWebsite from "./pages/Work/GymWebsite";
import SocialNetwork from "./pages/Work/SocialNetwork";
import Slider from "./pages/Work/Slider";
import AnimationText from "./pages/Work/AnimationText";
import Nav from "./components/Nav";

import "./App.scss";

function App() {
    return (
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
                <Route path="/work/socialnetwork" element={<SocialNetwork />} />
                <Route path="/work/slider" element={<Slider />} />
                <Route path="/work/animationtext" element={<AnimationText />} />
            </Routes>
        </div>
    );
}

export default App;
