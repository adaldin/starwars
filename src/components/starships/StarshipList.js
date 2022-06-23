import { Link } from "react-router-dom";
import { nanoid } from "nanoid";
import { useEffect } from "react";
function StarshipsList(props) {
  // useEffect
  useEffect(() => {
    props.handleScroll();
  }, []);
  // function on  event window
  window.onscroll = () => checkScroll();

  function checkScroll() {
    if (window.scrollY + window.innerHeight > document.body.scrollHeight) {
      props.handleScroll();
    }
  }
  const ships = props.ships.map((ship, index) => {
    return (
      <div
        key={nanoid()}
        className="bg-black bg-gradient opacity-75 rounded border"
      >
        <Link to={`/starships/${index}`} className="text-decoration-none">
          <h4 className="text-white p-4">{ship.name}</h4>
        </Link>
        <p className="text-white ps-4">{ship.model}</p>
      </div>
    );
  });
  return <> {ships}</>;
}
export default StarshipsList;
