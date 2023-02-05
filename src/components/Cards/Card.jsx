import React from "react";
import { useDispatch } from "react-redux";
import { addFavorite } from "../../redux/actions";

function Card({ imdbID, title, year, poster }) {

  const dispatch = useDispatch();

  const data = {
    imdbID,
    title,
    year,
    poster,
  };

  const handleAddFavorite = () => {
    dispatch(addFavorite(data));
  };


  return (
    <div className="card">
      <div className="card__poster">
        <img loading="lazy" src={poster} alt="" className="card__img" />

        <button className="card__favorite" onClick={handleAddFavorite}>
          <span class="material-symbols-outlined">favorite</span>
        </button>

        <p className="card__year">
          <span>{year}</span>
        </p>
      </div>
      <h2 className="card__title">{title}</h2>
    </div>
  );
}

export default Card;
