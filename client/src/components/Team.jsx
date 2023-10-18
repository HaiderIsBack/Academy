import "../assets/css/Team.css"
import "bootstrap/dist/css/bootstrap.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered, faSearch } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'


const Team = () => {
    const lineGenerate = (w = "100") => {
        const lineStyle = {
            background: "var(--bg)",
            width: w + "px",
            height: "1px",
            margin: "5px auto"
        }
        return <hr style={lineStyle} />
    }
    return <>
        <div className="team-main-section my-5" loading="lazy">
            <div className="container top-container d-flex justify-content-between align-items-center pl-0">
                <div className="nav-links p-3 p-md-0">
                    <ul className="d-none d-md-flex">
                        <li><a href="/">Home</a></li>
                        <li><a href="" className="active">Team</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                    <FontAwesomeIcon icon={faBarsStaggered} className="d-block d-md-none text-white" />
                </div>
                <div>
                    <FontAwesomeIcon icon={faSearch} className="nav-search" />
                </div>
            </div>
        </div>
        <div className="team-ceo-section">
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <img src="images/moeez.jpeg" alt="" />
                    </div>
                    <div className="col-8">
                        <h3 className="text-dark font-weight-bolder">Moeez <span style={{color:"var(--bg)"}}>Hafeez</span></h3>
                        <h5>CEO</h5>
                        <p>As an educator, my ultimate goal is to provide students with the best possible education, preparing them for the future. I strongly believe that education is the key to unlocking success and that every child deserves the opportunity to receive a quality education.
                        </p>
                        <p>
                            I am proud of MOEEZ ACADEMY's commitment to excellence and ensuring that students are provided with a safe and nurturing environment to learn and grow. Our focus on holistic education, which includes academic, emotional, and social development, is what sets us apart
                        </p>
                        <div className="team-ceo-socials d-inline-block">
                            <FontAwesomeIcon icon={faFacebookF} className="social-links"/>
                            <FontAwesomeIcon icon={faWhatsapp} className="social-links"/>
                            <FontAwesomeIcon icon={faInstagram} className="social-links"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="team-teachers-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6 col-12">
                        <div className="teacher-card">
                            
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-12"></div>
                    <div className="col-md-3 col-sm-6 col-12"></div>
                    <div className="col-md-3 col-sm-6 col-12"></div>
                    <div className="col-md-3 col-sm-6 col-12"></div>
                </div>
            </div>
        </div>
    </>
}

export default Team