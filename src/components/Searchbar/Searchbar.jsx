import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getMoviesByName } from "../../redux/actions";

function Searchbar() {
  const [captureInput, setCaptureInput] = useState("");
  const [viewAlert, setViewAlert] = useState();

  const dispatch = useDispatch();

  const handleOnChangeInput = (e) => {
    setCaptureInput(e.target.value);
  };

  const handleOnClick = () => {
    if (!captureInput) {
      setViewAlert(<p className="error">Ingrese un nombre.</p>);
      setTimeout(() => {
        setViewAlert();
      }, 2000);
    } else {
      dispatch(getMoviesByName(captureInput));
      setCaptureInput("");
    }
  };

  return (
    <div className="searchbar">
      <div className="searchbar__element">
        <input
          type="search"
          value={captureInput}
          className="searchbar__input"
          onChange={handleOnChangeInput}
        />
        <button className="searchbar__btn" onClick={handleOnClick}>
          <span className="material-symbols-outlined">search</span>
        </button>
      </div>
      <div className="searchbar__alert">{viewAlert && viewAlert}</div>
    </div>
  );
}

export default Searchbar;
