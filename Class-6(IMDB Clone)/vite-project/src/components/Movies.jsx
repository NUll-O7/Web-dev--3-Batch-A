// https://api.themoviedb.org/3/movie/popular?language=en-US&page=1

import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from 'axios'

function Movies() {

  const [movies , setMovies] = useState([])
  const [pageNo , setPageNo] = useState(1)


  

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=3aec63790d50f3b9fc2efb4c15a8cf99&language=en-US&page=${pageNo}`
      )
      .then((response) => {
        console.log(response.data.results)
        setMovies(response.data.results)
      
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

 

  return (
    <div>
      <div className="text-2xl font-bold text-center m-5">
        <h1>Trending Movies</h1>
      </div>
      <div className="flex justify-evenly flex-wrap gap-8  ">
        {movies.map((movieObj)=>{
          return <MovieCard movieObj={movieObj}/>
        })}
      </div>
    </div>
  );
}

export default Movies;
