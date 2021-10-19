import React from "react";
import { Container, Row } from "react-bootstrap";
import data from "./FAQData";
import SingleFaq from "./SingleFaq";

const FAQ = () => {
  return (
    <section>
      <Container>
        <h2 className="title text-center mt-5"> Frequently Asked Question </h2>
        <Row className="g-4 mt-5">
          {data.map((data) => (
            <SingleFaq key={data.id} {...data} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FAQ;
