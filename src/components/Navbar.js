import React from "react"

function Navbar()
{return (
    <header className="header-navbar sticky">
        <div className="header">
            <div id="logo-details">
            <img
               className="logo"
                    alt="coding girl"
                    src="./ms-2.png"
                    />
                Meetakshi Setiya
            </div>
            <div className="container container-nav">

                <a href="#About" alt="about" className="nav-item">
                    About
                </a>


            <a href="#Projects" alt="projects" className="nav-item">
                Projects
            </a>

                
            <a href="#About" alt="skills" className="nav-item">
                Skills
            </a>

 
            <a href="http://tiny.cc/Meetakshis-Resume" alt="resume" className="nav-item" target="_blank" rel="noopener noreferrer">
                Resume
            </a>

            <a href="#Contact" alt="contact" className="nav-item">
                Contact
            </a>
                            


            </div>
        </div>
    </header>
)}

export default Navbar;