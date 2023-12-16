import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import img5 from './assets/signup.svg';
import { Link } from "react-router-dom";

const signup = () => {
    return (
        <Container>
            <Row className="align-items-center">
                <Col xs={5}>
                    <img className="img5" src={img5} alt="signup" />
                </Col>
                <Col>
                    <h2 style={{ marginBottom: '20px', color: "orange" }}>Create a new account</h2>

                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control size="lg" type="name" placeholder="Name" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control size="lg" type="email" placeholder="Email Address" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control size="lg" type="Password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control size="lg" type="Confirm Password" placeholder="Confirm Password" required />
                        </Form.Group>

                        <div className="text-center mt-4 pt-2 ">
                            <Button className="login" size='lg' variant="primary " style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }} type="submit">
                                SignUp
                            </Button>
                            <p className="small fw-bold mt-2 pt-1 mb-0">
                                Already registered?{" "}
                                <Link to="/Login" className="link-danger">
                                    Login
                                </Link>
                            </p>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default signup;