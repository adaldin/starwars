import "./starshipItem.css";
// React
import { useEffect } from "react";
// Components
import StarshipItem from "./StarshipItem.js";
import Loading from "../loading/Loading.js";
// Nano id
import { nanoid } from "nanoid";

function StarshipsList(props) {
  // ***********+ UseEffects
  useEffect(() => {
    props.handleScroll();
    checkScroll(); // eslint-disable-next-line
  }, []);

  // ***********+ Logic
  window.onscroll = (event) => checkScroll(event);
  function checkScroll(event) {
    if (window.scrollY > 300) {
      props.handleScroll();
    }
  }

  return (
    <div className="d-flex flex-column gap-3 p-5 ">
      {props.loading ? (
        <Loading />
      ) : (
        props.ships.map((ship) =>
          ship !== null ? <StarshipItem key={nanoid()} ship={ship} /> : ""
        )
      )}
    </div>
  );
}
export default StarshipsList;
