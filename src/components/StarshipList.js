import { useEffect, useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import { nanoid } from "nanoid";
import StarshipCard from "./StarshipCard";

function StarshipList() {
  // states
  const [starships, setStarships] = useState([]);

  // useEffect
  useEffect(() => {
    axios
      .get("https://swapi.dev/api/starships/")
      .then((res) => {
        let data = res.data.results;
        console.log(data);
        setStarships(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container fluid className="bg-secondary">
      {starships.map((starship) => {
        return (
          <StarshipCard
            key={nanoid()}
            name={starship.name}
            model={starship.model}
            shipClass={starship.starship_class}
            manufacturer={starship.manufacturer}
            cost={starship.cost_in_credits}
            length={starship.length}
            crew={starship.crew}
            passengers={starship.passengers}
            speed={starship.max_atmosphering_speed}
            hyperdrive={starship.hyperdrive_rating}
            mglt={starship.MGLT}
            cargo={starship.cargo_capacity}
            consumables={starship.consumables}
          />
        );
      })}
    </Container>
  );
}

export default StarshipList;
