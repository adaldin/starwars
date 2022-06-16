import { useEffect, useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import { nanoid } from "nanoid";
import StarshipCard from "./StarshipCard";
import useInfiniteScroll from "./useInfiniteScroll";

function StarshipList() {
  // states
  const [starships, setStarships] = useState(
    //         a new object that contains the keys for each index in
    //          object- element  /   function mapFn(element +1)
    Array.from(Array(10).keys(), (n) => n + 1)
  );
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);

  // useEffect
  useEffect(() => {
    axios
      .get("https://swapi.dev/api/starships/")
      .then((res) => {
        console.log(res.data);
        let data = res.data.results;
        console.log(data);
        setStarships(data);
      })
      .catch((err) => console.log(err));
  }, []);

  //logic

  function fetchMoreListItems() {
    setTimeout(() => {
      setStarships((prevState) => [
        ...prevState,
        ...Array.from(Array(10).keys(), (n) => n + prevState.length + 1),
      ]);
      setIsFetching(false);
    }, 2000);
  }

  return (
    <Container fluid className="p-3">
      {starships.map((starship) => {
        return (
          // hacer for in de propiedades excepto
          // films
          // pilots
          // created
          // edited
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
      {isFetching && "Loading"}
    </Container>
  );
}

export default StarshipList;
