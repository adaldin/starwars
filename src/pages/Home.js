import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
function Home() {
  return (
    <Row className="bg-dark h-100 p-4">
      <Col sm={12} className="d-flex justify-content-center">
        <h1 className="text-white">Join to the Force!</h1>
      </Col>
      <Col as={Link} to="/starships" className="d-grid text-decoration-none">
        <Button variant="outline-light">Starships</Button>
      </Col>
    </Row>
  );
}
export default Home;
