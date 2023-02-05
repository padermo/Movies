import React from "react";
import Home from "./components/Home/Home";
import ViewFavorites from "./components/Favorites/ViewFavorites";
import { Route, Routes } from "react-router";
import "./utils/css/style.css";
import "./utils/css/normalize.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/favorite" element={<ViewFavorites/>}/>
      </Routes>
    </div>
  );
}

export default App;
