import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import DiscoverMostSuitableProperty from "./pages/Work/DiscoverMostSuitableProperty";
import GymWebsite from "./pages/Work/GymWebsite";
import SocialNetwork from "./pages/Work/SocialNetwork";
import Slider from "./pages/Work/Slider";
import AnimationText from "./pages/Work/AnimationText";

import "./App.scss";

function App() {
    return (
        <div className="stack background">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/work" element={<Work />} />
                <Route
                    path="/work/DiscoverMostSuitableProperty"
                    element={<DiscoverMostSuitableProperty />}
                />
                <Route path="/work/GymWebsite" element={<GymWebsite />} />
                <Route path="/work/SocialNetwork" element={<SocialNetwork />} />
                <Route path="/work/slider" element={<Slider />} />
                <Route path="/work/animationText" element={<AnimationText />} />
            </Routes>
        </div>
    );
}

export default App;
