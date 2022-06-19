import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Logo from "../assets/star_wars_logo.png";
import Login from "./Login";

function Header(props) {
  return (
    <Row className="justify-content-center bg-black">
      <Col sm={{ span: 12, order: 1 }} md={{ span: 3, order: 2 }}>
        <Login />
      </Col>
      <Col
        sm={{ span: 12, order: 2 }}
        md={{ span: 3, order: 1 }}
        style={{ width: "300px" }}
      >
        <img src={Logo} className="img-fluid" alt="starwars-logo"></img>
      </Col>
    </Row>
  );
}

export default Header;
