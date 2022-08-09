import React from "react";
import ProjectObjects from "./ObjectsProjects";

function CreateEntry(project) {
    return <
    ProjectObjects
    key={project.key}
    image={project.image}
    alt={project.alt}
    gLink={project.gLink}
    yLink={project.yLink}
    tech={project.tech}
    info={project.info}
    />;
}

export default CreateEntry;