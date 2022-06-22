import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import logo from "./assets/star_wars_logo.png";
import { Link, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home.js";
import axios from "axios";
import { useParams } from "react-router-dom";

function App() {
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
  }, [next, starships]);

  // const simulatedData = [
  //   {
  //     name: "starshipX",
  //     model: "modelX",
  //     pilots: [{ name: "chewaca" }, { name: "hanSolo" }],
  //     films: [{ title: "episode-1" }, { title: "episode-2" }],
  //   },
  //   {
  //     name: "starshipY",
  //     model: "modelY",
  //     pilots: [{ name: "Leila" }, { name: "dark-wader" }],
  //     films: [{ title: "the dark night" }, { title: "revival" }],
  //   },
  // ];

  // useEffect
  useEffect(() => {
    let isAuth = JSON.parse(localStorage.getItem("auth"));
    if (isAuth) {
      setAuth(isAuth);
    }
  }, []);

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

export function Header() {
  // position absolute fixed
  return (
    <header className="bg-black">
      <div>
        <img src={logo} alt="starwars logo" style={{ width: "250px" }} />
      </div>
      <input placeholder="Search 🔎" />
    </header>
  );
}

export function LogSign() {
  // position relative a header

  return (
    <div className="d-flex gap-2 border">
      <button>LOGIN</button>
      <p className="text light"> / /</p>
      <button>SIGNUP</button>
    </div>
  );
}

export function StarshipsList(props) {
  // props recibirá el  listado de naves [{starship}]
  // const ships = props.ships.map((ship) => {
  //   <StarshipItem key={nanoid()} shipName={ship.name} shipModel={ship.model}>
  //     <Pilots pilots="variable-pilots-fetched"></Pilots>
  //   </StarshipItem>;
  // });
  const ships = props.ships.map((ship, i) => {
    // let pilotsList=[]
    // const pilotsList=props.ships.pilots.map(pilot=>{
    //fc  async fetch (pilot){
    // const pilotName=data.name
    // pilotsList.push(pilotName)
    // })

    return (
      <Link
        key={nanoid()}
        to={`/starships/${parseInt(i) + 1}`}
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

export function StarshipItem(props) {
  let { id } = useParams();
  const ship = props.shipName;
  const model = props.shipModel;
  const pilots = props.shipPilots.map((pilot) => (
    <Pilots key={nanoid()} pilot={pilot} />
  ));

  return (
    <div className="border border-white">
      <h4 className="text-white">{ship}</h4>
      <p className="text-white">{model}</p>
      <p>Pilots:</p>
      {pilots}
    </div>
  );
}
export function Pilots(props) {
  const [pilots, setPilots] = useState([]);
  const nameURL = props.pilot;

  function getPilotsNames() {
    let totalPilots = [];
    let pilotName;
    axios
      .get(nameURL)
      .then((res) => {
        pilotName = res.data.name;
        totalPilots.push(pilotName);
        setPilots(totalPilots);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getPilotsNames();
  }, [nameURL]);

  const pilot = pilots.map((p) => p);

  return (
    <div>
      <h6>{pilot}</h6>
    </div>
  );
}

export function Menu() {
  return (
    <ul className="d-flex gap-3">
      <li>
        <Link to="/">HOME</Link>
      </li>
      <li>
        <Link to="starships">STARSHIPS</Link>
      </li>
    </ul>
  );
}

export function StarshipDetail(props) {
  let { id } = useParams();
  const

  return <p className="text-white">{id}</p>;
}
