import React, { Component } from "react";
import { projectsData } from "../projectsData"
import ProjectCard from "../shared/ProjectCard"

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
                        <h3 className="section-title"><span>Projects</span></h3>
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
