import React from 'react'
import { useSelector } from 'react-redux'
import Favorite from './Favorite';

function Favorites() {
  const state = useSelector(state => state.favorite);
  return (
    <div className='favorites'>
      <div className="favorites__elements">
        {
          state.length ? 
          state.map(e => (
            <Favorite key={e.imdbID} imdbID={e.imdbID} title={e.title} year={e.year} poster={e.poster}/>
          )):""
        }
      </div>
    </div>
  )
}

export default Favorites