import React, {createContext, useReducer, useEffect} from 'react';
import  AppReducer from "./AppReducer";

// INTIAL state
const initialState = {
    mostpopular: localStorage.getItem("mostpopular")
     ? JSON.parse(localStorage.getItem("mostpopular")) 
    : [],
    details: localStorage.getItem("details")
     ? JSON.parse(localStorage.getItem("details")) 
    : [],
};

//create createContextext
export const GlobalContext = createContext(initialState);

// provider conponents
export const GlobalProvider = props =>{
    const [state, dispatch] = useReducer(AppReducer, initialState);

useEffect(() =>{
    localStorage.setItem("mostpopular", JSON.stringify(state.mostpopular))
    localStorage.setItem("details", JSON.stringify(state.details))
}, [state]);


//actions
const addMovieToMostPopular = (movie) =>{
    dispatch({type: "ADD_MOVIE_TO_MOSTPOPULAR", payload: movie })
}

const removeMovieFromPopularList = (id) =>{
    dispatch({type: "REMOVE_MOVIE_FROM_POPULAR_LIST", payload: id});
}

const addMovieToDetailsMoive = movie => {
    dispatch({type: "ADD_MOVIE_TO_DETAILS_MOVIE", payload: movie})
}

const moveToMostPopular = (movie) =>{
    dispatch({ type: "MOVE_TO_MOST_POPULAR", payload: movie})
}

 const removeFromDetails = id =>{
     dispatch({type: "REMOVE_FROM_DETAILS", payload: id})
 }

    return  (
        <GlobalContext.Provider value={{
            mostpopular: state.mostpopular,
             details: state.details,
              addMovieToMostPopular,
              removeMovieFromPopularList,
              addMovieToDetailsMoive,
              moveToMostPopular,
              removeFromDetails,
              }}>
            {props.children}
        </GlobalContext.Provider>
    )
}