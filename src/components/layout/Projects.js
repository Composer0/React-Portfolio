import React from "react";
import ProjectObjects from "../Objects/ObjectsProjects";
import ProjectCards from "../ProjectCards";

function Projects(props) {
    return (
        <div>
            <div className="portfolio-projects">
                <h2 id="portfolio" className="projects-by-me">Projects</h2>
                    <div className="container">
        {ProjectObjects.map(ProjectCards)}

                                                    
                    </div>
            </div>
        <br/>
        </div>
    );
}

export default Projects;