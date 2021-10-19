import React from "react";
import { Container, Row } from "react-bootstrap";
import SpecialistCard from "./SpecialistCard";
import data from "./SpecialistData";
import "./Specialist.css";

const Specialist = () => {
  return (
    <section>
      <Container>
        <h2 className="title text-center mb-5">Our Specialist</h2>
        <Row className="g-4">
          {data.map((data) => (
            <SpecialistCard key={data.id} {...data} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Specialist;
