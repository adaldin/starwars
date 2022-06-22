import StarshipItem from "./StarshipItem";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";
function StarshipsList(props) {
  console.log("renderizado starshiplist");
  const ships = props.ships.map((ship, index) => {
    return (
      <Link
        key={nanoid()}
        to={`/starships/${index + 1}`}
        className="text-decoration-none"
      >
        <StarshipItem
          shipName={ship.name}
          shipModel={ship.model}
          shipPilots={ship.pilots}
        ></StarshipItem>
      </Link>
    );
  });
  return <div>{ships}</div>;
}
export default StarshipsList;
