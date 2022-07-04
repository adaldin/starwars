import "./menu.css";
// React
import { Link } from "react-router-dom";

// Bootstrap
import Nav from "react-bootstrap/Nav";

function Menu() {
  return (
    <Nav
      variant="tabs"
      defaultActiveKey="/home"
      className="d-flex justify-content-center d-none d-md-flex"
    >
      <Nav.Item>
        <Nav.Link as={Link} to="/" href="/home">
          HOME
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          as={Link}
          to="/starships"
          eventKey="link-1"
          className="text-decoration-none"
        >
          STARSHIPS
        </Nav.Link>
      </Nav.Item>
      <Nav.Item></Nav.Item>
    </Nav>

    // <ul className="d-flex gap-3">
    //   <li>
    //     <Link to="/">HOME</Link>
    //   </li>
    //   <li>
    //     <Link to="starships">STARSHIPS</Link>
    //   </li>
    // </ul>
  );
}

export default Menu;
