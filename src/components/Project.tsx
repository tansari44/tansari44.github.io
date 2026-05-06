import React from "react";
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/tansari44" target="_blank" rel="noreferrer"></a>
                <a href="https://github.com/tansari44" target="_blank" rel="noreferrer"><h2>Zabi</h2></a>
                <p>Zabi is a cutting-edge restaurant finder and review app built for social foodies, utilizing Supabase for robust backend services and React Native for seamless cross-platform mobile development. It empowers users with real-time reviews, personalized recommendations, and social features to discover and share culinary experiences.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;