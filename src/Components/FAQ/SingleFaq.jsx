import React from "react";
import { Accordion } from "react-bootstrap";

const SingleFaq = ({ id, title, desc }) => {
  return (
    <div className="single-faq">
      <Accordion defaultActiveKey="1">
        <Accordion.Item eventKey={id}>
          <Accordion.Header>{title}</Accordion.Header>
          <Accordion.Body>{desc}</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default SingleFaq;
