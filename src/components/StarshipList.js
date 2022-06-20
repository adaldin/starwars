import { useEffect, useState } from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";
import { nanoid } from "nanoid";
import StarshipCard from "./StarshipCard";
import Loading from "./Loading";
import GetMore from "./GetMore";

//ToDo:
// arreglar que se sumen a la lista los 10 anteriores
//tipografía de sw
//welcome de más cosas
// bg-img estrellas

function StarshipList() {
  // states
  const [starships, setStarships] = useState([]);
  const [page, setPage] = useState("https://swapi.dev/api/starships/");
  const [prevPage, setPrevPage] = useState("");
  const [nextPage, setNextPage] = useState("");
  // const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [shipsCount, setShipsCount] = useState(0);

  // useEffect
  useEffect(() => {
    axios
      .get(page)
      .then((res) => {
        // console.log(res);
        setStarships(res.data.results);
        setPrevPage(res.data.previous);
        setNextPage(res.data.next);
        setLoading(false);
        setShipsCount(res.data.count);
        // setTotalPages(Math.ceil(shipsCount / res.data.results.length));
      })
      .catch((err) => console.log(err)); // eslint-disable-next-line
  }, [page]);

  //logic
  function viewMore() {
    if (nextPage !== null) {
      axios
        .get(nextPage)
        .then((res) => {
          console.log(res);
          setPage(nextPage);
          setNextPage(res.data.next);
          let moreShips = res.data.results;
          // console.log(moreShips);
          setStarships((prevShips) => prevShips.concat(moreShips));
        })
        .catch((err) => console.log(err));
    } else {
      console.log("No more Starships");
    }
  }

  return (
    <Row className="p-3 bg-black justify-content-center align-items-center">
      {loading ? (
        <Loading />
      ) : (
        <>
          <ListGroup as="ul" className="d-flex">
            {starships.map((starship) => (
              <StarshipCard ship={starship} key={nanoid()} />
            ))}
          </ListGroup>
          <div className="d-grid gap-2">
            <GetMore handleClick={viewMore} name="View More" />
          </div>
        </>
      )}
    </Row>
  );
}

export default StarshipList;
