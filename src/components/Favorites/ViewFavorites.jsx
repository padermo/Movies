import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Favorites from './Favorites'

function ViewFavorites() {
  return (
    <div className='viewfavorites'>
      <Navbar/>
      <div className="viewfavorites__content">
        <Favorites/>
      </div>
      <Footer/>
    </div>
  )
}

export default ViewFavorites