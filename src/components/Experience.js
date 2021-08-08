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
            project.id>10?<ProjectCard key={project.id} project={project} />:null
        ));
        return (
            <section id="Experience" className="content" >
                <div className="container">
                    <div className="container-projects">
                        <h2 className="section-title" style={{marginBottom: "10px"}}><span>Experience</span></h2>
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
