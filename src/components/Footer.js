import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {
    faGithub,
    faLinkedin,
    faInstagram,
    faBehance,
    faLastfm,
  } from "@fortawesome/free-brands-svg-icons";

function Footer()
{
    return (
       
        <footer>
            <div className="Footer">
                <div className="Footer-content-links Footer-item">
                      Connect with me:
                      <a href="mailto:meetakshisty4@gmail.com" className="social" target="_blank"><FontAwesomeIcon icon={faEnvelope} size="lg" /></a>
                      <a href="https://github.com/meetakshi253" className="social" target="_blank"><FontAwesomeIcon icon={faGithub} size="lg" /></a>
                      <a href="https://www.linkedin.com/in/meetakshisetiya/" className="social" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="lg" /></a>
                      <a href="https://www.behance.net/meetakshi" className="social" target="_blank"><FontAwesomeIcon icon={faBehance} size="lg" /></a>
                      <a href="https://www.instagram.com/metsetwho/" className="social" target="_blank"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
                      <a href="https://www.last.fm/user/darthgraffiti" className="social" target="_blank"><FontAwesomeIcon icon={faLastfm} size="lg" /></a>
                </div>
                
                <div className="Footer-content-copyright Footer-item">
                    <p id="p-ft">© Meetakshi Setiya 2021 </p>
                   
            </div>
            </div>
        </footer>

    )
}

export default Footer;