import React from "react";
import { Container, Row } from "react-bootstrap";
import useService from "../../Hooks/useService";
import ServiceCard from "./ServiceCard";
import "./Services.css";

const Services = () => {
  // Get Services
  const [services] = useService();

  return (
    <section>
      <Container>
        <h2 className="title text-center mb-5"> Our Services</h2>
        <Row className="g-4">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
