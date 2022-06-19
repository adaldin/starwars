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
      email: "asd@qwe.com",
      password: "1234",
      fName: "ale",
      lName: "zaq",
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
    const email = form.email.value;
    const password = form.password.value;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else if (props.sign === "login") {
      userData.filter((user) => {
        if (user.email === email && user.password === password) {
          console.log(`Success: ${email} has logged on`);
        } else {
          event.preventDefault();
          console.log(`Error: ${email} doesn't exist in our bbdd`);
        }
        return userData;
      });
    } else if (props.sign === "signup") {
      userData.filter((user) => {
        if (user.email === email && user.password === password) {
          event.preventDefault();
          console.log(`Error: ${email} is already registered on our bbdd`);
        } else {
          const fName = form.fName.value;
          const lName = form.lName.value;
          let newUser = {};
          for (const key in user) {
            newUser = {
              id: nanoid(),
              email: email,
              password: password,
              fName: fName,
              lName: lName,
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

  // function submit(event) {
  //   event.preventDefault();
  //   const form = event.target;
  //   const email = form.email.value;
  //   const password = form.password.value;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }
  //   const validation = validateData(form);
  //   if (!validation) {
  //     console.log(
  //       `The direction ${email} doesn't exist in our bbdd. Please Sign up.`
  //     );
  //   } else if(validation &&props.sign==="login"){
  //     console.log(`Success: ${email} is log on`)
  //   } else if()
  //   // else if (props.sign === "login") {
  //   //   //filter in usedData any element (object) that has an user.email==email &&user.password==password
  //   //   const dataExists = validateData(form);
  //   // } else if (props.sign === "signup") {
  //   //   //filter in usedData any element (object) that has an user.email==email &&user.password==password
  //   //   //  if it doesnt exits: set userData object
  //   //   // if exist: error, ya existe
  //   // }
  //   setValidated(true);
  // }
  // function validateData(form) {
  //   // get inputs,
  //   const email = form.email.value;
  //   const password = form.password.value;
  //   const founded = false;

  //   // filter them on user data
  //   const filteredValues = userData.find((user) => {
  //     if (user.email === email && user.password == password) {
  //       founded = true;
  //     }
  //     return founded;
  //   });
  //   return founded;
  // }

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
