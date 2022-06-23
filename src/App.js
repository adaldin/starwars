import "./App.css";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import axios from "axios";

import Home from "./pages/Home.js";
import Header from "./components/header/Header.js";
import Menu from "./components/menu/Menu.js";
import LogSign from "./components/logSign/LogSign.js";
import StarshipsList from "./components/starships/StarshipList.js";
import StarshipItem from "./components/starships/StarshipItem.js";
import ProtectedRoute from "./components/protectedRoutes/ProtectedRoute";

function App() {
  const [starships, setStarships] = useState([]);
  const [next, setNext] = useState("https://swapi.dev/api/starships/");
  const [auth, setAuth] = useState(JSON.parse(localStorage.getItem("auth")));

  function handleScroll() {
    let totalStarships = [];
    let addedShips;

    if (next !== null) {
      axios
        .get(next)
        .then((res) => {
          addedShips = res.data.results;
          totalStarships = [...starships, ...addedShips];
          setStarships(totalStarships);
          setNext(res.data.next);
        })
        .catch((err) =>
          console.log(`Starship Instance: ${err.response.data.detail}`)
        );
      // err.response.status
    }
  }

  return (
    <Container fluid className="bg-black app">
      <BrowserRouter>
        <Header />
        <LogSign auth={auth} setAuth={setAuth} />
        <Menu />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/" element={<ProtectedRoute />}>
            <Route
              exact
              path="/starships"
              element={
                <StarshipsList
                  auth={auth}
                  ships={starships}
                  handleScroll={handleScroll}
                />
              }
            ></Route>
            <Route
              exact
              path="/starships/:id"
              element={
                <StarshipItem ships={starships} handleScroll={handleScroll} />
              }
            ></Route>
          </Route>
          <Route path="login" element={<LogSign />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
