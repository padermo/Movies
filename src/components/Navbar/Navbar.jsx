import React from 'react'
import Searchbar from '../Searchbar/Searchbar'
import { useNavigate } from 'react-router'
import logo from '../../assets/logo.png'

function Navbar({viewSearch}) {

  const navigate = useNavigate();

  const handleToHome = () => {
    navigate("/")
  }

  const handleToFavorite = () => {
    navigate("/favorite")
  }

  return (
    <div className='navbar'>
      <div className="navbar__elements">
        <figure className="navbar__picture">
          <img src={logo} alt="logo" className="navbar__img" />
        </figure>

        <section className="navbar__menu">
          <button className='navbar__button navbar__link' onClick={handleToHome}>
            <h2 className="navbar__text">Home</h2>
          </button>
          <button className='navbar__button navbar__link' onClick={handleToFavorite}>
            <h2 className="navbar__text">Favorite</h2>
          </button>
        </section>

        <div className="navbar__searchbar">
          {viewSearch === true ? <Searchbar/> : ""}
        </div>
      </div>
    </div>
  )
}

export default Navbar