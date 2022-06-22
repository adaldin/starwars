import Pilots from "../pilots/Pilots";
import { nanoid } from "nanoid";
function StarshipItem(props) {
  console.log("renderizado starshipitem");
  const ship = props.shipName;
  const model = props.shipModel;
  const pilots = props.shipPilots.map((pilot) => (
    <Pilots key={nanoid()} pilot={pilot} />
  ));

  return (
    <div className="border border-white">
      <h4 className="text-white">{ship}</h4>
      <p className="text-white">{model}</p>
      <p>Pilots:</p>
      {/* aquí card */}
      {pilots}
    </div>
  );
}
export default StarshipItem;
