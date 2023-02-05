import React from "react";
import { useDispatch } from "react-redux";
import { removeFavorite } from "../../redux/actions";

function Favorite({ imdbID, title, year, poster }) {
  const dispatch = useDispatch();

  const handleRemoveFavorite = () => {
    dispatch(removeFavorite(imdbID));
  };

  return (
    <div className="favorite">
      <div className="favorite__poster">
        <img loading="lazy" src={poster} alt="" className="favorite__img" />

        <button className="favorite__remove" onClick={handleRemoveFavorite}>
          <span class="material-symbols-outlined">block</span>
        </button>

        <p className="favorite__year">
          <span>{year}</span>
        </p>
      </div>
      <h2 className="favorite__title">{title}</h2>
    </div>
  );
}

export default Favorite;
