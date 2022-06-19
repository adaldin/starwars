import Spinner from "react-bootstrap/Spinner";
function Loading() {
  return (
    <div className="d-flex gap-2">
      <Spinner animation="grow" variant="light" />
      <p className="text-white"> Loading</p>
    </div>
  );
}
export default Loading;
