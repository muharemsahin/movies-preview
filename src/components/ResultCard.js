import React, {useContext} from 'react'
import {GlobalContext} from "../context/GlobalState";

export const ResultCard = ({movie}) => {
    const {addMovieToMostPopular, addMovieToDetailsMoive, mostpopular, details} = useContext(GlobalContext);

        let storedMovie =  mostpopular.find(o => o.id === movie.id);
        let storedMovieDetails = details.find(o => o.id === movie.id)

        const mostpopularDisabled = storedMovie ? true : storedMovieDetails ? true :false;

        const detailsDisabled = storedMovieDetails ? true : false;
  return (
    <div className="result-card">
        <div className="poster-wrapper">
            {movie.poster_path ? (
                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
                alt={`${movie.title} Poster`}
                />
            ) : (
                <div className="filler-poster"></div>
            )}
        </div>
        
        <div className="info">
            <div className="header">
                <h3 className="title">{movie.title}</h3>
                <h4 className="release-date"> 
                    {movie.release_date ? movie.release_date.substring(0,4) : `-`}
                </h4>
            </div>

            <div className="controls">
                <button className="btn"
                disabled={mostpopularDisabled}
                onClick={() =>addMovieToMostPopular(movie)}> Add to MostPopular
                </button>

                <button className="btn"
                disabled={detailsDisabled}
                onClick={() =>addMovieToDetailsMoive(movie)}> Add to Details
                </button>
            </div>
        </div>
      
    </div>
  )
}


