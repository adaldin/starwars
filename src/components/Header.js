import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Logo from "../assets/star_wars_logo.png";
import Login from "./Login";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";

function Header(props) {
  // states
  const [popUp, setPopUp] = useState(false);
  const [btnName, setBtnName] = useState("");

  // logic
  function handlePopUp(event) {
    const { name } = event.target;
    setPopUp((prevPopUp) => !prevPopUp);
    setBtnName(name);
  }

  function handleClose() {
    setPopUp((prevPopUp) => !prevPopUp);
  }
  return (
    <Row className="justify-content-between bg-black">
      <Col sm={{ span: 12, order: 1 }} md={{ span: 3, order: 1 }}>
        <Stack
          direction="horizontal"
          className="justify-content-center p-1"
          gap={2}
        >
          <i className="bi bi-facebook text-light"></i>
          <i className="bi bi-instagram text-light"></i>
          <i className="bi bi-twitter text-light"></i>
          <i className="bi bi-youtube text-light"></i>
        </Stack>
      </Col>
      <Col sm={{ span: 12, order: 2 }} md={{ span: 3, order: 2 }}>
        <Stack
          direction="horizontal"
          className="justify-content-center p-1"
          gap={2}
        >
          <Button
            name="login"
            className="text-white"
            variant="black"
            onClick={handlePopUp}
          >
            LOGIN
          </Button>
          <div className="vr text-white border" />
          <div className="vr text-white border" />
          <Button
            name="signup"
            className="text-white"
            variant="black"
            onClick={handlePopUp}
          >
            SIGNUP
          </Button>
        </Stack>
        <Login show={popUp} handleClose={handleClose} sign={btnName} />;
      </Col>
      <Col
        sm={{ span: 12, order: 3 }}
        md={{ span: 6, order: 1 }}
        className="d-flex justify-content-center"
      >
        <img
          style={{ width: "300px" }}
          src={Logo}
          className="img-fluid"
          alt="starwars-logo"
        ></img>
      </Col>
    </Row>
  );
}

export default Header;
