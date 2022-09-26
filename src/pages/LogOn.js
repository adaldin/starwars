// img
import darkVader from "../assets/starwars-hd-png-star-wars-darth-vader-render-png-by-jonathanrey-946.png";
// React

function LogOn(props) {
  return (
    <div>
      {props.auth ? (
        <h3>Now you can enjoy our home and starships</h3>
      ) : (
        <>
          <div className="d-flex flex-column align-items-center p-5">
            <img
              src={darkVader}
              alt="DarkVader"
              className="img-fluid"
              style={{ width: "600px" }}
            />
            <h3 className="text-warning">Please log in to see the starships</h3>
          </div>
        </>
      )}
    </div>
  );
}
export default LogOn;
