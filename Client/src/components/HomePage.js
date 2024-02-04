import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img1 from './assets/img1.svg';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
      <Container>
        <Row>
          <Col xs={6}>
            <h1 className="heading"> NotesApp </h1>
            <h2 className="subheading">Your notebook on cloud -
              <span style={{ color: "orange", fontWeight: "bold" }}>Safe </span> & <span style={{ color: "orange", fontWeight: "bold" }}>Secure </span> </h2>
            <p className="subheading1"> An online web platform where you can create, edit, upload, delete your notes
              information privately and securely without any disturbance. </p>
              
                {/* Show Login and SignUp buttons only if the user is not authenticated */}
              {!localStorage.getItem('token') && <div className="px-2 py-2">
                            <Link className="btn btn-lg btn-outline-primary me-3 my-2" to="/login" role="button" >Login</Link>
                            <Link className="btn btn-lg btn-outline-primary" to="/signup" role="button" >SignUp For Free</Link>
                </div>
              }
           
           
            {/* Show Create New Note button only if the user is authenticated */}
            {localStorage.getItem('token') && <div className="px-2 py-2">
                            <Link className="btn btn-lg btn-outline-primary me-3 my-2" to="/notes" role="button" >Create New Note</Link>
            </div>
            }

          </Col>
          <Col> <img className="img" src={img1} alt="Logo" /> </Col>
        </Row>
      </Container>

  );
};

export default HomePage;