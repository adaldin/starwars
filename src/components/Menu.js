import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavLink from "react-bootstrap/NavLink";

export default function Menu() {
  return (
    <Row as={Navbar} bg="black" variant="dark">
      <Container fluid className="bg-black justify-content-center">
        <Col sm={12}>
          <Nav className="justify-content-center">
            <NavLink as={Link} to="/">
              HOME
            </NavLink>
            <NavLink as={Link} to="/starships">
              STARSHIPS
            </NavLink>
          </Nav>
        </Col>
      </Container>
    </Row>
    // <Row as={navbar} className="bg-dark">
    //   <Link to="/">Home</Link>
    //   <Link to="/starships">Starships</Link>
    // </Row>
  );
}
