import "./header.css";
// React
import { Link } from "react-router-dom";
// Components
import LogInUp from "../logInUp/LogInUp";
import LogOut from "../logOut/LogOut";
// Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Stack from "react-bootstrap/Stack";
// img
import logo from "../../assets/star_wars_logo.png";
import logoSm from "../../assets/sw_logo_horiz.png";
import magGlassIcon from "../../assets/icon_search-957a123fdb62.svg";
import kidsIcon from "../../assets/icon_kids-dc39fc54f6c2.svg";
import bgStars from "../../assets/bg-body.jpeg";

function Header(props) {
  let expand = false;
  return (
    <Navbar
      bg="black"
      expand="lg"
      className="border-bottom border-secondary"
      style={{ backgroundImage: `url(${bgStars})` }}
    >
      <Container fluid>
        <Row className="w-100">
          {/* col 1 */}
          <Col>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton className="bg-secondary">
                <Offcanvas.Title
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                  className="text-light"
                >
                  LOG IN // SIGN UP
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="bg-black">
                <Nav className="justify-content-end flex-grow-1 pe-3 d-lg-none">
                  <Nav.Link href="/" className="text-light">
                    HOME
                  </Nav.Link>
                  <Nav.Link href="/starships" className="text-light">
                    STARSHIPS
                  </Nav.Link>
                </Nav>
                <Col className="order-sm-1 order-lg-1">
                  <Stack
                    direction="horizontal"
                    className="justify-content-center p-1 "
                    gap={2}
                  >
                    <Button variant="black">
                      <i className="bi bi-facebook text-secondary"></i>
                    </Button>
                    <Button variant="white">
                      <i className="bi bi-instagram text-secondary"></i>
                    </Button>
                    <Button variant="white">
                      <i className="bi bi-twitter text-secondary"></i>
                    </Button>
                    <Button variant="white">
                      <i className="bi bi-youtube text-secondary"></i>
                    </Button>
                    <div className="vr bg-light"></div>
                    <Button variant="white">
                      <div className="badge rounded-pill bg-secondary d-flex justify-content-center">
                        <img
                          src={kidsIcon}
                          alt="kids-icon"
                          style={{ width: "30px" }}
                        />
                      </div>
                    </Button>
                  </Stack>
                </Col>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll" className="bg-black">
              <Col className="order-sm-1 order-lg-1">
                <Stack
                  direction="horizontal"
                  className="justify-content-center p-1 d-lg-none"
                  gap={2}
                >
                  <Button variant="black">
                    <i className="bi bi-facebook text-secondary"></i>
                  </Button>
                  <Button variant="black">
                    <i className="bi bi-instagram text-secondary"></i>
                  </Button>
                  <Button variant="black">
                    <i className="bi bi-twitter text-secondary"></i>
                  </Button>
                  <Button variant="black">
                    <i className="bi bi-youtube text-secondary"></i>
                  </Button>
                  <div className="vr bg-light"></div>
                  <Button variant="black">
                    <div className="badge rounded-pill bg-secondary d-flex justify-content-center">
                      <img
                        src={kidsIcon}
                        alt="kids-icon"
                        style={{ width: "30px" }}
                      />
                    </div>
                  </Button>
                </Stack>
              </Col>
            </Navbar.Collapse>
          </Col>

          {/* col 2 */}
          <Navbar.Brand
            as={Col}
            href="../../public/index.html"
            className="d-flex"
          >
            <Link className="col-md-4 mx-auto w-100" to="/">
              <img
                className="d-none d-lg-block mx-auto"
                src={logo}
                style={{ width: "250px" }}
                alt="star-wars-logo-lg"
              />
              <img
                className="d-lg-none"
                src={logoSm}
                style={{ width: "200px" }}
                alt="star-wars-logo-sm"
              />
            </Link>
          </Navbar.Brand>

          {/* col 3 */}
          <Col className="d-flex flex-column justify-content-center align-items-end gap-2">
            <Form className="w-100">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                style={{
                  backgroundColor: "#242424",
                  backgroundImage: `url(${magGlassIcon})`,
                  backgroundSize: "1rem",
                  backgroundPosition: "90% 50%",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </Form>

            {props.auth ? (
              <LogOut auth={props.auth} setAuth={props.setAuth} />
            ) : (
              <Stack
                direction="horizontal"
                gap={3}
                className="justify-content-end d-none d-lg-flex"
              >
                <Button
                  name="login"
                  className="text-muted fw-bold"
                  variant="black"
                  onClick={props.handlePopUp}
                >
                  LOGIN
                </Button>
                <div className="text-muted fw-bold">/</div>
                <div className="text-muted fw-bold">/</div>
                <Button
                  name="signup"
                  className="text-muted fw-bold"
                  variant="black"
                  onClick={props.handlePopUp}
                >
                  SIGNUP
                </Button>
                <LogInUp
                  show={props.popUp}
                  handleClose={props.handleClose}
                  sign={props.btnLogin}
                  auth={props.auth}
                  setAuth={props.setAuth}
                />
                ;
              </Stack>
            )}
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}
export default Header;
