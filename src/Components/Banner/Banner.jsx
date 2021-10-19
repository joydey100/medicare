import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import "./Banner.css";
import BannerImg from "../../Images/banner.png";
import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner">
      <Container>
        <Row>
          <Col md={5} className="d-flex align-items-center">
            <div className="banner-info">
              <h2 className="mb-3 fs-1">
                We Have Largest
                <span className="d-block mt-1">Health Care Network</span>
              </h2>
              <p className="mb-3">
                We are Providing best Health Care Service for you. In Our
                Hospital, You check any type of Heath issues with our
                specialized doctor's. You Can also Check your Daily Basis
                Medical Checkup, Neutrition Guideline and So on.
              </p>
              <NavLink
                to="/services"
                className="bg-main text-decoration-none px-4 py-2 rounded-pill text-white d-inline-block"
              >
                {" "}
                See Our Services
              </NavLink>
            </div>
          </Col>
          <Col md={7}>
            <div className="banner-img">
              <img src={BannerImg} alt="banner-imd" className="img-fluid" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
