// React
import { useState, useEffect } from "react";
// Nano id
import { nanoid } from "nanoid";

function Films(props) {
  const filmsList = props.ship;

  //   // ***********+States
  const [filmsNames, setFilmsNames] = useState([]);

  //   //   ***********+ UseEffects
  useEffect(() => {
    props.handleScroll(); //eslint-disable-next-line
  }, []);

  useEffect(() => {
    getFilmsNames(filmsList);
  }, [filmsList]);

  // ***********+ Logic
  async function getFilmsNames(filmsList) {
    try {
      let newFilm;
      let totalFilms = [];
      if (filmsList.length > 0) {
        for (let i = 0; i < filmsList.length; i++) {
          const r = await fetch(filmsList[i]);
          const data = await r.json();
          newFilm = data.title;
          totalFilms.push(newFilm);
        }
      }
      setFilmsNames(totalFilms);
    } catch (err) {
      console.error("Server Error", err);
    }
  }

  return (
    <>
      {filmsNames.map((film) => (
        <p key={nanoid()}>{film}</p>
      ))}
    </>
  );
}
export default Films;
