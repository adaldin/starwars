import { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";

function Pilots(props) {
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
    <Card border="dark" style={{ width: "18rem" }}>
      <div>
        <img
          src="https://starwars-visualguide.com/assets/img/characters/1.jpg"
          className="roundedCircle"
          alt="pilot-face"
        />
      </div>
      <Card.Body>
        <Card.Title>{pilot} pilot.name </Card.Title>
        <Card.Text>pilot.homeworld</Card.Text>
      </Card.Body>
    </Card>
  );
}
export default Pilots;
