import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import noImg from "../../assets/no-img.jpg";
import Pilots from "../pilots/Pilots";

function StarshipItem(props) {
  // state
  const [img, setImg] = useState("");
  const [description, setDescription] = useState("");
  // params
  const params = useParams();
  const index = parseInt(params.id);
  // console.log(params.id);
  useEffect(() => {
    getData();
    getDescriptions();
    getImg();
  }, []);

  function getData() {
    if (props.ships.length === 0) {
      props.handleScroll();
    } else {
      getImg();
      getDescriptions();
    }
  }

  function getImg() {
    //ponerlo dentro de funcion y use effect
    // get number from url to load src with that number
    const url = props.ships[index].url;
    const lastChart = url.slice(url.length - 3);
    const numberImg = parseInt(lastChart.replace("/", ""));
    const img = `https://starwars-visualguide.com/assets/img/starships/${numberImg}.jpg`;
    setImg(img);
  }
  function getDescriptions() {
    let printedData = "";
    for (const key in props.ships[index]) {
      if (
        typeof props.ships[index][key] !== "array" &&
        key !== "created" &&
        key !== "edited" &&
        key !== "url"
      ) {
        printedData = props.ships[index][key];
        setDescription(printedData);
      }
    }
  }
  return (
    <div className="bg-black bg-gradient">
      <img
        className="img-thumbnail"
        src={img}
        alt={`${props.ships[index].name} ship on space`}
        onError={(e) => {
          e.currentTarget.src = noImg;
        }}
      />
      <div className="p-4">
        <h4 className="text-white">{props.ships[index].name}</h4>
        <ul>
          <li>{description}</li>
        </ul>
        <Pilots></Pilots>
      </div>
    </div>
  );
}
export default StarshipItem;
