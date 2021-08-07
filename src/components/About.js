// src/components/About.js

function About()
{
    return (
        <section id="About" className="content">
            <div className="container">
                <div className="container-message">
                    <h1 className="title">
                        Hello!
                    </h1>
                    <p className="container-message-details">
                        I am a Computer Science and Engineering undergraduate at IIIT-Delhi. I love to look for tools and technologies to broaden my skillset. I am inclined towards developing software for social impact. I am a vehement believer in hard work and perseverance. I am a natural leader who looks forward to new challenges and opportunities to learn and grow.
                    </p>
                    <button className="btn container-downloadcv-button">
                        Download CV
                    </button>
                </div>
                <div className="container-img">
                    <img
                        className="img about-image"
                        alt="coding girl"
                        src="./img3.png"
                    />
                </div>
            </div>
        </section>
    )
}

export default About;