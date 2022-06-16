// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
// import StarshipCard from "./components/StarshipCard";

function App() {
  // states
  const [starships, setStarships] = useState([]);
  // const [url, setUrl] = useState(`https://swapi.dev/api/starships/`);

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

  // const data = starships.map((starship, index) => {
  //   return <StarshipCard starships={starships} key={starship[index]} />;
  // });

  return (
    <Container fluid>
      <div className="d-flex flex-row border border-primary">
        <ul>
          {starships.map((starship, index) => {
            return (
              <li key={index}>
                <h4> {starship.name}</h4>
                <p>{starship.model}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </Container>
  );
}

export default App;
