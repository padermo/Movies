import axios from "axios";

export const GET_MOVIES_BY_NAME = 'GET_MOVIES_BY_NAME';
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

const key = process.env.REACT_APP_API_KEY;

export const getMoviesByName = (name) => {
  return async (dispatch) => {
    const dataApi = await axios.get(`http://www.omdbapi.com/?apikey=${key}&s=${name}`);
    dispatch({type: GET_MOVIES_BY_NAME, payload: dataApi.data.Search});
  }
}

export const addFavorite = (data) => {
  return async (dispatch) => {
    dispatch({type: ADD_FAVORITE, payload: data})
  }
}

export const removeFavorite = (id) => {
  return async (dispatch) => {
    dispatch({type: REMOVE_FAVORITE, payload: id})
  }
}