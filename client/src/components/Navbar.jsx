import "../assets/css/Navbar.css"
import "bootstrap/dist/css/bootstrap.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine, faCheck, faClock, faEnvelope, faPhone, faPhoneAlt, faPhoneSquare, faTv, faUser } from '@fortawesome/free-solid-svg-icons'

{/* <FontAwesomeIcon icon={faCoffee} /> */ }

const Navbar = () => {
    return <>
        <nav className="py-2">
            <div className="container d-flex flex-md-row flex-column justify-content-between align-items-center">
                <div className="timing-schedule">
                    <FontAwesomeIcon icon={faClock} />
                    &#32;
                    Opening Hours: Monday - Saturday: 3.00 pm - 10.00 pm, Sunday Closed
                </div>
                <div className="main-actions">
                    <ul className="d-flex justify-content-center align-items-center flex-column flex-md-row">
                        <li>
                            <a href="">
                                <FontAwesomeIcon icon={faCheck} />
                                &#32;
                                Promotion Results
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <FontAwesomeIcon icon={faChartLine} />
                                &#32;
                                Online Results
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <FontAwesomeIcon icon={faTv} />
                                &#32;
                                Login LAMS
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <FontAwesomeIcon icon={faUser} />
                                &#32;
                                Staff Login
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className="container my-3">
            <div className="row">
                <div className="col-12 col-md-3 left">
                    <div className="row">
                        <div className="col-md-2 col-12 d-flex d-md-block justify-content-center">
                            <FontAwesomeIcon icon={faEnvelope} className="nav-social-link-icon" />
                        </div>
                        <div className="col-md-10 col-12 d-flex d-md-block justify-content-center">
                            <p className="">Mail Us Today</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col d-flex d-md-block justify-content-center">
                            <a href="mailto:info.moeezacademy@gmail.com" className="nav-social-link">info.moeezacademy@gmail.com</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 my-md-0 my-4 middle">
                    <img src="images/logo.png" alt="" />
                </div>
                <div className="col-12 col-md-3 right">
                    <div className="row">
                        <div className="col-md-2 col-12 d-flex d-md-block justify-content-center">
                            <FontAwesomeIcon icon={faPhoneSquare} className="nav-social-link-icon" />
                        </div>
                        <div className="col-md-10 col-12 d-flex d-md-block justify-content-center">
                            <p className="">Call us for Info</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col d-flex d-md-block justify-content-center"><a href="tel:+923238869010" className="nav-social-link">+923238869010</a></div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Navbar