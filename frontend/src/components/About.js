import React from 'react';
import img3 from './assets/img3.svg';
import { Link } from 'react-router-dom';
const About = () => {
   return (
    <>
         <div className="container my-3">
                <div className="row">
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h1 className="display-4 mb-4">Inspiring<span style={{ color: "darkred" }} > Students</span> </h1>
                        <p>A secure online platform enabling seamless creation, editing, uploading, and deleting of your notes/information privately and without interruption.</p>
                        <h2 className="mb-3 my-3" style={{ fontWeight: "revert-layer" }}>Unleash creativity <span style={{ color: "darkred" }}>NoteGen</span> </h2>
                        <p>Introducing NoteGen, born out of the frustration of scribbling notes in a notebook. Say goodbye to the hassle! 
                          With our online platform, you can effortlessly create, edit, upload, and delete your notes securely and privately. 
                          Access your notes anytime, anywhere, without any disruptions. Don&apos;t underestimate the power of creating—start jotting down 
                          your thoughts with NoteGen today!
                        </p>

                    </div>
                    <div className="col-md-6 my-4">
                        <img className="img-fluid awesome" src={img3} alt="about-awesome" />
                    </div>
                </div>
            </div>

      <footer>
                <div className="content">
                    <div className="top">
                        <div className="logo-details">
                            <span className="logo_name"><span style={{ color: "darkred" }}>NoteGen</span></span>
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
                            <li><Link to="/login">Sign-in</Link></li>
                            <li><Link to="/login">Join Free</Link></li>
                        </ul>
                        <ul className="box">
                            <li className="link_name">Top Categories</li>
                            <li><Link to="/notes">Food Notes</Link></li>
                            <li><Link to="/notes">Travel Notes</Link></li>
                            <li><Link to="/notes">Business Notes</Link></li>
                            <li><Link to="/notes">Iternary Notes</Link></li>
                        </ul>
                        <ul className="box input-box">
                            <li className="link_name">About NoteGen</li>
                            <li style={{ color: "#F7FFFF" }}>
                            A secure online platform enabling seamless creation, editing, uploading, and deleting of your notes/information privately and without interruption.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="bottom-details">
                    <div className="bottom_text">
                        <span className="copyright_text">Copyright © 2024 <Link to="/">NoteGen</Link>All rights reserved</span>
                        <span className="policy_terms">
                            <Link to="/">Privacy policy</Link>
                            <Link to="/">Terms & condition</Link>
                        </span>
                    </div>
                </div>
            </footer>
    </>
   )
}

export default About;