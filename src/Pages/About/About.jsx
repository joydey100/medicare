import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import aboutData from "./AboutStat";
import SingleAboutData from "./SingleAboutData";

const About = () => {
  return (
    <section className="about-section">
      <Container>
        <h2 className="title text-center mt-5"> About Us</h2>
        <Row className="mt-5">
          <Col md={6} className="mt-5 d-flex align-items-center">
            <p className="text-secondary lh-lg">
              MediCare Hospital is a 800 beds premiere tertiary care Hospital
              and the leading provider of private healthcare services in
              Bangladesh. This has been achieved only through consistent
              commitment to improving the lives of people through utmost service
              excellence since its inception on 4th February 2001. MediCare
              Hospital is one of the ventures of Square Group which is the
              leading business group of our country. The reputation of Square
              Hospital is the result of quality clinical outcome and
              comprehensive care, made achievable through world-class integrated
              healthcare facilities by highly trained professionals. Thus
              MediCare Hospital strives to meet patients’ standards through
              quality healthcare and making a difference in their lives.
            </p>
          </Col>
          <Col md={6} className="mt-5">
            <img
              src="https://image.freepik.com/free-photo/team-young-specialist-doctors-standing-corridor-hospital_1303-21199.jpg"
              alt="about-img"
              className="img-fluid"
            />
          </Col>
        </Row>
        <Row className="mt-5">
          {aboutData.map((data) => (
            <SingleAboutData key={data.id} {...data} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default About;
