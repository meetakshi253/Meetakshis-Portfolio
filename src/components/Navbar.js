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

                <a href="#About" className="nav-item">
                    About
                </a>


            <a href="#About" className="nav-item">
                Projects
            </a>

                
            <a href="#About" className="nav-item">
                Skills
            </a>

 
            <a href="#About" className="nav-item">
                Resume
            </a>

            <a href="#Contact" className="nav-item">
                Contact
            </a>
                            


            </div>
        </div>
    </header>
)}

export default Navbar;