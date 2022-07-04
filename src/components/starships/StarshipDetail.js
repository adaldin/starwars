// React
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Components
import Pilots from "../pilots/Pilots";
import Films from "../films/Films";

// Bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";

function StarshipDetail(props) {
  // ***********+ Params
  const { id } = useParams();

  // ***********+ States
  const [singleShip, setSingleShip] = useState([]);
  const [shipImg, setShipImg] = useState("");

  // ***********+ UseEffects
  useEffect(() => {
    props.handleScroll();
    getDetails();
    getShipImg(); //eslint-disable-next-line
  }, []);

  // ***********+ Logic
  async function getDetails() {
    try {
      const r = await fetch(`https://swapi.dev/api/starships/${id}`);
      const d = await r.json();
      setSingleShip(d);
    } catch (err) {
      console.error("Server Error", err);
    }
  }

  function getShipImg() {
    const url = `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;
    setShipImg(url);
  }

  return (
    <Container className="d-flex flex-column align-items-center my-2 p-2 gap-4">
      <Row className="justify-content-center">
        <img
          className="img-fluid border-bottom border-danger rounded-1 border-2"
          src={shipImg}
          alt={shipImg}
          onError={(e) => {
            e.currentTarget.src =
              "https://starwars-visualguide.com/assets/img/big-placeholder.jpg";
          }}
        />
      </Row>
      <Row className="p-4 gap-4">
        <Col xs={12} className="border-bottom border-secondary">
          <h3 className="text-secondary text-center text-lg-start fw-bold text-white">
            {singleShip.name}
          </h3>
          <figure className="text-center text-lg-start">
            <blockquote className="blockquote text-secondary">
              <p>Size matters not</p>
            </blockquote>
            <figcaption className="blockquote-footer">
              Luke in <cite title="Source Title">The Empire Strikes Back</cite>
            </figcaption>
          </figure>
        </Col>
        <Col xs={12}>
          <p className="text-secondary fs-6 fw-semibold text-center text-lg-start">
            The approach will not be easy. You are required to maneuver straight
            down this trench and skim the surface to this point. The target area
            is only two meters wide. It’s a small thermal exhaust port, right
            below the main port. The shaft leads directly to the reactor system.
            A precise hit will start a chain reaction which should destroy the
            station. Only a precise hit will set up a chain reaction. The shaft
            is ray-shielded, so you’ll have to use proton torpedoes.
          </p>
        </Col>
        <div className="text-secondary text-center text-lg-start d-flex flex-column flex-lg-row gap-3">
          <ListGroup as={Col} className="p-2 gap-2">
            <ListGroup.Item className="fw-bold  bg-dark text-white">
              Model: {singleShip.model}
            </ListGroup.Item>
            <ListGroup.Item className="fw-bold bg-dark text-white">
              Capacity: {singleShip.cargo_capacity} kg.
            </ListGroup.Item>
            <ListGroup.Item className="fw-bold bg-dark text-white">
              Manufacturer: {singleShip.manufacturer}
            </ListGroup.Item>
            <ListGroup.Item className="fw-bold bg-dark text-white">
              Length: {singleShip.length} m.
            </ListGroup.Item>
            <ListGroup.Item className="fw-bold bg-dark text-white">
              Megalights by hour: {singleShip.MGLT} mglt.
            </ListGroup.Item>
          </ListGroup>
          <Col>
            <div className="d-flex flex-column p-3 border-start border-end border-secondary gap-2">
              <h6>
                <mark>Films</mark>
              </h6>
              <small className="fst-italic">
                (Films that this starship has appeared in)
              </small>
              <Films
                ship={singleShip.films}
                handleScroll={props.handleScroll}
              />
            </div>
          </Col>
          <Col>
            <div className="d-flex flex-column p-3 gap-2">
              <h6>
                <mark>Pilots</mark>
              </h6>
              <small className="fst-italic">
                ( People that this starship has been piloted by)
              </small>
              <Pilots ship={singleShip} handleScroll={props.handleScroll} />
            </div>
          </Col>
        </div>
      </Row>
    </Container>
  );
}

export default StarshipDetail;
