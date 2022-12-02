import React, { useContext } from 'react'
import { GlobalContext } from "../context/GlobalState"
import {MovieCard} from "./MovieCard";

export const MostPopular = () => {
  const {mostpopular} = useContext(GlobalContext);
  return (
   <div className="movie-page">
     <div className="container">
       <div className="header">
         <h1 className="heading">My PopularList</h1>

         <span className="count-pill">{mostpopular.length} Movie</span>
       </div>

       {mostpopular.length > 0 ? (

<div className="movie-grid">
{mostpopular.map((movie) => (
  <MovieCard movie={movie} type="mostpopular" />
))}
</div>
       ) : (
         <h2 className="no-movies">No movies in your list, add some!</h2>
       )}
       
     </div>
   </div>
  )
}


