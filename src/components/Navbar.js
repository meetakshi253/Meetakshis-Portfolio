import React from "react"

function Navbar()
{return (
    <header className="header-navbar sticky">
        <div className="header">
            <div className="container container-nav">
            <nav>
                <a href="#About" className="nav-item">
                    About
                </a>
            </nav>  
            <nav>
            <a href="#About" className="nav-item">
                Projects
            </a>
            </nav> 
            <nav>
                
            <a href="#About" className="nav-item">
                Skills
            </a>
            </nav> 
            <nav>
 
            <a href="#About" className="nav-item">
                Resume
            </a>
                           
            </nav>
            <nav>

            <a href="#About" className="nav-item">
                Contact
            </a>
                            
            </nav>

            </div>
        </div>
    </header>
)}

export default Navbar;