import { Link } from "react-router-dom";
function Menu() {
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

export default Menu;
