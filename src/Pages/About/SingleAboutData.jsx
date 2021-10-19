import React from "react";
import { Card, Col } from "react-bootstrap";

const SingleAboutData = ({ img, amount, name }) => {
  return (
    <Col md={4} className="mt-5">
      <Card className="p-3 shadow text-center">
        <img src={img} alt="about-icon-img" className="w-25 d-block mx-auto" />
        <h2 className="mt-3 mb-2"> {amount}+ </h2>
        <p className="text-secondary"> {name}</p>
      </Card>
    </Col>
  );
};

export default SingleAboutData;
