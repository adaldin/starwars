import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Logo from "../assets/star_wars_logo.png";

function Header(props) {
  return (
    <Row className="justify-content-center bg-dark">
      <Col sm={12} style={{ width: "300px" }}>
        <img src={Logo} className="img-fluid" alt="starwars-logo"></img>
      </Col>
    </Row>
  );
}

export default Header;
