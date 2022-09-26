// React
import { useState, useEffect, useMemo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Bootstrap
import Container from "react-bootstrap/Container";

// Components
import Home from "./pages/Home.js";
import Header from "./components/header/Header.js";
import Menu from "./components/menu/Menu.js";
import StarshipsList from "./components/starships/StarhipList.js";
import StarshipDetail from "./components/starships/StarshipDetail.js";
import ProtectedRoute from "./components/protectedRoutes/ProtectedRoute.js";
import LogOn from "./pages/LogOn.js";
import AuthContext from "./components/authContext/AuthContext.js";

// img
import bgStars from "./assets/bg-body.jpeg";

function App() {
  // ***********+ States
  const [starships, setStarships] = useState([]);
  const [page, setPage] = useState("https://swapi.dev/api/starships");
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useState(
    JSON.parse(localStorage.getItem("auth")) || false
  );
  const [popUp, setPopUp] = useState(false);
  const [btnLogin, setBtnLogin] = useState("");

  const value = useMemo(() => ({ auth, setAuth }), [auth]);

  // ***********+UseEffect
  useEffect(() => {
    getShips(); // eslint-disable-next-line
  }, []);

  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(auth));
  }, [auth]);

  // ***********+Logic
  async function getShips() {
    try {
      if (page !== null) {
        const r = await fetch(page);
        const d = await r.json();
        let loadedShips = d.results;
        let newShips = loadedShips.map((ship) => {
          const url = ship.url;
          const lastChart = url.slice(url.length - 3);
          const numberId = parseInt(lastChart.replace("/", ""));
          return { ...ship, id: numberId };
        });
        let totalShips = [...starships, ...newShips];
        setStarships(totalShips);
        setPage(d.next);
        setLoading(false);
      }
    } catch (err) {
      console.error("Server Error", err);
    }
  }
  // modal
  function handlePopUp(event) {
    const { name } = event.target;
    setPopUp((prevPopUp) => !prevPopUp);
    setBtnLogin(name);
  }

  function handleClose() {
    setPopUp((prevPopUp) => !prevPopUp);
  }

  return (
    <AuthContext.Provider value={value}>
      <Container
        fluid
        className="bg-black"
        style={{ backgroundImage: `url(${bgStars})` }}
      >
        <BrowserRouter>
          <Header
            auth={auth}
            setAuth={setAuth}
            handlePopUp={handlePopUp}
            handleClose={handleClose}
            popUp={popUp}
            btnLogin={btnLogin}
          />
          <Menu />
          <Routes>
            <Route path="/" element={<Home auth={auth} setAuth={setAuth} />} />
            <Route path="/" element={<ProtectedRoute auth={auth} />}>
              <Route
                path="/starships"
                element={
                  <StarshipsList
                    ships={starships}
                    handleScroll={getShips}
                    loading={loading}
                    auth={auth}
                  />
                }
              />
              <Route
                path="/starships/:id"
                element={
                  <StarshipDetail ships={starships} handleScroll={getShips} />
                }
              />
            </Route>
            <Route path="login" element={<LogOn auth={auth} />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </AuthContext.Provider>
  );
}
export default App;
