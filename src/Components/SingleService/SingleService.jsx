import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import useService from "../../Hooks/useService";
import NotFound from "../../Pages/NotFound/NotFound";
import "./SingleService.css";

const SingleService = () => {
  // Useparams to take id
  const { id } = useParams();

  //   Get Services
  const [services] = useService();

  //   Specific ID Element
  let specificElement = [];

  //   finding specific Array elements
  if (services.length > 0) {
    specificElement = services.find((service) => service.id === id);
  }

  if (+id > services.length) {
    return <NotFound />;
  }

  //   Destructure Sepecific Element
  const {
    img,
    name,
    small_desc,
    highlights,
    doctor_img,
    doctor,
    contact,
    appointment,
    job,
  } = specificElement;

  return (
    <div className="mt-5 py-5">
      <Container>
        <Row>
          <Col md={9} className="mx-auto">
            <div className="image">
              <img
                src={img}
                alt="single-service-img"
                className="img-fluid d-block mx-auto"
              />
            </div>
            <h2 className="mb-3 mt-4"> {name} </h2>
            <p className="mb-2"> {small_desc} </p>
            <h4 className="mb-3"> HighLights</h4>
            <p className="mb-4"> {highlights} </p>
            <p className="fs-5 my-4">
              {" "}
              Appointment Time :{" "}
              <span className=" text-main">{appointment}</span>
            </p>
            <p className="fs-5 mb-5">
              {" "}
              Contact : <span className=" text-main">{contact} </span>{" "}
            </p>
            <div className="doctor-details d-flex align-items-center">
              <div className="doctor-image">
                <img src={doctor_img} alt="doctor_img" className="doctor-img" />
              </div>
              <div className="doctor-name ms-3">
                <h4 className="text-main"> {doctor} </h4>
                <small> {job} </small>
              </div>
            </div>
            <NavLink
              to="/Services"
              className="text-decoration-none bg-main text-white px-4 py-2 rounded-pill mt-5 d-inline-block"
            >
              {" "}
              Back to Services
            </NavLink>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SingleService;
