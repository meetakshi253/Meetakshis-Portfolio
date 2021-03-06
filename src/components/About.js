
import ImgWithFallback from "../shared/ImgWithFallback"


function About() {

    var college = <a className="link about-content-link" id="about-college-link" href="https://www.iiitd.ac.in">IIIT Delhi</a>
    var lab1 = <a className="link about-content-link" id="about-sbilab-link" href="https://sites.google.com/iiitd.ac.in/sonia-baloni-ray/team">Visual Cognition Lab</a>
    var lab2 = <a className="link about-content-link" id="about-sbilab-link" href="https://cosylab.iiitd.edu.in">Complex Systems Lab</a>

    return (
        <section id="About" className="content">
            <div className="container">
                <div className="container-img">
                    <ImgWithFallback
                        src="https://res.cloudinary.com/duy8mqmab/image/upload/v1642541617/img-3_aumpmr.png"
                        className="img about-img"
                        alt="Meetakshi's Picture"
                    />
                </div>
                <div className="container-message">
                    <h2 className="title">
                        Hello, I am Meetakshi.
                    </h2>
                    <p className="container-message-details">
                        I am a third year student at {college}, majoring in Computer Science and Engineering. <br />
                        I dabble in web development and am greatly interested in computational biology. Currently, I am working as a researcher at {lab1} and {lab2} at IIIT Delhi. <br />
                        I am an avid reader and love listening to music.
                        I am a constant learner who proactively seeks knowledge and opportunities to learn and grow (and sneak in Harry Potter references wherever I can).
                    </p>
                    <button className="btn container-downloadcv-button" onClick={() => { let newWindow = window.open('https://res.cloudinary.com/duy8mqmab/image/upload/v1654097758/Meetakshi_Setiya_s_Resume_yxrvju.pdf', 'security'); newWindow.opener = null }}>
                        Resume
                    </button>
                </div>
            </div>
        </section>
    )
}

export default About;
