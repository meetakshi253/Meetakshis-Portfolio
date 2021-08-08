import React, { Component } from "react";
import { projectsData } from "../projectsData.js"
import ProjectCard from "./ProjectCard"

class Projects extends Component {
    constructor() {
        super();
        this.state = { projectsdata: projectsData }
    }
    render() {
        const projectdetails = this.state.projectsdata.map((project) =>
        (
            project.id < 10 ? <ProjectCard key={project.id} project={project} /> : null
        ));
        return (
            <section id="Projects" className="content">
                <div className="container">
                    <div className="container-projects">
                        <h2 className="section-title"><span>Projects</span></h2>
                        <div className="container-message-details" id="projects-message">You can find all my projects on <a className="link" id="projects-message-link" href="https://github.com/meetakshi253/">Github.</a></div>
                        <div className="all-cards">
                            {projectdetails}
                        </div>
                    </div>
                </div>
            </section>

        );
    }

}

export default Projects;
