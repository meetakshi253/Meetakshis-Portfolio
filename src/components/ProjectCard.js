import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";



function ProjectCard(prop) {
    var newid = `${prop.project.name}`
    console.log(newid)
    return (
        <div className="project-details">
            <div className="card">
                <img src={prop.project.image} alt={prop.project.name} className="card-image" />
                <div className="card-body">
                    <div className="card-body-title">
                        <a className="nav-item card-body-title-link" id={newid} href={prop.project.link}>{prop.project.name}</a>
                        <FontAwesomeIcon icon={faArrowRight} size="sm" transform={{rotate: 315}}/>
                    </div>
                    <p className="card-body-details subtitle">{prop.project.subtitle}</p>
                    <p className="card-body-details">{prop.project.details}</p>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard