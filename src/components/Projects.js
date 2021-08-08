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
            <ProjectCard key={project.id} project={project} />
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

// function Projects() {
//     return (
//         <section id="Projects" className="content">
//             <div className="container container-2">
//                 <div className="container-projects">
//                     <h2 className="section-title"><span>
//                         Projects
//                     </span>
//                     </h2>
//                     <div className="container-message-details" id="projects-message">You can find all my projects on <a className="link" id="projects-message-link" href="https://github.com/meetakshi253/">Github.</a></div>
//                     <div className="all-cards">
//                     <div className="project-details">
//                         <div className="card">
//                             <img src="./project-1.png" alt="logo" className="card-image"/>
//                             <div className="card-body">
//                                 <h3 className="card-body-title">Project</h3>
//                                 <p className="project">Some details about the project</p>
//                                 <p className="project">Some details about the project</p>
//                                 <p className="project">Some details about the project</p>
//                             </div>

//                         </div>
//                         </div>
//                         <div className="project-details">
//                         <div className="card">
//                             <img src="./project-1.png" alt="logo" className="card-image"/>
//                             <div className="card-body">
//                                 <h1>Project</h1>
//                                 <p className="project">Some details about the project</p>
//                                 <p className="project">Some details about the project</p>
//                                 <p className="project">Some details about the project</p>
//                             </div>

//                         </div>
//                         </div>
//                         <div className="project-details">
//                         <div className="card">
//                             <img src="./project-1.png" alt="logo" className="card-image"/>
//                             <div className="card-body">
//                                 <h1>Project</h1>
//                                 <p className="project">Some details about the project</p>
//                                 <p className="project">Some details about the project</p>
//                                 <p className="project">Some details about the project</p>
//                             </div>

//                         </div>
//                         </div>
//                         <div className="project-details">
//                         <div className="card">
//                             <img src="./project-1.png" alt="logo" className="card-image"/>
//                             <div className="card-body">
//                                 <h1>Project</h1>
//                                 <p className="project">Some details about the project</p>
//                                 <p className="project">Some details about the project</p>
//                                 <p className="project">Some details about the project</p>
//                             </div>

//                         </div>
//                         </div>
//                         <div className="project-details">
//                         <div className="card">
//                             <img src="./project-1.png" alt="logo" className="card-image"/>
//                             <div className="card-body">
//                                 <h1>Project</h1>
//                                 <p className="project">Some details about the project</p>
//                                 <p className="project">Some details about the project</p>
//                                 <p className="project">Some details about the project</p>
//                             </div>

//                         </div>
//                         </div>
//                         <div className="project-details">
//                         <div className="card">
//                             <img src="./project-1.png" alt="logo" className="card-image"/>
//                             <div className="card-body">
//                                 <h1>Project</h1>
//                                 <p className="project">Some details about the project</p>
//                                 <p className="project">Some details about the project</p>
//                                 <p className="project">Some details about the project</p>
//                             </div>

//                         </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

