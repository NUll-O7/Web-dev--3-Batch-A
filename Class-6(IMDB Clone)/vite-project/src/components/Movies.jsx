import React from 'react'
import MovieCard from './MovieCard'

function Movies() {
  return (
    <div>
       <div className="">
         <h1>Trending Movies</h1>
       </div>
       <div className=" ">
         <MovieCard />
       </div>
     </div>
  )
}

export default Movies