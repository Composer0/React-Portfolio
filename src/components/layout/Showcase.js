import React from "react";
import ShowcaseProjects from "../Objects/ShowcaseProjects";
import ShowcaseCard from "../ShowcaseCard";
// import ProjectCards from "../ProjectCards";

function Projects(props) {
    return (
        <div>
            <div className="portfolio-projects-showcase">
                <h2 className="projects-by-me" id="portfolio">Featured Projects</h2>
                    <div className="showcase-container">
                    {ShowcaseProjects.map(ShowcaseCard)}

                                                    
                    </div>
            </div>
        <br/>
        </div>
    );
}

export default Projects;