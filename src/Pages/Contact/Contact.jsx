import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import contactImg from "../../Images/contact.svg";

const Contact = () => {
  return (
    <section>
      <Container>
        {/* Contact Section */}
        <Row>
          <Col md={7} className="mx-auto">
            <h2 className="text-center title text-secondary my-5">
              Contact Us
            </h2>
            <p className="text-center text-secondary mt-3">
              If you have any queries for Help, Feel Free to Contact with us.
              Our Support Team is 24/7 Hour Active to support for you.
            </p>
          </Col>
        </Row>

        {/* Contact Field */}

        <Row className="mt-5">
          <Col md={6} className="d-flex align-items-center">
            <div className="contact-info w-100">
              {/* Name Field */}
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Full Name"
                  className="p-3"
                />
              </Form.Group>
              {/* Email Address */}
              <Form.Group className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="Email Address"
                  className="p-3"
                />
              </Form.Group>
              {/* Message Area */}
              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Write Your Message"
                  className="p-3"
                />
              </Form.Group>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn-padding bg-main px-4 py-2 text-white  border-0 rounded-pill"
              >
                {" "}
                Submit
              </button>
            </div>
          </Col>
          <Col md={6}>
            <img src={contactImg} alt="contact-img" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
