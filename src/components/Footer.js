import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
    faGithub,
    faLinkedin,
    faInstagram,
    faBehance,
    faLastfm,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (

        <footer>
            <div className="Footer">
                <div className="Footer-content-links Footer-item">
                    Connect with me:
                      <a href="mailto:meetakshisty4@gmail.com" className="social"><FontAwesomeIcon icon={faEnvelope} size="lg" /><span className="visually-hidden">Email</span></a>
                    <a href="https://github.com/meetakshi253" className="social"><FontAwesomeIcon icon={faGithub} size="lg" /><span className="visually-hidden">Github</span></a>
                    <a href="https://www.linkedin.com/in/meetakshisetiya/" className="social"><FontAwesomeIcon icon={faLinkedin} size="lg" /><span className="visually-hidden">Linkedin</span></a>
                    <a href="https://www.behance.net/meetakshi" className="social"><FontAwesomeIcon icon={faBehance} size="lg" /><span className="visually-hidden">Behance</span></a>
                    <a href="https://www.instagram.com/metsetwho/" className="social"><FontAwesomeIcon icon={faInstagram} size="lg" /><span className="visually-hidden">Instagram</span></a>
                    <a href="https://www.last.fm/user/darthgraffiti" className="social"><FontAwesomeIcon icon={faLastfm} size="lg" /><span className="visually-hidden">Last FM</span></a>
                </div>

                <div className="Footer-content-copyright Footer-item">
                    <p id="p-ft">© Meetakshi Setiya 2021 </p>

                </div>
            </div>
        </footer>

    )
}

export default Footer;