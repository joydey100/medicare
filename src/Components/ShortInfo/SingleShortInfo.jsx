import React from "react";
import { Card, Col } from "react-bootstrap";

const SingleShortInfo = ({ title, img, desc }) => {
  return (
    <Col md={4}>
      <Card className="info-details shadow px-4 py-3 h-100 text-center">
        <div className="icon my-3 text-main fs-2">
          <img src={img} alt="icon" className="w-25" />
        </div>
        <div className="info-title mb-2">
          <h4>{title}</h4>
        </div>
        <div className="desc">
          <p className="fs-6 text-secondary"> {desc} </p>
        </div>
      </Card>
    </Col>
  );
};

export default SingleShortInfo;
