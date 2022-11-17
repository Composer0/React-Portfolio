import React from "react";
import ProjectObjects from "../Objects/ObjectsProjects";
import ProjectCards from "../ProjectCards";
import ShowcaseProjects from "../Objects/ShowcaseProjects";
import ShowcaseCards from "../ShowcaseCard";
import BackgroundVideo from "../layout/BackgroundVideo";

function Projects(props) {
    return (
        <div>
        <BackgroundVideo/>
            <div className="portfolio-projects-page">
                <h3>Showcase Projects</h3>
                    <div className="container">
                    {ShowcaseProjects.map(ShowcaseCards)}
                    </div>
                <hr/>
                <h2 className="projects-by-me" id="portfolio">Additional Projects</h2>
                    <div className="container">
                    {ProjectObjects.map(ProjectCards)}
                    </div>
            </div>
    </div>
    );
}

export default Projects;