import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import "./Login.css";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  // useAuth Hook
  const { googleSignIn, setUser, SignInEmail, error, setError, setLoading } =
    useAuth();

  // Some essential States
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  // history and location
  const location = useLocation();
  const history = useHistory();

  const redirect_uri = location.state?.from || "/";

  // login handle
  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    // Sign In Email
    SignInEmail(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        history.push(redirect_uri);
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
      history.push(redirect_uri);
      setUser(result.user);
    });
  };

  return (
    <div className="login">
      <Container>
        <Row>
          <Col md={6} className="mx-auto mt-5">
            <h3 className="text-main mb-4 text-center"> Please Login </h3>
            <Form onSubmit={handleLogin}>
              <Form.Group className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  onBlur={(e) => setEmail(e.target.value)}
                  required
                  className="p-3"
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
                Login{" "}
              </button>
            </Form>
            <NavLink
              to="/register"
              className="text-decoration-none text-center mt-3 d-block text-main"
            >
              {" "}
              Don't Have an Account?
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
              Sign in With Google{" "}
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
