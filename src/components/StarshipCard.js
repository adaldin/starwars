import ListGroup from "react-bootstrap/ListGroup";

function StarshipCard(props) {
  return (
    <ListGroup as="ul" className="bg-secondary">
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        {/* passengers={starship.passengers}
            speed={starship.max_atmosphering_speed}
            hyperdrive={starship.hyperdrive_rating}
            mglt={starship.MGLT}
            cargo={starship.cargo_capacity}
            consumables={starship.consumables} */}

        <h4>Name: {props.name}</h4>
        <p>Model: {props.model}</p>
        <p>Ship Class: {props.shipClass}</p>
        <p>Manufacturer: {props.manufacturer}</p>
        <p>Cost: {props.cost}</p>
        <p>Length: {props.length}</p>
        <p>Crew: {props.crew}</p>
        <p>Passengers: {props.passengers}</p>
        <p>Speed: {props.speed}</p>
        <p>Hyperdrive Rating: {props.hyperdrive}</p>
        <p>MGLT: {props.mglt}</p>
        <p>Cargo Capacity: {props.cargo}</p>
        <p>Consumables: {props.consumables}</p>
      </ListGroup.Item>
    </ListGroup>
  );
}

export default StarshipCard;
