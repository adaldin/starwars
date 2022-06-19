import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";

// login md a la derecha
// maquetacion de modal similar a sws
// input declaración
/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
<Form.Check type="checkbox" label="Check me out" />
</Form.Group> */

function Login(props) {
  // states
  const title = props.sign === "login" ? "LOGIN" : "SINGUP";
  const [user, setUser] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [userData, setUserData] = useState([
    { email: "asd@qwe.com", password: "1234", name: "ale" },
  ]);

  const [validated, setValidated] = useState(false);

  // useEffect
  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [userData]);

  // logic
  function updateUser(event) {
    console.log(event.target.type);
    const { type, value } = event.target;
    setUser((prevUser) => {
      return { ...prevUser, [type]: value };
    });
  }

  function submit(event) {
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      userData.filter((user) => {
        if (user.email === email && user.password === password) {
          console.log(`Success: ${email} has logged on`);
        } else {
          event.preventDefault();
          console.log(`Error: ${email} doesn't exist in our bbdd`);
        }
        return userData;
      });
    }
    setValidated(true);
  }

  return (
    <>
      {props.sign === "login" ? (
        <Modal show={props.show} onHide={props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={submit}>
              <h5>ENTER YOUR EMAIL ADDRESS</h5>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  required
                  placeholder="user@mail.com"
                  onChange={updateUser}
                />
                <Form.Control.Feedback type="invalid">
                  Please, fill the password field
                </Form.Control.Feedback>
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  required
                  placeholder="Password"
                  onChange={updateUser}
                />
                <Form.Control.Feedback type="invalid">
                  Please, fill the password field
                </Form.Control.Feedback>
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      ) : (
        "modulo sign up"
      )}
    </>
  );
}

export default Login;
