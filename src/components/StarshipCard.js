import ListGroup from "react-bootstrap/ListGroup";

function StarshipCard(props) {
  return (
    <ListGroup as="ul">
      <ListGroup.Item
        as="li"
        className="d-flex flex-column justify-content-between align-items-start p-4 my-4"
      >
        <h4>Name: {props.ship.name}</h4>
        <p>Model: {props.ship.model}</p>
        <p>Ship Class: {props.ship.shipClass}</p>
        <p>Manufacturer: {props.ship.manufacturer}</p>
        <p>Cost: {props.ship.cost_in_credits}</p>
        <p>Length: {props.ship.length}</p>
        <p>Crew: {props.ship.crew}</p>
        <p>Passengers: {props.ship.passengers}</p>
        <p>Speed: {props.ship.max_atmosphering_speed}</p>
        <p>Hyperdrive Rating: {props.ship.hyperdrive}</p>
        <p>MGLT: {props.ship.MGLT}</p>
        <p>Cargo Capacity: {props.ship.cargo_capacity}</p>
        <p>Consumables: {props.ship.consumables}</p>
      </ListGroup.Item>
    </ListGroup>
  );
}

export default StarshipCard;
