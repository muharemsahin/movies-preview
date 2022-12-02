export default (state, action) =>{
    switch(action.type) {
        case "ADD_MOVIE_TO_MOSTPOPULAR":
            return {
                ...state,
                mostpopular: [action.payload, ...state.mostpopular],
            }
            case "REMOVE_MOVIE_FROM_POPULAR_LIST":
                return {
                    ...state,
                    mostpopular: state.mostpopular.filter(
                        movie => movie.ide !== action.payload
                        ),
                }
                case "ADD_MOVIE_TO_DETAILS_MOVIE":
                    return {
                        ...state,
                        mostpopular: state.mostpopular.filter(
                            movie => movie.ide !== action.payload.id
                            ),
                            details : [action.payload, ...state.watched],
                    }
                    case "MOVE_TO_MOST_POPULAR":
                        return {
                            ...state,
                            details: state.details.filter(movie => movie.id !== action.payload.id),
                            mostpopular: [action.payload, ...state.mostpopular]
                        }
                        case "REMOVE_FROM_DETAILS":
                            return {
                                ...state,
                                details: state.details.filter(movie => movie.id !== action.payload)
                            }
        default: 
        return state;
    }
}