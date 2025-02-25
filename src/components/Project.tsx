import React from "react";
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/tansari44" target="_blank" rel="noreferrer"></a>
                <a href="https://github.com/tansari44" target="_blank" rel="noreferrer"><h2>Lazzat</h2></a>
                <p>A platform to find and rate Halal resturaunts. Built using ReactJS and Java.</p>
            </div>
            <div className="project">
                <a href="https://github.com/tansari44" target="_blank" rel="noreferrer"></a>
                <a href="https://github.com/tansari44" target="_blank" rel="noreferrer"><h2>CoHost</h2></a>
                <p>An app that allows for seamless, lightweight adhoc event planning. Built for iOS using Swift.</p>
            </div>
            <div className="project">
                <a href="https://github.com/tansari44" target="_blank" rel="noreferrer"></a>
                <a href="https://github.com/tansari44" target="_blank" rel="noreferrer"><h2>Tenly</h2></a>
                <p>A platform dedicated to indexing and rating landlords across the country. We seek to be the largest database for renters to find and provide feedback on landlords.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;