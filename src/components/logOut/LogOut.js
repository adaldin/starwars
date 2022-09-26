// Bootstrap
import Button from "react-bootstrap/Button";

function LogOut(props) {
  function handleLogOut() {
    props.setAuth(false);
  }

  return (
    <Button
      name="logOut"
      className="fw-bold"
      variant="outline-secondary"
      onClick={handleLogOut}
    >
      LOGOUT
    </Button>
  );
}
export default LogOut;
