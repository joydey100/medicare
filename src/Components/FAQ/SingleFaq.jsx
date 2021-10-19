import React from "react";
import { Accordion, Col } from "react-bootstrap";

const SingleFaq = ({ id, title, desc }) => {
  return (
    <Col md={6}>
      <Accordion>
        <Accordion.Item eventKey={id}>
          <Accordion.Header>{title}</Accordion.Header>
          <Accordion.Body>{desc}</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Col>
  );
};

export default SingleFaq;
