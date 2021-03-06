import {
  GET_TOP_ARTISTS_REQUEST,
  GET_TOP_ARTISTS_SUCCESS,
  GET_TOP_ARTISTS_FAIL,
} from "../constants/buscasContants";

const topArtistsReducer = (state = { topArtists: [] }, action) => {
  switch (action.type) {
    case GET_TOP_ARTISTS_REQUEST:
      return state;
    case GET_TOP_ARTISTS_SUCCESS:
      return action.payload;
    case GET_TOP_ARTISTS_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};

export default topArtistsReducer;
