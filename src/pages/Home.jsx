import { React } from "react";
import BaseLayout from "../layouts/BaseLayout";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Work from "../components/Work";
import Contact from "../components/Contact";
function Home() {
    return (
        <BaseLayout
            title="Kalène A PIOU: Site Personel"
            description="Mon Portfolio"
        >
            <div className="stack gap-20 lg:48">
                <div className="wrapper stack gap-8">
                    <Hero />
                    <Skills />
                </div>
                <main>
                    <Work />
                </main>
                <aside>
                    <Contact />
                </aside>
            </div>
        </BaseLayout>
    );
}

export default Home;
