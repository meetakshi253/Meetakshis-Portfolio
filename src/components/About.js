import ImgWithFallback from "../shared/ImgWithFallback"

function About() {

    var college = <a className="link about-content-link" id="about-college-link" href="https://www.iiitd.ac.in">IIIT Delhi</a>
    var sbilab = <a className="link about-content-link" id="about-sbilab-link" href="http://sbilab.iiitd.edu.in">SBI Lab</a>

    return (
        <section id="About" className="content">
            <div className="container">
                <div className="container-img">
                    <ImgWithFallback
                        src="./images/img3.webp"
                        fallback="./images/img3.png"
                        className="img about-img"
                        alt="Coding girl picture"
                    />
                    {/* <img
                        className="img about-img"
                        alt="coding girl"
                        src="./img3.png"
                    /> */}
                </div>
                <div className="container-message">
                    <h2 className="title">
                        Hello!
                    </h2>
                    <p className="container-message-details">
                        I am Meetakshi Setiya, a third year student at {college}, majoring in Computer Science and Engineering. <br />
                        I am always looking for ways to explore tools and technologies to broaden my skillset.
                        Presently, I dabble in web development and possess a great interest in Computational Neuroscience.
                        I am also working as a researcher at {sbilab} at IIIT Delhi.
                        I am a natural leader who looks forward to new challenges and opportunities to learn and grow  (and sneak in Harry Potter references wherever I can).
                    </p>
                    <button className="btn container-downloadcv-button" onClick={() => { let newWindow = window.open('http://tiny.cc/Meetakshis_Resume', 'security'); newWindow.opener = null }}>
                        Resume
                    </button>
                </div>
            </div>
        </section>
    )
}

export default About;
