import React from "react";
import { useContext, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom"
import img4 from './assets/login.svg';
import alertContext from "../context/Alert/alertContext";
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri';

const Login = () => {
       // State to toggle password visibility
       const [showPassword, setShowPassword] = useState(false);
       // Get the showAlert function from alertContext
       const { showAlert } = useContext(alertContext);
       // State to hold email and password credentials
       const [credentials, setCredentials] = useState({ email: "", password: "" });
       // Get the navigate function from react-router-dom
       let navigate = useNavigate();
   
       // Function to toggle password visibility
       const togglePasswordVisibility = () => {
           setShowPassword(!showPassword);
       };
   
       // Function to update credentials state when inputs change
       const onChange = (e) => {
           setCredentials({ ...credentials, [e.target.name]: e.target.value })
       }
   
       // Store the API endpoint in the host constant
       const host = "http://localhost:5000/";
   
       // Function to handle form submission
       const handleSubmit = async (e) => {
           e.preventDefault();
           // Make a POST request to the login endpoint with email and password
           const response = await fetch(`${host}api/auth/login`, {
               method: "POST",
               headers: {
                   "Content-Type": "application/json",
               },
               body: JSON.stringify({ email: credentials.email, password: credentials.password }),
           });
   
           const json = await response.json();
           if (json.success) {
               // If login is successful, save authToken to local storage and redirect to home page
               localStorage.setItem('token', json.authToken);
               navigate('/');
               // Show success alert
               showAlert('Welcome back! Successfully Loggedin :)', 'success')
           }
           else {
               // If login is unsuccessful, show warning alert
               showAlert('Inavalid Credentials! Please Login Using Correct Credentials.', 'warning');
           }
       }
   
    return (
        <Container>
            <Row className="align-items-center" >
                <Col xs={6}> <img className="img4" src={img4} alt="login" /> </Col>
                <Col>
                    <h2 style={{ marginBottom: '20px', color: "orange" }}>Log In</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control size="lg" type="email" placeholder="Email Address"  onChange={onChange} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control size="lg" type="password" placeholder="Password"  onChange={onChange} required />

                               {/* Password toggle icon */}
                               <span className="password-toggle-icon" onClick={togglePasswordVisibility}>
                                    {showPassword ? <RiEyeOffFill /> : <RiEyeFill />}
                                </span>

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

export default Login;