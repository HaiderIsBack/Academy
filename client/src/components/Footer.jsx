import "../assets/css/Footer.css"
import "bootstrap/dist/css/bootstrap.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faGlobe, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return <>
        <div className="my-footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-12">
                        <img src="images/logo.png" alt="Moeez Academy" />
                        <p>Near Excel School, Gunj Bazaar, Mughalpura</p>
                        <div className="row">
                            <div className="col-1">
                                <FontAwesomeIcon icon={faPhone} className="footer-icon" />
                            </div>
                            <div className="col-11">
                                <a href="tel:+923238869010">+923238869010</a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-1">
                                <FontAwesomeIcon icon={faEnvelope} className="footer-icon" />
                            </div>
                            <div className="col-11">
                                <a href="mailto:info.moeezacademy@gmail.com">info.moeezacademy@gmail.com</a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-1">
                                <FontAwesomeIcon icon={faGlobe} className="footer-icon" />
                            </div>
                            <div className="col-11">
                                <a href="/">www.moeezacademy.com</a>
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="footer-social-link">
                                <a href=""><FontAwesomeIcon icon={faFacebook} className="icon" /></a>
                            </div>
                            <div className="footer-social-link">
                                <a href=""><FontAwesomeIcon icon={faWhatsapp} className="icon" /></a>
                            </div>
                            <div className="footer-social-link">
                                <a href=""><FontAwesomeIcon icon={faInstagram} className="icon" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-12">
                        <p className="header">Useful Links</p>
                        <ul>
                            <li><a href="/" className="realLinks">Home</a></li>
                            <li><a href="/team" className="realLinks">Team</a></li>
                            <li><a href="/about" className="realLinks">About</a></li>
                            <li><a href="/contact" className="realLinks">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-12">
                        <p className="header">Useful Links</p>
                        <ul>
                            <li><a href="" className="realLinks">Login LAMS</a></li>
                            <li><a href="" className="realLinks">Staff Login</a></li>
                            <li><a href="" className="realLinks">Ask a Question</a></li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <p className="header">Opening Hours</p>
                        <ul>
                            <li><p>Monday - Saturday :3:30 pm - 7:30 pm</p></li>
                            <li><p>Sunday : <span style={{ color: "white" }}>Closed</span></p></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="most-bottom-section">
                <div className="container d-flex justify-content-between align-items-center flex-md-row flex-column">
                    <div className="left">
                        <p>Copyright @{new Date().getFullYear()} Moeez Academy. Powered by <span style={{color:"var(--bg)"}}>Moeez Hafeez</span></p>
                    </div>
                    <div className="right text-secondary">
                        FAQ | Support
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Footer