import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function StarshipItem(props) {
  return (
    <Card className="bg-black bg-gradient p-3 rounded-2 card--container">
      <Link
        to={`/starships/${props.ship.id}`}
        className="text-decoration-none card--tittle"
      >
        <h3>{props.ship.name}</h3>
      </Link>
      <p className="card--description">{props.ship.model}</p>
    </Card>
  );
}
export default StarshipItem;
