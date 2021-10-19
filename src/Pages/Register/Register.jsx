import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Register.css";

const Register = () => {
  // Get Firebase with useAuth
  const {
    googleSignIn,
    setUser,
    createUser,
    error,
    setError,
    setLoading,
    setUserName,
  } = useAuth();

  // Essentila States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // history and location
  const location = useLocation();
  const history = useHistory();

  const redirect_uri = location.state?.from || "/";

  // Const Handle Submit
  const handleRegistration = (e) => {
    e.preventDefault();
    setError("");

    // Password Checking
    if (password.length < 6) {
      setError("Password Must be at least 6 Characters");
      return;
    }

    // user creation
    createUser(name, email, password)
      .then((userCredential) => {
        history.push(redirect_uri);
        const user = userCredential.user;
        setUserName(name);
        setUser(user);
        window.location.reload();
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      })
      .finally(() => setLoading(false));
  };

  // handle Google SignIn
  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      setLoading(false);
      history.push(redirect_uri);
      setUser(result.user);
    });
  };

  return (
    <div className="register py-5">
      <Container>
        <Row>
          <Col md={6} className="mx-auto mt-5">
            <h3 className="text-main mb-4 text-center"> Please Register </h3>
            <Form onSubmit={handleRegistration}>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Name"
                  required
                  onBlur={(e) => setName(e.target.value)}
                  className="p-3"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  required
                  className="p-3"
                  onBlur={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="password"
                  required
                  placeholder="Password"
                  className="p-3"
                  onBlur={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <div className="text-danger my-2"> {error} </div>
              <button
                type="submit"
                className="d-block w-100 py-3 bg-main border-0 text-white"
              >
                {" "}
                Register{" "}
              </button>
            </Form>
            <NavLink
              to="/login"
              className="text-decoration-none text-center mt-3 d-block text-main"
            >
              {" "}
              Already Have an Account?
            </NavLink>
            <br />
            <p className="text-secondary text-center">OR</p>
            <button
              className="d-block w-100 mx-auto py-3"
              onClick={handleGoogleSignIn}
            >
              {" "}
              <img
                src="https://cdn.cdnlogo.com/logos/g/35/google-icon.svg"
                className="google-icon me-2"
                alt="google-icon"
              />{" "}
              Sign Up With Google{" "}
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
