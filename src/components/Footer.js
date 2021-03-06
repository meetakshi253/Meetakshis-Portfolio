
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
    faTwitter,
    faBehance,
    faLastfm,
    faTelegramPlane
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (

        <footer>
            <div className="Footer">
                <div className="Footer-content">
                <div className="Footer-content-links Footer-item">
                    Connect with me:
                    <a href="https://github.com/meetakshi253" className="social"><FontAwesomeIcon icon={faGithub} size="lg" /><span className="visually-hidden">Github</span></a>
                    <a href="https://www.linkedin.com/in/meetakshisetiya/" className="social"><FontAwesomeIcon icon={faLinkedin} size="lg" /><span className="visually-hidden">Linkedin</span></a>
                    <a href="https://twitter.com/metsetwhoo" className="social"><FontAwesomeIcon icon={faTwitter} size="lg" /><span className="visually-hidden">Twitter</span></a>
                    <a href="http://t.me/metsetwhoo" className="social"><FontAwesomeIcon icon={faTelegramPlane} size="lg" /><span className="visually-hidden">Telegram</span></a>
                    {/* <a href="https://www.instagram.com/metsetwho/" className="social"><FontAwesomeIcon icon={faInstagram} size="lg" /><span className="visually-hidden">Instagram</span></a> */}
                    <a href="https://www.behance.net/meetakshi" className="social"><FontAwesomeIcon icon={faBehance} size="lg" /><span className="visually-hidden">Behance</span></a>
                    <a href="https://www.last.fm/user/darthgraffiti" className="social"><FontAwesomeIcon icon={faLastfm} size="lg" /><span className="visually-hidden">Last FM</span></a>
                </div>
                </div>
                <div className="Footer-content-copyright Footer-item">
                    <p id="p-ft" color="#f1f0f0">© Meetakshi Setiya | 2021 </p>
                </div>
            </div>
        </footer>

    )
}

export default Footer;