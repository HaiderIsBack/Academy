import "../assets/css/Home.css"
import "bootstrap/dist/css/bootstrap.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered, faChartLine, faClipboard, faEnvelope, faQuestionCircle, faQuoteLeft, faSearch, faSmile, faStar, faTrophy, faTv, faUsers } from '@fortawesome/free-solid-svg-icons'

import ResultCard from "../essentials/ResultCard"

// Dummy Data Must be Removed Later
import students from "../dummy/Students"

const Home = () => {

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
        <div className="home-main-section my-5" loading="lazy">
            <div className="container top-container d-flex justify-content-between align-items-center pl-0">
                <div className="nav-links p-3 p-md-0">
                    <ul className="d-none d-md-flex">
                        <li><a href="" className="active">Home</a></li>
                        <li><a href="/team">Team</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                    <FontAwesomeIcon icon={faBarsStaggered} className="d-block d-md-none text-white"/>
                </div>
                <div>
                    <FontAwesomeIcon icon={faSearch} className="nav-search" />
                </div>
            </div>
        </div>
        <div className="home-register-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-12">
                        <h5>Welcome To</h5>
                        <h3>Moeez Academy</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima tempore iusto, maxime fuga obcaecati quo dolorum rem ab ipsum neque commodi quidem optio temporibus exercitationem autem enim eum suscipit omnis voluptate cum corporis possimus, debitis laudantium. Quis minima enim numquam?</p>
                        <div className="row my-4">
                            <div className="col-2">
                                <img src="images/team.png" alt="" />
                            </div>
                            <div className="col-10">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum maiores mollitia repellat autem quis iure tempore, corporis aspernatur perspiciatis rem aut nesciunt alias accusantium dolorem molestiae ipsam! Quos, cum explicabo. Vel nostrum inventore saepe ad nihil expedita numquam beatae maxime.
                            </div>
                        </div>
                        <div className="row my-4">
                            <div className="col-2">
                                <img src="images/handshake.png" alt="" />
                            </div>
                            <div className="col-10">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum maiores mollitia repellat autem quis iure tempore, corporis aspernatur perspiciatis rem aut nesciunt alias accusantium dolorem molestiae ipsam! Quos, cum explicabo. Vel nostrum inventore saepe ad nihil expedita numquam beatae maxime.
                            </div>
                        </div>
                        <div className="row my-4">
                            <div className="col-2">
                                <img src="images/programmer.png" alt="" />
                            </div>
                            <div className="col-10">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum maiores mollitia repellat autem quis iure tempore, corporis aspernatur perspiciatis rem aut nesciunt alias accusantium dolorem molestiae ipsam! Quos, cum explicabo. Vel nostrum inventore saepe ad nihil expedita numquam beatae maxime.
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-12">
                        <div className="container">
                            <form className="realForm p-3">
                                <h4 className="my-2">Registration Request Form</h4>
                                <input type="text" className="my-2" placeholder="Enter Name" />
                                <input type="text" className="my-2" placeholder="Enter Mobile Number 923XXXXXXXXX" />
                                <input type="text" className="my-2" placeholder="Enter Address" />
                                <select id="" className="my-2">
                                    <option value="">Choose Class</option>
                                    <option value="">Play Group</option>
                                    <option value="">Nursery</option>
                                    <option value="">Prep</option>
                                    <option value="">1st</option>
                                    <option value="">2nd</option>
                                    <option value="">3rd</option>
                                    <option value="">4th</option>
                                    <option value="">5th</option>
                                    <option value="">6th</option>
                                    <option value="">7th</option>
                                    <option value="">8th</option>
                                    <option value="">9th</option>
                                    <option value="">10th</option>
                                    <option value="">1st Year</option>
                                    <option value="">2nd Year</option>
                                    <option value="">B.A</option>
                                </select>
                                <textarea id="" className="my-2" placeholder="Message"></textarea>
                                <button className="my-2">Submit Request</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="home-call-to-action my-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6 col-12 call-to-action">
                        <FontAwesomeIcon icon={faQuestionCircle} className="icon" />
                        <h3>Ask a Question</h3>
                    </div>
                    <div className="col-md-3 col-sm-6 col-12 call-to-action">
                        <FontAwesomeIcon icon={faEnvelope} className="icon" />
                        <h3>Ask a Question</h3>
                    </div>
                    <div className="col-md-3 col-sm-6 col-12 call-to-action">
                        <FontAwesomeIcon icon={faChartLine} className="icon" />
                        <h3>Ask a Question</h3>
                    </div>
                    <div className="col-md-3 col-sm-6 col-12 call-to-action">
                        <FontAwesomeIcon icon={faTv} className="icon" />
                        <h3>Ask a Question</h3>
                    </div>
                </div>
            </div>
        </div>
        <div className="home-institute-info">
            <div className="container">
                <h3>A Perfect Solution for Studies</h3>
                {lineGenerate("150")}
                {lineGenerate()}
                <div className="row my-0 my-md-5">
                    <div className="col-md-3 col-6">
                        <FontAwesomeIcon icon={faSmile} className="icon" />
                        <h1 id="My-Count">100</h1>
                        <h5>Happy Students</h5>
                    </div>
                    <div className="col-md-3 col-6">
                        <FontAwesomeIcon icon={faClipboard} className="icon" />
                        <h1 id="My-Count">100</h1>
                        <h5>Campuses</h5>
                    </div>
                    <div className="col-md-3 col-6">
                        <FontAwesomeIcon icon={faUsers} className="icon" />
                        <h1 id="My-Count">100</h1>
                        <h5>Faculty Members</h5>
                    </div>
                    <div className="col-md-3 col-6">
                        <FontAwesomeIcon icon={faTrophy} className="icon" />
                        <h1 id="My-Count">100</h1>
                        <h5>Years</h5>
                    </div>
                </div>
            </div>
        </div>
        <div className="home-student-top-results">
            <div className="container text-center">
                <h3 className="font-weight-bolder">Our Prominent <span style={{ color: "var(--bg)" }}>Results</span></h3>
                {lineGenerate("150")}
                {lineGenerate()}
            </div>
            <div className="wrapper">
                {students.map((student, index) => <ResultCard key={index} student={student} />)}
                {students.map((student, index) => <ResultCard key={index} student={student} />)}
            </div>
        </div>

        <div className="home-feedback-section">
            <div className="container text-center">
                <h4 className="font-weight-bolder">Silent <span style={{ color: "var(--bg)" }}>Features</span></h4>
                {lineGenerate("150")}
                {lineGenerate()}
                <div className="row">
                    <div className="col-md col-12 my-2 my-md-4 feedback">
                        <h5>Online Academic Results</h5>
                        {lineGenerate("50")}
                        <div className="d-flex flex-row justify-content-center my-3">
                            <FontAwesomeIcon icon={faStar} className="star" />
                            <FontAwesomeIcon icon={faStar} className="star" />
                            <FontAwesomeIcon icon={faStar} className="star" />
                            <FontAwesomeIcon icon={faStar} className="star" />
                            <FontAwesomeIcon icon={faStar} className="star" />
                        </div>
                    </div>
                    <div className="col-md col-12 my-2 my-md-4 feedback">
                        <h5>LAMS for Students</h5>
                        {lineGenerate("50")}
                        <div className="d-flex flex-row justify-content-center my-3">
                            <FontAwesomeIcon icon={faStar} className="star" />
                            <FontAwesomeIcon icon={faStar} className="star" />
                            <FontAwesomeIcon icon={faStar} className="star" />
                            <FontAwesomeIcon icon={faStar} className="star" />
                            <FontAwesomeIcon icon={faStar} className="star" />
                        </div>
                    </div>
                    <div className="col-md col-12 my-2 my-md-4 feedback">
                        <h5>Special Test Session</h5>
                        {lineGenerate("50")}
                        <div className="d-flex flex-row justify-content-center my-3">
                            <FontAwesomeIcon icon={faStar} className="star" />
                            <FontAwesomeIcon icon={faStar} className="star" />
                            <FontAwesomeIcon icon={faStar} className="star" />
                            <FontAwesomeIcon icon={faStar} className="star" />
                            <FontAwesomeIcon icon={faStar} className="star" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="home-testimonial-section">
            <div className="container">
                <h3>Feedback from our <span style={{ color: "var(--bg)" }}>Students</span></h3>
                {lineGenerate("150")}
                {lineGenerate()}
                <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item">
                            <img src="images/asad-user.jpg" alt="..." />
                                <div className="carousel-caption">
                                    <h5>Hamza Dogar</h5>
                                    <p>9th</p>
                                </div>
                        </div>
                        <div className="carousel-item">
                            <img src="images/ayesha-user.jpg" alt="..." />
                                <div className="carousel-caption">
                                    <h5>Ayesha Jahangir</h5>
                                    <p>10th</p>
                                </div>
                        </div>
                        <div className="carousel-item">
                            <img src="images/hamza-user.jpg" alt="..." />
                                <div className="carousel-caption">
                                    <h5>Asad Anwar</h5>
                                    <p>10th</p>
                                </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
    </>
}

export default Home