import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Header = () => {
  // Get Firebase Information
  const { user, logOut } = useAuth();

  // Sign In Btn
  const displayNameShow = (
    <div className="d-flex align-items-center">
      {" "}
      Sign In as {user.displayName}
    </div>
  );

  const logOutBtn = (
    <Nav.Link
      as={Link}
      to="/login"
      className="bg-danger text-white px-3 rounded-pill ms-lg-3 mt-3 mt-lg-0 d-inline-block"
      onClick={logOut}
    >
      Log Out
    </Nav.Link>
  );

  const signInBtn = (
    <Nav.Link as={Link} to="/login">
      {" "}
      Sign In{" "}
    </Nav.Link>
  );

  const signUpBtn = (
    <Nav.Link
      as={Link}
      to="/register"
      className="bg-main text-white px-3 rounded-pill ms-lg-3 mt-3 mt-lg-0 d-inline-block"
    >
      Sign Up
    </Nav.Link>
  );

  return (
    <Navbar bg="light" expand="lg" fixed="top" className="py-3">
      <Container>
        <Navbar.Brand as={Link} to="/" className="text-main fw-bold">
          <i className="fas fa-user-md me-2"></i> MediCare
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/services">
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>

            {user.displayName ? displayNameShow : signInBtn}
            {user.email ? logOutBtn : signUpBtn}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
