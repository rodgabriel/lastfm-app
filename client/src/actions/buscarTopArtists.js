import axios from "axios";

import {
  GET_TOP_ARTISTS_REQUEST,
  GET_TOP_ARTISTS_SUCCESS,
  GET_TOP_ARTISTS_FAIL,
} from "../constants/buscasContants";

const buscarTopArtists = () => async (dispatch) => {
  try {
    dispatch({ type: GET_TOP_ARTISTS_REQUEST });
    const { data } = await axios.post("http://localhost:5000/top", {
      params: {
        method: "geo.gettopartists",
        country: "brazil",
      },
    });
    dispatch({
      type: GET_TOP_ARTISTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_TOP_ARTISTS_FAIL,
      payload: error.message,
    });
  }
};

export default buscarTopArtists;
