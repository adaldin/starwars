import { useState, useEffect } from "react";
import axios from "axios";

function Pilots(props) {
  console.log("renderizado pilots");
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
export default Pilots;
