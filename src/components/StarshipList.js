import { useEffect, useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import { nanoid } from "nanoid";
import StarshipCard from "./StarshipCard";
import Loading from "./Loading";
import GetMore from "./GetMore";
//ToDo:
// arreglar que se sumen a la lista los 10 anteriores
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
        console.log(res);
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
    axios
      .get(nextPage)
      .then((res) => {
        console.log(res);
        setPage(nextPage);
        setNextPage(res.data.next);
      })
      .catch((err) => console.log(err));
  }

  return (
    <Container fluid className="p-3">
      {loading ? (
        <Loading />
      ) : (
        <>
          {starships.map((starship) => (
            <StarshipCard ship={starship} key={nanoid()} />
          ))}
          <div className="d-grid gap-2">
            <GetMore handleClick={viewMore} name="View More" />
          </div>
        </>
      )}
    </Container>
  );
}

export default StarshipList;
