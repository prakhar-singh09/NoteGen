import { useContext, useState } from "react";
import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import alertContext from "../context/Alert/alertContext";
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri';
import img5 from './assets/signup.svg';
import { Link, useNavigate} from "react-router-dom";

const Signup = () => {
    // State to toggle password visibility
    const [showPassword, setShowPassword] = useState(false);
    // Accessing showAlert function from the Alert context
    const { showAlert } = useContext(alertContext);
    // State to hold user input credentials
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", confirmPassword: "" });
    // Navigate to other pages after successful registration
    let navigate = useNavigate();

    // Function to toggle password visibility
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    // Function to update the credentials state object with user inputs
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Check if password and confirm password fields match
        if (credentials.password !== credentials.confirmPassword) {
            showAlert("Passwords do not match.", 'warning');
            return;
        }
        // Store the API endpoint in the host constant
        const host = 'http://localhost:5000/';

        // Make API call to register the user
        const response = await fetch(`${host}api/auth/createuser`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password }),
        });

        const json = await response.json();
        // If registration is successful, save auth token to local storage and redirect to notes page
        if (json.success) {
            localStorage.setItem('token', json.authToken);
            navigate('/notes');
            showAlert(`Welcome ${credentials.name}! Successfully Created Your Account :)`, 'success')
        }
        // If registration fails, display the error message
        else {
            showAlert(`${json.error}.`, 'warning');
        }
    }
    return (
        <Container>
            <Row className="align-items-center">
                <Col xs={5}>
                    <img className="img5" src={img5} alt="signup" />
                </Col>
                <Col>
                    <h2 style={{ marginBottom: '20px', color: "orange" }}>Create a new account</h2>

                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control size="lg" type="name" placeholder="Name"  onChange={onChange}
                                    required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control size="lg" type="email" placeholder="Email Address" onChange={onChange} required />
                        </Form.Group>

                        

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control size="lg" type="Password" placeholder="Password" onChange={onChange} minLength={5} required/>
                        </Form.Group>
                       
                         {/* Password visibility toggle button */}
                         <span
                                    className="password-toggle-icon"
                                    onClick={togglePasswordVisibility}>
                                    {showPassword ? <RiEyeOffFill /> : <RiEyeFill />}
                        </span>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control size="lg" type="Confirm Password" placeholder="Confirm Password"   onChange={onChange}
                                    required
                                    minLength={5} />
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

export default Signup;