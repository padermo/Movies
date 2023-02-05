import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card';

function Cards() {
  const state = useSelector(state => state.movies);
  return (
    <div className='cards'>
      <div className="cards__elements">
        {
          state.length ?
          state.map(e => (
            <Card key={e.imdbID} imdbID={e.imdbID} title={e.Title} year={e.Year} poster={e.Poster} />
          )):""
        }
      </div>
    </div>
  )
}

export default Cards