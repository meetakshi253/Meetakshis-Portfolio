// src/components/About.js


function About() {

    var college = <a className="link about-content-link" id="projects-message-link" href="https://github.com/meetakshi253/">IIIT Delhi</a>
    var sbilab = <a className="link about-content-link" id="projects-message-link" href="https://github.com/meetakshi253/">SBI Lab</a>

    return (
        <section id="About" className="content">
            <div className="container">
                <div className="container-img">
                    <img
                        className="img about-img"
                        alt="coding girl"
                        src="./img3.png"
                    />
                </div>
                <div className="container-message">
                    <h1 className="title">
                        Hello!
                    </h1>
                    <p className="container-message-details">
                        I am Meetakshi, a third year student at {college}, majoring in Computer Science and Engineering.
                        I love exploring tools and technologies to broaden my skillset.
                        Currently, I am working as a researcher at {sbilab} at IIIT Delhi.
                        I will be interning at Microsoft as a Software Development Intern in the summer of 2022.
                        I am a natural leader who looks forward to new challenges and opportunities to learn and grow.
                    </p>
                    <button className="btn container-downloadcv-button" onClick={() => { let newWindow = window.open('http://tiny.cc/Meetakshis-Resume', 'security'); newWindow.opener = null }}>
                        Resume
                    </button>
                </div>
            </div>
        </section>
    )
}

export default About;