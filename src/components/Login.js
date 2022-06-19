import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

// login md a la derecha
// maquetacion de modal similar a sws
// input declaración
/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
<Form.Check type="checkbox" label="Check me out" />
</Form.Group> */

function Login(props) {
  // states
  const title = props.sign === "login" ? "LOGIN" : "SIGN-UP";
  const [user, setUser] = useState({
    email: "",
    password: "",
    fName: "",
    lName: "",
  });
  const [userData, setUserData] = useState([
    {
      id: nanoid(),
      email: "asd@qwe.com",
      password: "1234",
      fName: "prueba",
      lName: "zaq",
      terms: false,
    },
  ]);

  const [validated, setValidated] = useState(false);

  // useEffect
  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [userData]);

  // logic
  function updateUser(event) {
    const { value, name } = event.target;
    setUser((prevUser) => {
      return { ...prevUser, [name]: value };
    });
  }

  function submit(event) {
    const form = event.target;
    const email = form.email.value.toLowerCase();
    const password = form.password.value;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else if (props.sign === "login") {
      event.preventDefault();
      userData.find((user) => {
        if (user.email === email && user.password === password) {
          console.log(`Success: ${email} has logged on`);
        } else {
          event.preventDefault();
          console.log(`Error: ${email} doesn't exist in our bbdd`);
        }
        return userData;
      });
    } else if (props.sign === "signup") {
      userData.find((user) => {
        if (user.email === email) {
          event.preventDefault();
          console.log(`Error: ${email} is already registered on our bbdd`);
        } else {
          event.preventDefault();
          const fName = form.fName.value.toLowerCase();
          const lName = form.lName.value.toLowerCase();
          const terms = form.terms.checked;
          let newUser = {};
          for (const key in user) {
            newUser = {
              id: nanoid(),
              email: email,
              password: password,
              fName: fName,
              lName: lName,
              terms: terms,
            };
          }
          if (newUser.id !== undefined) {
            setUserData((prevData) => [newUser, ...prevData]);
          }
          console.log(`Success: ${email} registered on our bbdd`);
        }
        return userData;
      });
    }
    setValidated(true);
  }

  return (
    <>
      {props.sign === "login" ? (
        // LOGINNNN
        <Modal show={props.show} onHide={props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={submit}>
              <h5>ENTER YOUR EMAIL ADDRESS</h5>
              {/* email */}
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
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
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  required
                  placeholder="12321da"
                  onChange={updateUser}
                />
              </Form.Group>
              {/* submit */}
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      ) : (
        // REgister
        <Modal show={props.show} onHide={props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={submit}>
              <h5>CREATE YOUR ACCOUNT</h5>
              {/* fname */}
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>First Name</Form.Label>
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
                <Form.Label>Last Name</Form.Label>
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
                <Form.Label>Email</Form.Label>
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
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  required
                  placeholder="desda33"
                  onChange={updateUser}
                />
                {/* terms */}
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    name="terms"
                    label="Yes! I would like to receive by email special offers and updates about Lucasfilm Ltd. and other products and services from The Walt Disney Family of Companies."
                  />
                </Form.Group>
              </Form.Group>
              {/* submit */}
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
}

export default Login;
