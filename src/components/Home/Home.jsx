import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Cards from '../Cards/Cards'

function Home() {
  return (
    <div className='home'>
      <Navbar viewSearch={true}/>
      <div className="home__content">
        <Cards/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home