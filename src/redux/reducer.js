import {GET_MOVIES_BY_NAME, ADD_FAVORITE, REMOVE_FAVORITE} from './actions';

const initialState = {
  movies: [],
  favorite: [],
}

export const reducer = (state = initialState, actions) => {
  switch(actions.type){
    case GET_MOVIES_BY_NAME:
      return{
        ...state,
        movies: actions.payload
      };
    case ADD_FAVORITE:
      return{
        ...state,
        favorite: [...state.favorite, actions.payload]
      };
    case REMOVE_FAVORITE:
      return{
        ...state,
        favorite: state.favorite.filter(e => e.imdbID !== actions.payload)
      };
    default:
      return state
  }
}