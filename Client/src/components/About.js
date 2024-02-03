import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img3 from './assets/img3.svg';
import { Link } from 'react-router-dom';
const About = () => {
   return (
    <>
    <Container>
      <Row >
         <Col xs = {6} >
         <h1 className='about'>Empowering <span style={{color:'orange'}}>Students </span></h1>
         <p>An online web platform where you can create, edit, upload, delete your notes/information privately and securely without any disturbancee</p>

         <h2 className = 'about-para'>Make something <span style={{color:'orange'}}>Awesome</span></h2>
         <p> Notespace is made from the pain of writing all the things in notebook 
            which is very hectic, So we made an online web platform where you 
            can create, edit, upload, delete your notes/information privately and
             securely without any disturbancee. you can also access your notes anywhere
              in your world, at anytime time . So dont forget to Create note because 
              creating anything is always important </p>
         </Col>
         <Col><img className ="img3" src={img3} alt="Logo" /></Col>
      </Row>
      <footer>
                <div className="content">
                    <div className="top">
                        <div className="logo-details">
                            <span className="logo_name"><span style={{ color: "#9C27B0" }}>Notespace</span></span>
                        </div>
                        <div className="media-icons">
                            <Link to="/"><i className="fab fa-facebook-f"></i></Link>
                            <Link to="/"><i className="fab fa-twitter"></i></Link>
                            <Link to="/"><i className="fab fa-instagram"></i></Link>
                            <Link to="/"><i className="fab fa-linkedin-in"></i></Link>
                            <Link to="/"><i className="fab fa-youtube"></i></Link>
                        </div>
                    </div>
                    <div className="link-boxes">
                        <ul className="box">
                            <li className="link_name">Company</li>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/new">New Notes</Link></li>
                            <li><Link to="/about">About us</Link></li>
                            <li><Link to="/signup">Get started</Link></li>
                        </ul>
                        <ul className="box">
                            <li className="link_name">Services</li>
                            <li><Link to="/notes">Your Notes</Link></li>
                            <li><Link to="/new">New Note</Link></li>
                        </ul>
                        <ul className="box">
                            <li className="link_name">Account</li>
                            <li><Link to="/awsm">Sign-in</Link></li>
                            <li><Link to="/register">Join Free</Link></li>
                        </ul>
                        <ul className="box">
                            <li className="link_name">Top Categories</li>
                            <li><Link to="/notes">Tent Notes</Link></li>
                            <li><Link to="/notes">RV and Van Notes</Link></li>
                            <li><Link to="/notes">Canoe Notes</Link></li>
                            <li><Link to="/notes">Survivalist Notes</Link></li>
                        </ul>
                        <ul className="box input-box">
                            <li className="link_name">About Notespace</li>
                            <li style={{ color: "#F7FFFF" }}>
                                An online web platform where you can create, edit, upload, delete your notes/information privately and securely without any disturbance
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="bottom-details">
                    <div className="bottom_text">
                        <span className="copyright_text">Copyright © 2023 <Link to="/">Notespace</Link>All rights reserved</span>
                        <span className="policy_terms">
                            <Link to="/">Privacy policy</Link>
                            <Link to="/">Terms & condition</Link>
                        </span>
                    </div>
                </div>
            </footer>
    </Container>
    </>
   )
}

export default About;