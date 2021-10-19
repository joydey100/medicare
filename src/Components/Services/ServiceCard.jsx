import React from "react";
import { Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const ServiceCard = ({ img, name, small_desc }) => {
  return (
    <Col md={4}>
      <div className="p-3 shadow h-100">
        <img src={img} alt="service-img" className="service-img d-block mb-3" />
        <h5 className="mb-3"> {name} </h5>
        <p className="text-secondary"> {small_desc.slice(0, 100)} ... </p>
        <NavLink
          to="/service"
          className="bg-main text-decoration-none px-4 py-2 rounded-pill text-white d-inline-block"
        >
          {" "}
          Show More{" "}
        </NavLink>
      </div>
    </Col>
  );
};

export default ServiceCard;
