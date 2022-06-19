import Button from "react-bootstrap/Button";
function GetMore(props) {
  return <Button onClick={props.handleClick}>{props.name}</Button>;
}

export default GetMore;
