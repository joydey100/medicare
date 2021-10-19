import React from "react";
import { Container, Row } from "react-bootstrap";
import data from "./ShortInfoData";
import SingleShortInfo from "./SingleShortInfo";
import "./ShortInfo.css";

const ShortInfo = () => {
  return (
    <Container className="mt-5">
      <Row>
        {data.map((info) => (
          <SingleShortInfo key={info.id} {...info} />
        ))}
      </Row>
    </Container>
  );
};

export default ShortInfo;
