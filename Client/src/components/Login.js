import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import img4 from './assets/login.svg';

const login = () => {
    return (
        <Container>
            <Row className="align-items-center" >
                <Col xs={6}> <img className="img4" src={img4} alt="login" /> </Col>
                <Col>
                    <h2 style={{ marginBottom: '20px', color: "orange" }}>Log In</h2>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control size="lg" type="email" placeholder="Email Address" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control size="lg" type="password" placeholder="Password" required />
                        </Form.Group>
                        <div className="text-center mt-4 pt-2 ">
                            <Button className="login" size='lg' variant="primary " style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }} type="submit">
                                Login
                            </Button>
                            <p className="small fw-bold mt-2 pt-1 mb-0">
                                Don't have an account?{" "}
                                <Link to="/Signup" className="link-danger">
                                    Register
                                </Link>
                            </p>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>

    );
};

export default login;