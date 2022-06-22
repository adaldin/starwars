import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home.js";
import axios from "axios";
import { useParams } from "react-router-dom";

import Header from "./components/header/Header.js";
import Menu from "./components/starships/menu/Menu.js";
import LogSign from "./components/logSign/LogSign.js";
import StarshipsList from "./components/starships/StarshipList.js";

function App() {
  console.log("renderizado app");
  const [starships, setStarships] = useState([]);
  const [next, setNext] = useState("https://swapi.dev/api/starships/");
  // const [auth, setAuth] = useState(localStorage.getItem("auth"));
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    let totalStarships = [];
    let addedShips;

    if (next !== null) {
      axios
        .get(next)
        .then((res) => {
          // console.log(res);
          addedShips = res.data.results;
          totalStarships = [...starships, ...addedShips];
          setStarships(totalStarships);
          setNext(res.data.next);
        })
        .catch((err) => console.log(err));
    }
  }, [next]);

  // // useEffect
  // useEffect(() => {
  //   let isAuth = JSON.parse(localStorage.getItem("auth"));
  //   if (isAuth) {
  //     setAuth(isAuth);
  //   }
  // }, []);

  return (
    <Container fluid className="bg-black">
      <BrowserRouter>
        <Header />
        <LogSign auth={auth} setAuth={setAuth} />
        <Menu />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            exact
            path="/starships"
            element={<StarshipsList auth={auth} ships={starships} />}
          ></Route>
          <Route
            path="/starships/:id"
            element={<StarshipDetail ships={starships} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;

export function StarshipDetail() {
  let { id } = useParams();
  console.log("renderizado StarshipDetail");

  return <p className="text-white">{id}</p>;
}
