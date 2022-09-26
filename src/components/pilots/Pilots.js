// React
import { useState, useEffect } from "react";
// Nano id
import { nanoid } from "nanoid";

function Pilots(props) {
  const pilotList = props.ship.pilots;

  // ***********+States
  const [pilotsNames, setPilotsNames] = useState([]);

  //   ***********+ UseEffects
  useEffect(() => {
    props.handleScroll(); //eslint-disable-next-line
  }, []);

  useEffect(() => {
    getPilotsNames(pilotList);
  }, [pilotList]);

  // ***********+ Logic
  async function getPilotsNames(pilotList) {
    try {
      let newPilot;
      let totalPilots = [];
      if (pilotList.length > 0) {
        for (let i = 0; i < pilotList.length; i++) {
          const r = await fetch(pilotList[i]);
          const data = await r.json();
          newPilot = data.name;
          totalPilots.push(newPilot);
        }
      }
      setPilotsNames(totalPilots);
    } catch (err) {
      console.error("Server Error", err);
    }
  }

  return (
    <>
      {pilotsNames.length > 0 ? (
        pilotsNames.map((pilot) => <p key={nanoid()}>{pilot}</p>)
      ) : (
        <p>No pilots for this starship</p>
      )}
    </>
  );
}
export default Pilots;
