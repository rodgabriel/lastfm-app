import axios from "axios";

import {
  GET_ARTIST_REQUEST,
  GET_ARTIST_SUCCESS,
  GET_ARTIST_FAIL,
} from "../constants/buscasContants";

const buscarArtistData = (artist) => async (dispatch) => {
  try {
    dispatch({ type: GET_ARTIST_REQUEST });
    const { data } = await axios.post(
      `http://localhost:5000/artist/${artist}`,
      {
        params: {
          method: `artist.getinfo`,
          artist: artist.toLowerCase(),
        },
      }
    );
    dispatch({
      type: GET_ARTIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ARTIST_FAIL,
      payload: error.message,
    });
  }
};

export default buscarArtistData;
