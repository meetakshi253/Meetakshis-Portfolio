import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function ProjectCard(prop) {
    return (
        <div className="project-details">
            <div className="card">
                <img src={prop.project.image} alt={prop.project.name} className="card-image" />
                <div className="card-body">
                    <div className="card-body-title">
                        <a className="nav-item" id="card-body-title-link" href={prop.project.link}>{prop.project.name}</a>
                        <FontAwesomeIcon icon={faExternalLinkAlt} size="sm" />
                    </div>
                    <p className="card-body-details techstack">{prop.project.techstack}</p>
                    <p className="card-body-details">{prop.project.details}</p>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard