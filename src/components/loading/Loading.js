import Spinner from "react-bootstrap/Spinner";
function Loading() {
  return (
    <div className="d-flex gap-2 justify-content-center sticky-top">
      <Spinner animation="grow" variant="light" />
      <p className="text-light"> Loading</p>
    </div>
  );
}
export default Loading;
