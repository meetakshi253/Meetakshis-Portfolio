import React from "react"
import ImgWithFallback from "../shared/ImgWithFallback"

function Navbar() {
    return (
        <header className="header-navbar sticky">
            <div className="header">
                <div id="logo-details">
                    <ImgWithFallback
                        className="logo"
                        alt="meetakshi"
                        src="./ms-2.png" 
                    />
                </div>
                <div className="container container-nav">
                    <a href="#About" alt="about" className="nav-item">
                        About</a>
                    <a href="#Projects" alt="projects" className="nav-item">
                        Projects</a>
                    <a href="#Experience" alt="experience" className="nav-item">
                        Experience</a>
                    <a href="#Contact" alt="contact" className="nav-item">
                        Contact</a>
                </div>
            </div>
        </header>
    )
}

export default Navbar;