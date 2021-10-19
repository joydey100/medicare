import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import data from "./FAQData";
import SingleFaq from "./SingleFaq";
import faqImg from "../../Images/faq.svg";

const FAQ = () => {
  return (
    <section>
      <Container>
        <h2 className="title text-center mt-5"> Frequently Asked Question </h2>
        <Row className="g-4 mt-5">
          <Col md={6}>
            <img src={faqImg} alt="faq-img" className="img-fluid" />
          </Col>
          <Col md={6} className="d-flex align-items-center">
            <div>
              {data.map((data) => (
                <SingleFaq key={data.id} {...data} />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FAQ;
