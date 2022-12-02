import React, { useContext } from 'react'
import { GlobalContext } from "../context/GlobalState";
import { MovieCard } from "./MovieCard";

export const DetailsMovie = () => {
  const { details } = useContext(GlobalContext);
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Details</h1>
        </div>

        {details.length > 0 ? (

          <div className="movie-grid">
            {details.map((movie) => (
              <MovieCard movie={movie} type="details" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No movies in your list, add some!</h2>
        )}

      </div>
    </div>
  )
}


