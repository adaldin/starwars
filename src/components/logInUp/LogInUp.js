// React
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
// Bootsrap
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// Components
import AuthContext from "../authContext/AuthContext";
// NanoID
import { nanoid } from "nanoid";
// img
import modalHeader from "../../assets/header-modal.png";

function LogInUp(props) {
  // ***********+ UseNavigate
  let navigate = useNavigate();
  // ***********+ Context
  const { auth, setAuth } = useContext(AuthContext);
  // ***********+ States
  const [user, setUser] = useState({
    email: "",
    password: "",
    fName: "",
    lName: "",
    terms: false,
  });
  const [userDataList, setUserDataList] = useState(
    JSON.parse(localStorage.getItem("userDataList")) || []
  );
  const [error, setError] = useState(false);
  const [foundedData, setFoundedData] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // ***********+ UseEffects
  useEffect(() => {
    localStorage.setItem("userDataList", JSON.stringify(userDataList));
  }, [userDataList]);

  useEffect(() => {
    findData(); //eslint-disable-next-line
  }, [handleSignUp, handleLogIn]);

  // ***********+ Logic
  // fc updateUser
  function updateUser(event) {
    const { name, value } = event.target;
    setUser((prevUser) => {
      return {
        ...prevUser,
        [name]: value,
      };
    });
  }

  // fc register
  function handleSignUp(event) {
    if (userDataList.length > 0) {
      findData();
      if (foundedData) {
        event.preventDefault();
        console.error("error: usuario no registrado: ya existe en bbdd");
        setError(true);
      } else {
        console.log("Success: usuario registrado con éxito. Loguéate.");
        let newUser = { ...user, id: nanoid() };
        setUserDataList((prevList) => [newUser, ...prevList]);
        setError(false);
      }
    } else {
      let newUser = { ...user, id: nanoid() };
      setUserDataList((prevList) => [newUser, ...prevList]);
    }
  }

  // fc login
  function handleLogIn(event) {
    if (userDataList.length > 0) {
      findData();
      if (foundedData) {
        setError(false);
        setAuth(true);
        console.log("usuario logueado");
        navigate("/starships", { replace: true });
      } else {
        event.preventDefault();
        setError(true);
        console.log("usuario no logueado: no existe en bbdd");
      }
    } else {
      event.preventDefault();
      setError(true);
      console.log("usuario no logueado: no existe en bbdd");
    }
  }

  // fc find data
  function findData() {
    let foundedUser = userDataList.some(
      (userData) => userData.email === user.email
      // && userData.password === user.password
    );
    foundedUser ? setFoundedData(true) : setFoundedData(false);
  }
  // fc show password
  function togglePassword(e) {
    setShowPassword((showPassword) => !showPassword);
  }

  return (
    <>
      {props.sign === "login" ? (
        <Modal show={props.show} onHide={props.handleClose}>
          <Modal.Header closeButton className="bg-dark">
            <Modal.Title>
              <img
                src={modalHeader}
                alt="Disney and StarwarsLogo"
                className="img-fluid"
              />
            </Modal.Title>
          </Modal.Header>
          {error ? (
            <Modal.Body className="bg-dark">
              <Form onSubmit={handleLogIn}>
                <p>Logged: {auth}</p>
                <h5 className="text-danger">
                  THIS EMAILS DOESN'T EXIST IN OUR RECORDS
                </h5>
                <p className="text-danger">
                  Please, try again, or create an account
                </p>
                {/* email */}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="text-warning">
                    Email address
                  </Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    required
                    placeholder="example@mail.com"
                    onChange={updateUser}
                  />
                </Form.Group>

                {/* password */}
                <Form.Group className="mb-3" controlId="formBasicPasword">
                  <Form.Label className="text-warning">Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    required
                    placeholder="Enter an alphanumeric password"
                    onChange={updateUser}
                  />
                </Form.Group>

                {/* submit */}
                <div className="d-grid">
                  <Button variant="secondary" type="submit">
                    Continue
                  </Button>
                </div>
              </Form>
            </Modal.Body>
          ) : (
            <Modal.Body className="bg-dark">
              <Form onSubmit={handleLogIn}>
                <h5 className="text-warning">ENTER YOUR EMAIL ADDRESS</h5>
                {/* email */}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="text-warning">
                    Email address
                  </Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    required
                    placeholder="example@mail.com"
                    onChange={updateUser}
                  />
                </Form.Group>

                {/* password */}
                <Form.Group className="mb-3" controlId="formBasicPasword">
                  <Form.Label className="text-warning">Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    required
                    placeholder="Enter an alphanumeric password"
                    onChange={updateUser}
                  />
                </Form.Group>
                {/* submit */}
                <div className="d-grid">
                  <Button variant="secondary" type="submit">
                    Continue
                  </Button>
                </div>
              </Form>
            </Modal.Body>
          )}
        </Modal>
      ) : (
        <Modal show={props.show} onHide={props.handleClose}>
          <Modal.Header closeButton className="bg-dark">
            <Modal.Title>
              <img
                src={modalHeader}
                alt="Disney and StarwarsLogo"
                className="img-fluid"
              />
            </Modal.Title>
          </Modal.Header>

          {error ? (
            <Modal.Body className="bg-dark">
              <Form onSubmit={handleSignUp}>
                <h5 className="text-danger">
                  THIS EMAIL IS ALREADY REGISTERED
                </h5>
                <p className="text-danger">
                  Please, change the email, or log in if the account is
                  registered
                </p>
                {/* fname */}
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label className="text-warning">First Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="fName"
                    required
                    placeholder="Michael"
                    onChange={updateUser}
                  />
                </Form.Group>

                {/* lName */}
                <Form.Group className="mb-3" controlId="formBasiclName">
                  <Form.Label className="text-warning">Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="lName"
                    required
                    placeholder="Smith"
                    onChange={updateUser}
                  />
                </Form.Group>

                {/* email */}
                <Form.Group className="mb-3" controlId="formBasiclEmail">
                  <Form.Label className="text-warning">Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    required
                    placeholder="example@mail.com"
                    onChange={updateUser}
                  />
                </Form.Group>

                {/* password */}
                <Form.Group className="mb-3" controlId="formBasiclPassword">
                  <Form.Label className="text-warning">Password</Form.Label>
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    name="password"
                    required
                    placeholder="Enter an alphanumeric password"
                    onChange={updateUser}
                  />
                  {/* Show password */}
                  <Form.Group
                    className="mb-3"
                    controlId="formShowPasswordCheckbox"
                  >
                    <Form.Check
                      type="checkbox"
                      name="showPasword"
                      label="Show password"
                      className="text-secondary"
                      checked={showPassword}
                      onChange={togglePassword}
                    />
                  </Form.Group>
                  {/* terms */}
                  <Form.Group className="mb-3" controlId="formAgreeCheckbox">
                    <Form.Check
                      className="text-secondary"
                      type="checkbox"
                      name="terms"
                      label="Yes! I would like to receive by email special offers and updates about Lucasfilm Ltd. and other products and services from The Walt Disney Family of Companies."
                    />
                  </Form.Group>
                </Form.Group>
                {/* submit */}
                <div className="d-grid">
                  <Button variant="secondary" type="submit">
                    Create Account
                  </Button>
                </div>
              </Form>
            </Modal.Body>
          ) : (
            <Modal.Body className="bg-dark">
              <Form onSubmit={handleSignUp}>
                <h5 className="text-warning">CREATE YOUR ACCOUNT</h5>
                {/* fname */}
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label className="text-warning">First Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="fName"
                    required
                    placeholder="Michael"
                    onChange={updateUser}
                  />
                </Form.Group>

                {/* lName */}
                <Form.Group className="mb-3" controlId="formBasiclName">
                  <Form.Label className="text-warning">Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="lName"
                    required
                    placeholder="Smith"
                    onChange={updateUser}
                  />
                </Form.Group>

                {/* email */}
                <Form.Group className="mb-3" controlId="formBasiclEmail">
                  <Form.Label className="text-warning">Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    required
                    placeholder="example@mail.com"
                    onChange={updateUser}
                  />
                </Form.Group>

                {/* password */}
                <Form.Group className="mb-3" controlId="formBasiclPassword">
                  <Form.Label className="text-warning">Password</Form.Label>
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    name="password"
                    required
                    placeholder="Enter an alphanumeric password"
                  />
                  {/* Show password */}
                  <Form.Group
                    className="mb-3"
                    controlId="formShowPasswordCheckbox"
                  >
                    <Form.Check
                      type="checkbox"
                      name="terms"
                      label="Show password"
                      className="text-secondary"
                      checked={showPassword}
                      onChange={togglePassword}
                    />
                  </Form.Group>
                  {/* terms */}
                  <Form.Group className="mb-3" controlId="formAgreeCheckbox">
                    <Form.Check
                      className="text-secondary"
                      type="checkbox"
                      name="terms"
                      label="Yes! I would like to receive by email special offers and updates about Lucasfilm Ltd. and other products and services from The Walt Disney Family of Companies."
                    />
                  </Form.Group>
                </Form.Group>
                {/* submit */}
                <div className="d-grid">
                  <Button variant="secondary" type="submit">
                    Create Account
                  </Button>
                </div>
              </Form>
            </Modal.Body>
          )}
        </Modal>
      )}
    </>
  );
}

export default LogInUp;
