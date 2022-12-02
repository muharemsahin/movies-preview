import React, { useContext } from 'react'
import { GlobalContext } from "../context/GlobalState";

export const MovieControls = ({ movie, type }) => {
    const { removeMovieFromPopularList, addMovieToDetailsMoive, moveToMostPopular, removeFromDetails } = useContext(GlobalContext);

    return (
        <div className="inner-card-controls">
            {type === "mostpopular" && (
                <>
                    <button className="ctrl-btn" onClick={() => addMovieToDetailsMoive(movie)}>
                        <i className="fa-fw far fa-eye"></i>
                    </button>

                    <button className="ctrl-btn"
                        onClick={() => removeMovieFromPopularList(movie.id)}>
                        <i className="fa-fw fa fa-times"></i>
                    </button>
                </>
            )}
            {type === "details" &&
                (
                    <>
                        <button className="ctrl-btn"  onClick={() => moveToMostPopular(movie)}>
                            <i className="fa-fw far fa-eye-slash"></i>
                        </button>

                        <button className="ctrl-btn" onClick={() => removeFromDetails(movie.id)}>
                            <i className="fa-fw fa fa-times"></i>
                        </button>
                    </>
                )
            }
        </div>
    )
}


