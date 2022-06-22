import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
function Home() {
  return (
    <Row className="bg-black vh-100 p-4">
      <Col className="d-flex flex-column justify-content-center">
        <Col sm={12} className="d-flex justify-content-center">
          <h1 className="text-white">Join to the Force!</h1>
        </Col>
        <Col
          sm={12}
          as={Link}
          to="/starships"
          className="d-grid text-decoration-none"
        >
          <Button variant="outline-light">Starships</Button>
        </Col>
      </Col>
    </Row>
  );
}
export default Home;
