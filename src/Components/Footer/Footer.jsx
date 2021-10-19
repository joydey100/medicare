import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="pt-5 bg-main text-white">
      <Container>
        <Row className="pt-5">
          {/* 1st Column */}
          <Col md={4} className="d-flex align-items-center mt-3 mt-md-0">
            <div className="logo">
              <h2 className="mb-3">
                {" "}
                <i className="fas fa-user-md me-2"></i> MediCare
              </h2>
              <p className="fs-6">
                {" "}
                MediCare Takes Every Possible Steps to make your body Healthy
                and Fit. Stay Happy, Stay Healthy.
              </p>
            </div>
          </Col>
          {/* 2nd Column */}
          <Col md={2} className="mt-3 mt-md-0">
            <h4> Quick Links</h4>
            <div className="links mt-3 d-flex flex-column">
              <NavLink to="/" className="text-white text-decoration-none mb-2">
                Home
              </NavLink>
              <NavLink to="/" className="text-white text-decoration-none mb-2">
                About
              </NavLink>
              <NavLink to="/" className="text-white text-decoration-none mb-2">
                Service
              </NavLink>
              <NavLink to="/" className="text-white text-decoration-none mb-2">
                Blog
              </NavLink>
              <NavLink to="/" className="text-white text-decoration-none mb-2">
                Contact
              </NavLink>
            </div>
          </Col>
          {/* 3rd Column */}
          <Col md={3} className="mt-3 mt-md-0">
            <h4> Social Media</h4>
            <div className="links mt-3 d-flex flex-column">
              <NavLink to="/" className="text-white text-decoration-none mb-2">
                Facebook
              </NavLink>
              <NavLink to="/" className="text-white text-decoration-none mb-2">
                Twitter
              </NavLink>
              <NavLink to="/" className="text-white text-decoration-none mb-2">
                Instagram
              </NavLink>
              <NavLink to="/" className="text-white text-decoration-none mb-2">
                LinkedIn
              </NavLink>
              <NavLink to="/" className="text-white text-decoration-none mb-2">
                WhatsApp
              </NavLink>
            </div>
          </Col>

          {/* 4th Column */}
          <Col md={3} className="mt-3 mt-md-0">
            <h4> Find Us</h4>
            <div className="location mt-3">
              <p>
                {" "}
                143 Khilkhet Road, Dhaka-Mymensingh HighWay, Dhaka, Bangladesh
              </p>
            </div>
            <div className="email mt-3">
              <p>Email: info@medicare.com</p>
            </div>
            <div className="phone mt-3">
              <p>Phone: +012-3456-789</p>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="copyright-text pt-5">
        <p className="d-block bg-second text-center p-3 mb-0">
          {" "}
          Copyright &copy; 2021 Reserved by MediCare
        </p>
      </div>
    </footer>
  );
};

export default Footer;
