import React, { useState } from 'react'
import { movies } from './movieData'


function Movies() {
  const [movieData , setMovieData]=useState([])


  function getData(){
    setMovieData(JSON.stringify(movies))
  }


  return (
    <div>
      <button onClick={getData}>Get Data</button>
       <h4>{movieData}</h4>
    </div>
  )
}

export default Movies