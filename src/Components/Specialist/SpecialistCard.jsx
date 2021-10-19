import React from "react";
import { Card, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const SpecialistCard = ({ img, name, job, fb, twitter, linkedIn }) => {
  return (
    <Col md={4}>
      <Card className="single-specialist-card p-3 shadow">
        <img src={img} alt="specialist" className="mb-3 d-block" />
        <h4 className="text-center mb-3"> {name} </h4>
        <p className="text-center text-secondary"> {job} </p>
        <div className="social-icon d-flex justify-content-center align-items-center">
          <NavLink to={fb}>
            {" "}
            <i className="fab fa-facebook fs-4 me-3"></i>{" "}
          </NavLink>
          <NavLink to={twitter}>
            {" "}
            <i className="fab fa-twitter fs-4 me-3"></i>{" "}
          </NavLink>
          <NavLink to={linkedIn}>
            <i className="fab fa-linkedin fs-4 me-3"></i>
          </NavLink>
        </div>
      </Card>
    </Col>
  );
};

export default SpecialistCard;
